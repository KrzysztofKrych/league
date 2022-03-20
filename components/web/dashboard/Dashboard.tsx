import { useState } from 'react';
import { TableItemDto } from '../../../services/table/interfaces';
import { StyledTable } from '../../styled-components/styledComponents';
import { columns } from './columns';

interface Props {
  table: TableItemDto[];
}

export const Dashboard = ({ table }: Props) => {
  return <StyledTable pagination={false} size="middle" columns={columns()} dataSource={table} />;
};
