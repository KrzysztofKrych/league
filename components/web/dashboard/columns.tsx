import { LeagueDto, ResultDto } from '../../../services/table/interfaces';

export const columns = () => [
  {
    title: 'Position',
    dataIndex: '',
    key: 'position',
    render: (result: ResultDto) => {
      return result.position;
    },
  },
  {
    title: 'teamId',
    dataIndex: 'teamId',
    key: 'teamId',
  },
  {
    title: 'W',
    dataIndex: '',
    key: 'won',
    render: (result: ResultDto) => {
      return result.won;
    },
  },
  {
    title: 'L',
    dataIndex: '',
    key: 'lost',
    render: (result: ResultDto) => {
      return result.lost;
    },
  },
  {
    title: 'D',
    dataIndex: '',
    key: 'draw',
    render: (result: ResultDto) => {
      return result.draw;
    },
  },
  {
    title: 'Points',
    dataIndex: '',
    key: 'points',
    render: (result: ResultDto) => {
      return result.points;
    },
  },
];
