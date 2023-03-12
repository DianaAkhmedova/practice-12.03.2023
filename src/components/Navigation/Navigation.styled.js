import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
    font-weight: bold;
  }
`;
