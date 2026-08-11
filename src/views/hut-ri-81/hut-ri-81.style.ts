import Styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #f7f4ef;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  @media print {
    body { background: #fff; }
  }
`;

export const Page = Styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 32px 20px 96px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: #1a1a1a;
  line-height: 1.6;

  @media print {
    padding: 0;
    max-width: 100%;
  }
`;

export const Hero = Styled.header`
  position: relative;
  background: #fff;
  border: 1px solid #e8e0d0;
  padding: 48px 32px 40px;
  margin-bottom: 32px;
  overflow: hidden;
  text-align: center;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 8px;
  }
  &::before { top: 0; background: #c00; }
  &::after { bottom: 0; background: #c00; }

  @media print {
    border: 2px solid #000;
    padding: 32px 24px;
  }
`;

export const HeroBadge = Styled.div`
  display: inline-block;
  background: #c00;
  color: #fff;
  padding: 6px 14px;
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;

  @media print { background: #000; }
`;

export const HeroNumber = Styled.div`
  font-size: 4.5em;
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -3px;
  color: #c00;
  margin-bottom: 8px;

  @media print { color: #000; }

  @media (max-width: 600px) {
    font-size: 3.5em;
  }
`;

export const HeroTitle = Styled.h1`
  font-size: 1.6em;
  margin: 12px 0 4px;
  letter-spacing: 0.5px;
  font-weight: 700;
`;

export const HeroSubtitle = Styled.p`
  font-size: 1em;
  color: #666;
  margin: 0 0 20px;
`;

export const HeroMeta = Styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  padding-top: 20px;
  border-top: 1px dashed #e0d8c8;

  > div {
    text-align: center;
  }

  .label {
    font-size: 0.7em;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 4px;
  }

  .value {
    font-size: 1em;
    font-weight: 600;
    color: #1a1a1a;
  }
`;

export const TotalStrip = Styled.div`
  background: #1a1a1a;
  color: #fff;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  .label {
    font-size: 0.75em;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #999;
  }

  .value {
    font-size: 1.8em;
    font-weight: 800;
    letter-spacing: -0.5px;
    font-variant-numeric: tabular-nums;
  }

  @media print {
    background: #fff;
    color: #000;
    border: 2px solid #000;

    .label { color: #666; }
  }
`;

export const Section = Styled.section`
  margin-bottom: 40px;

  @media print {
    page-break-inside: avoid;
    margin-bottom: 24px;
  }
`;

export const SectionHead = Styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #1a1a1a;

  h2 {
    font-size: 1.15em;
    margin: 0;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .count {
    font-size: 0.85em;
    color: #999;
    letter-spacing: 0.5px;
  }
`;

export const PosCard = Styled.article`
  background: #fff;
  border: 1px solid #e8e0d0;
  margin-bottom: 20px;

  @media print {
    page-break-inside: avoid;
    border: 1px solid #333;
  }
`;

export const PosHead = Styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 24px;
  background: #fafaf6;
  border-bottom: 1px solid #e8e0d0;

  .letter {
    background: #c00;
    color: #fff;
    font-weight: 800;
    font-size: 1.1em;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0;
    flex-shrink: 0;

    @media print { background: #000; }
  }

  .info {
    flex: 1;
    min-width: 0;
  }

  .pos {
    font-size: 1.05em;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin: 0;
    text-transform: uppercase;
  }

  .desc {
    font-size: 0.8em;
    color: #666;
    margin: 2px 0 0;
  }

  .sub {
    text-align: right;
    flex-shrink: 0;
  }

  .sub .lbl {
    font-size: 0.65em;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .sub .val {
    font-size: 1.15em;
    font-weight: 800;
    color: #1a1a1a;
    font-variant-numeric: tabular-nums;
  }
`;

export const ItemTable = Styled.div`
  padding: 8px 0;
`;

export const ItemRow = Styled.div<{ $muted?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 140px 140px;
  gap: 16px;
  padding: 12px 24px;
  border-bottom: 1px dashed #eee;
  align-items: baseline;
  opacity: ${p => (p.$muted ? 0.5 : 1)};

  &:last-child {
    border-bottom: none;
  }

  .no {
    display: inline-block;
    color: #999;
    font-size: 0.85em;
    font-variant-numeric: tabular-nums;
    margin-right: 6px;
  }

  .name {
    font-size: 0.9em;
    color: #1a1a1a;
  }

  .note {
    display: block;
    font-size: 0.75em;
    color: #999;
    font-style: italic;
    margin-top: 2px;
  }

  .qty {
    font-size: 0.85em;
    color: #666;
    text-align: right;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .total {
    font-size: 0.9em;
    font-weight: 600;
    color: #1a1a1a;
    text-align: right;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr auto;
    gap: 8px;

    .qty {
      grid-column: 1;
      text-align: left;
      font-size: 0.75em;
    }

    .total {
      grid-row: 1;
      grid-column: 2;
    }
  }
`;

export const Note = Styled.div`
  background: #fffbea;
  border-left: 3px solid #f2c14e;
  padding: 14px 18px;
  margin-bottom: 32px;
  font-size: 0.9em;
  color: #4a4a4a;

  strong { color: #1a1a1a; }

  @media print {
    background: #fff;
    border: 1px solid #000;
    border-left: 4px solid #000;
  }
`;

export const DonationBox = Styled.div`
  background: #fff;
  border: 2px solid #1a1a1a;
  padding: 28px 28px 24px;
  margin-top: 32px;
  position: relative;

  .head {
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px dashed #ccc;
  }

  h3 {
    margin: 0 0 6px;
    font-size: 1.2em;
    letter-spacing: 0.5px;
  }

  .subhead {
    font-size: 0.85em;
    color: #666;
    margin: 0;
  }

  p {
    font-size: 0.9em;
    line-height: 1.6;
  }

  .rekening {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 20px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .rek {
    background: #f7f4ef;
    padding: 16px;
    border: 1px solid #e8e0d0;
  }

  .rek .role {
    font-size: 0.7em;
    color: #c00;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 6px;

    @media print { color: #000; }
  }

  .rek .name {
    font-size: 1em;
    font-weight: 700;
    margin-bottom: 2px;
  }

  .rek .addr {
    font-size: 0.8em;
    color: #666;
    margin-bottom: 10px;
  }

  .rek .bank {
    font-size: 0.75em;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 2px;
  }

  .rek .no {
    font-family: 'SF Mono', Menlo, monospace;
    font-size: 1em;
    font-weight: 700;
    color: #1a1a1a;
    letter-spacing: 1px;
  }

  @media print {
    background: #fff;
    .rek { background: #fff; border: 1px solid #666; }
  }
`;

export const Footer = Styled.footer`
  text-align: center;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #e8e0d0;

  .merdeka {
    font-size: 1.4em;
    font-weight: 800;
    color: #c00;
    letter-spacing: 4px;
    margin-bottom: 8px;

    @media print { color: #000; }
  }

  .sig {
    font-size: 0.85em;
    color: #999;
  }
`;

export const PrintButton = Styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: #c00;
  color: #fff;
  border: none;
  padding: 14px 22px;
  font-size: 0.85em;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(204,0,0,0.35);
  transition: transform 0.15s, background 0.2s;

  &:hover {
    background: #a00;
    transform: translateY(-2px);
  }

  @media print {
    display: none;
  }
`;
