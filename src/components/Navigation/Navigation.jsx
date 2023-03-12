import { StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to={'/'}>Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={'/users'}>Users</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
