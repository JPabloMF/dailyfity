import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import Logo from '../../assets/img/dailfitylogo.png';

const StyledHeader = styled.header`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0 0 15px 15px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img``;
const StyledSeparator = styled.span``;
const StyledIcon = styled(Icon)`

`;

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="dailyfity logo" />
      <StyledIcon disabled name="language" />
      <StyledSeparator />
      <StyledIcon disabled name="paint brush" />
    </StyledHeader>
  );
};

Header.propTypes = {
  props: PropTypes.object.isRequired
};

export default Header;
