import React from 'react';
import { StyledFlex } from '../../styled-components/styledComponents';
import { MainMenu } from '../../web/mainMenu/MainMenu';

export const WebComponentContainer = (component: React.ReactElement) => {
  return (
    <StyledFlex>
      <MainMenu />
      {component}
    </StyledFlex>
  );
};
