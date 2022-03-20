import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { Route } from '../../../utils/enums';
import { StyledMenu } from '../../styled-components/styledComponents';
import { MENU_ITEMS } from './consts';
import { getDefaultSelectedMenuItem } from './helpers';

export const MainMenu = () => {
  const { push, asPath } = useRouter();
  return (
    <StyledMenu mode="inline" defaultSelectedKeys={[getDefaultSelectedMenuItem(asPath as Route)]}>
      {MENU_ITEMS.map(({ name, route }, index) => (
        <Menu.Item onClick={() => push(route)} key={index}>
          {name}
        </Menu.Item>
      ))}
    </StyledMenu>
  );
};
