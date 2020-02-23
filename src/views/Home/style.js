import Styled from 'styled-components';

export const SectionHeader = Styled.div`
  min-height: calc(100vh - 113px);
  display: flex;
  align-items: center;
  h2{
    font-size: 30px;
    margin: 0px;
    background: black;
    color: white;
    width: fit-content;
    padding: 6px 10px;
    letter-spacing: 1px;
    border-radius: 1px;
  }
  h1{
    font-size: 70px;
    margin: 0px;
    letter-spacing: 2px;
  }
  h3{
    margin: 0;
    font-weight: 300;
    font-size: 26px;
  }
  .caption{
    min-width: 560px;
    display: flex;
    align-items: center;
  }
  .image-state{
    padding: 20px;
    text-align: right;
    img{
      max-width: 400px;
      width: 100%;
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