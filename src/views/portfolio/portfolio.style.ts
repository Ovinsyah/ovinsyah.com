import Styled from 'styled-components';

export const PortfolioSection = Styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 120px;
`;

export const PageTitle = Styled.h1`
  font-size: 2.5em;
  margin: 0 0 8px;
  letter-spacing: 1px;
`;

export const PageSubtitle = Styled.p`
  font-size: 1.1em;
  color: #666;
  margin: 0 0 48px;
`;

export const PortfolioGrid = Styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PortfolioCard = Styled.div`
  border: 1px solid #e0e0e0;
  overflow: hidden;
  transition: border-color 0.2s;
  &:hover {
    border-color: #000;
  }
`;

export const CardImage = Styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-bottom: 1px solid #e0e0e0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.3s;
  }
  &:hover img {
    filter: grayscale(0%);
  }
`;

export const CardBody = Styled.div`
  padding: 20px;
`;

export const CardTitle = Styled.h3`
  font-size: 1em;
  margin: 0 0 8px;
  letter-spacing: 0.5px;
`;

export const CardDescription = Styled.p`
  font-size: 0.85em;
  color: #666;
  line-height: 1.6;
  margin: 0 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardTag = Styled.span`
  font-size: 0.75em;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardLink = Styled.a`
  font-size: 0.8em;
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #000;
  &:hover {
    color: #666;
    border-color: #666;
  }
`;

export const GroupSection = Styled.div`
  margin-bottom: 56px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const GroupTitle = Styled.h2`
  font-size: 1.2em;
  margin: 0 0 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #333;
`;
