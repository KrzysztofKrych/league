import { useState } from 'react';
import { LeagueDto } from '../../../services/table/interfaces';
import { StyledTable } from '../../styled-components/styledComponents';
import { columns } from './columns';

interface Props {
  league: LeagueDto;
}

export const Dashboard = ({ league }: Props) => {
  return <StyledTable pagination={false} size="middle" columns={columns()} dataSource={league.results} />;
};
