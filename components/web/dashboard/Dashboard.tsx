import { TableItemDto } from '../../../services/table/interfaces';
import { HeaderLabel } from '../../common/HeaderLabel';
import { StyledDefaultContainer, StyledFlex, StyledTable } from '../../styled-components/styledComponents';
import { columns } from './columns';

interface Props {
  table: TableItemDto[];
}

export const Dashboard = ({ table }: Props) => {
  return (
    <StyledDefaultContainer>
      <StyledFlex direction="column">
        <HeaderLabel />
        <StyledTable
          rowKey={(record) => (record as TableItemDto).id}
          pagination={false}
          size="middle"
          columns={columns()}
          dataSource={table}
        />
      </StyledFlex>
    </StyledDefaultContainer>
  );
};
