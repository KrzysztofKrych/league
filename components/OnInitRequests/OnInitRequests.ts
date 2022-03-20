import { useEffect } from 'react';
import { TableService } from '../../services/table/TableService';

export const OnInitRequests = () => {
  useEffect(() => {
    TableService.getTable('1');
  }, []);
  return null;
};
