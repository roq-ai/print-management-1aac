const mapping: Record<string, string> = {
  customers: 'customer',
  'design-drafts': 'design_draft',
  despatches: 'despatch',
  enquiries: 'enquiry',
  invoices: 'invoice',
  orders: 'order',
  presses: 'press',
  tasks: 'task',
  users: 'user',
  workflows: 'workflow',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
