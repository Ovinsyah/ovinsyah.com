import Styled, { css } from 'styled-components';

export const SectionHeader = Styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 10px;
    .image-state{
      display: none;
    }
  }
  h2{
    font-size: 2em;
    margin: 0px;
    background: black;
    color: white;
    width: fit-content;
    padding: 6px 10px;
    letter-spacing: 1px;
    border-radius: 1px;
  }
  h1{
    font-size: 4em;
    margin: 0px;
    letter-spacing: 2px;
  }
  h3{
    margin: 0;
    font-weight: 300;
    font-size: 1.6em;
  }
  .caption{
    display: flex;
    align-items: center;
  }
  .image-state{
    padding: 20px;
    text-align: right;
    img{
      width: 80%;
    }
  }
`;

export const SectionServices = Styled.div`
  background: #ffc22a;
  padding: 46px 0px;
  min-height: 200px;
`;
export const Grids = Styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: -16px;
`;
export const Grid = Styled.div`
  flex-basis: 0px;
  flex-grow: 1;
  max-width: 100%;
  padding: 16px;
`;
export const Touch = Styled.a<{ black: boolean }>`
  height: 46PX;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0 3rem;
  border-radius: 3rem;
  ${props => props.black ? css`
    border: 1px solid black;
    color: white;
    background: black;
    transition: all .3s;
    &:hover{
      background: white;
      color: black;
      transition: all .3s;
    }
  ` : css`
  border: 1px solid black;
    color: black;
    transition: all .3s;
    &:hover{
      background: black;
      color: white;
      transition: all .3s;
    }
  `}
`;
export const SectionButton = Styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;