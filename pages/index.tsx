import type { NextPage } from 'next';
import { WebComponentContainer } from '../components/hoc/webComponentContainer/WebComponentContainer';
import { Dashboard } from '../components/web/dashboard/Dashboard';
import { LeagueDto } from '../services/table/interfaces';
import { LeagueService } from '../services/table/TableService';

interface Props {
  league: LeagueDto;
}

const DashboardPage: NextPage<Props> = ({ league }) => {
  return WebComponentContainer(<Dashboard league={league} />);
};

DashboardPage.getInitialProps = async () => {
  const res = await LeagueService.getLeague('624737b5234f82a64bebf86e');
  return {
    league: res.data.data,
  };
};

export default DashboardPage;
