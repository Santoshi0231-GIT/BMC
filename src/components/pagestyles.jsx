import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color:pink; /* Dark background for the navbar */
  color: white;
 display: flex;
 justify-content: baseline;
  align-items: center;
  padding: 1rem 0;
  z-index: 1000; /* Ensures the navbar is on top of other content */
  width: 100%;
   height: 4rem; 
  box-sizing: border-box;
`;

export const NavLink = styled.div`
  margin: 0 1rem;
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 100;
    &:hover {
      text-decoration: underline;
    }
  }
`;