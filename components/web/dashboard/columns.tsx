import { TableItemDto } from '../../../services/table/interfaces';

export const columns = () => [
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Points',
    dataIndex: '',
    key: 'points',
    render: (table: TableItemDto) => {
      return table.results.points;
    },
  },
  {
    title: 'W',
    dataIndex: '',
    key: 'won',
    render: (table: TableItemDto) => {
      return table.results.won;
    },
  },
  {
    title: 'L',
    dataIndex: '',
    key: 'lost',
    render: (table: TableItemDto) => {
      return table.results.lost;
    },
  },
  {
    title: 'D',
    dataIndex: '',
    key: 'draw',
    render: (table: TableItemDto) => {
      return table.results.draw;
    },
  },
];
