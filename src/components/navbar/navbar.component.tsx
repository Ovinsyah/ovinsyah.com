import Styled from 'styled-components';

export const Navbar = Styled.nav`
  height: 64px;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 999;
`;

export default () => {
  return (
    <Navbar>
      <svg width="10" height="36" viewBox="0 0 10 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.545457 4.72727C0.545457 7.33807 2.66193 9.45454 5.27273 9.45454C7.88353 9.45454 10 7.33807 10 4.72727C10 2.11647 7.88353 0 5.27273 0C2.66193 0 0.545457 2.11647 0.545457 4.72727Z" fill="black" />
        <path d="M10 15.0303C10 12.4195 7.88353 10.303 5.27273 10.303C2.66193 10.303 0.545457 12.4195 0.545457 15.0303V31.2727C0.545457 33.8835 2.66193 36 5.27273 36C7.88353 36 10 33.8835 10 31.2727V15.0303Z" fill="black" fillOpacity="0.6" />
        <path d="M10 23.1515C10 20.5407 7.88353 18.4243 5.27273 18.4243C2.66193 18.4243 0.545457 20.5407 0.545457 23.1515V31.2727C0.545457 33.8835 2.66193 36 5.27273 36C7.88353 36 10 33.8835 10 31.2727V23.1515Z" fill="black" />
      </svg>
    </Navbar>
  )
}