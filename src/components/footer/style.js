import Styled from 'styled-components';

export const Footer = Styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ContentFooter = Styled.div`
  background: black;
  width: fit-content;
  min-width: 330px;
  height: 48px;
  margin: auto;
  border-radius: 70px 70px 0px 0px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;