import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { designDraftValidationSchema } from 'validationSchema/design-drafts';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.design_draft
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getDesignDraftById();
    case 'PUT':
      return updateDesignDraftById();
    case 'DELETE':
      return deleteDesignDraftById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getDesignDraftById() {
    const data = await prisma.design_draft.findFirst(convertQueryToPrismaUtil(req.query, 'design_draft'));
    return res.status(200).json(data);
  }

  async function updateDesignDraftById() {
    await designDraftValidationSchema.validate(req.body);
    const data = await prisma.design_draft.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteDesignDraftById() {
    const data = await prisma.design_draft.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
