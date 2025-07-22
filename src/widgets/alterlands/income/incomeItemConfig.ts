import { ChipColor } from '~/shared/ui/atoms/Chip';

import { Status } from './incomeTypes';

export const statusColor: Record<Status, `${ChipColor}`> = {
  'Ready to pay': 'yellow',
  Paid: 'green',
  'In progress': 'white',
  TBD: 'blue',
  Cancelled: 'red',
  Rejected: 'orange',
};
