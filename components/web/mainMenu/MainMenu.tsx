import { Menu } from 'antd';
import { StyledMenu } from '../../styled-components/styledComponents';
import { MENU_ITEMS } from './consts';

export const MainMenu = () => {
  return (
    <StyledMenu  mode="inline" defaultSelectedKeys={['0']}>
      {MENU_ITEMS.map(({ name }, index) => (
        <Menu.Item key={index}>{name}</Menu.Item>
      ))}
    </StyledMenu>
  );
};
