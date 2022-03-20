import type { NextPage } from 'next';
import { WebComponentContainer } from '../components/hoc/webComponentContainer/WebComponentContainer';
import { Dashboard } from '../components/web/dashboard/Dashboard';
import { TableItemDto } from '../services/table/interfaces';
import { TableService } from '../services/table/TableService';

interface Props {
  table: TableItemDto[];
}

const DashboardPage = ({ table }: Props) => {
  return WebComponentContainer(<Dashboard table={table} />);
};

DashboardPage.getInitialProps = async () => {
  const res = await TableService.getTable('1');
  return {
    table: res.data.data,
  };
};

export default DashboardPage;
