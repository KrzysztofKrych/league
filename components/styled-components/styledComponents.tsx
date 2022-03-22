import styled from 'styled-components';
import { Menu, Table } from 'antd';
import { COLORS } from './colors';

export const StyledMenu = styled(Menu)`
    &.ant-menu {
        width: 256px;
        height: 100vh;
    }
`

export const StyledFlex = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
`;

export const StyledTable = styled(Table)`
  tbody tr {
    cursor: pointer;
  }
  th.ant-table-cell {
    background: transparent;
  }
  .ant-pagination-item-active {
    border-color: ${COLORS.GREEN};
    a {
      color: ${COLORS.GREEN};
    }
  }
`;

export const StyledHeaderLabel = styled.h2<{}>`
  text-align: left;
  background-color: ${COLORS.WHITE};
  width: 100%;
`;

export const StyledDefaultContainer = styled.div`
  padding: 1rem;
`;
