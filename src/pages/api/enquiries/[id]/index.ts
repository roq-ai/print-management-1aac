import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { enquiryValidationSchema } from 'validationSchema/enquiries';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.enquiry
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getEnquiryById();
    case 'PUT':
      return updateEnquiryById();
    case 'DELETE':
      return deleteEnquiryById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getEnquiryById() {
    const data = await prisma.enquiry.findFirst(convertQueryToPrismaUtil(req.query, 'enquiry'));
    return res.status(200).json(data);
  }

  async function updateEnquiryById() {
    await enquiryValidationSchema.validate(req.body);
    const data = await prisma.enquiry.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteEnquiryById() {
    const data = await prisma.enquiry.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
