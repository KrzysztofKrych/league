import type { NextPage } from 'next';
import { WebComponentContainer } from '../components/hoc/webComponentContainer/WebComponentContainer';
import { Dashboard } from '../components/web/dashboard/Dashboard';

const DashboardPage: NextPage = () => {
  return WebComponentContainer(<Dashboard />);
};

export default DashboardPage;
