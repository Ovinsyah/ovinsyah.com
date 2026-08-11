import Styled, { createGlobalStyle, keyframes } from 'styled-components';

/* ==== Global ==== */

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    height: 100%;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  }
`;

/* ==== Animations ==== */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const heroZoom = keyframes`
  from { transform: scale(1.15); }
  to   { transform: scale(1); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scaleX(1); }
  50%      { opacity: 1;   transform: scaleX(1.1); }
`;

/* ==== Layout ==== */

export const Screen = Styled.section`
  position: fixed;
  inset: 0;
  overflow: hidden;
  color: #fff;
  display: flex;
  flex-direction: column;
  --mx: 0;
  --my: 0;
`;

export const BgLayer = Styled.div`
  position: absolute;
  inset: -40px;
  transform: translate3d(
    calc(var(--mx) * -28px),
    calc(var(--my) * -22px),
    0
  );
  will-change: transform;
`;

export const Bg = Styled.div`
  position: absolute;
  inset: 0;
  background: url('/jkie4/hero.png') center/cover no-repeat;
  animation: ${heroZoom} 22s ease-out both;
`;

export const Overlay = Styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg,
      rgba(0,0,0,0.55) 0%,
      rgba(0,0,0,0.15) 30%,
      rgba(0,0,0,0.4) 65%,
      rgba(0,0,0,0.88) 100%);
`;

/* ==== Top bar ==== */

export const TopBar = Styled.header`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  opacity: 0;
  animation: ${fadeIn} 0.9s ease-out 0.15s forwards;

  @media (max-width: 640px) {
    padding: 18px 22px;
  }
`;

export const Logo = Styled.img`
  height: 40px;
  width: auto;
  filter: brightness(0) invert(1);

  @media (max-width: 640px) { height: 30px; }
`;

export const TopMeta = Styled.div`
  font-size: 0.72em;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);

  span {
    color: #fff;
    font-weight: 700;
  }
`;

/* ==== Content ==== */

export const Content = Styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px 40px;
  transform: translate3d(
    calc(var(--mx) * 10px),
    calc(var(--my) * 8px),
    0
  );
  will-change: transform;

  @media (max-width: 640px) {
    padding: 0 22px 24px;
  }
`;

export const Badge = Styled.div`
  display: inline-block;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.28);
  padding: 6px 12px;
  font-size: 0.65em;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
  align-self: flex-start;
  opacity: 0;
  animation: ${fadeUp} 0.9s ease-out 0.35s forwards;
`;

export const Title = Styled.h1`
  font-size: clamp(3em, 8vw, 6em);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 0.95;
  margin: 0 0 16px;
  max-width: 780px;
  opacity: 0;
  animation: ${fadeUp} 0.9s ease-out 0.55s forwards;
`;

export const Sub = Styled.p`
  font-size: clamp(0.95em, 1.4vw, 1.1em);
  color: rgba(255,255,255,0.85);
  line-height: 1.65;
  max-width: 560px;
  margin: 0 0 28px;
  opacity: 0;
  animation: ${fadeUp} 0.9s ease-out 0.7s forwards;
`;

export const Loc = Styled.div`
  font-size: 0.78em;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.2);
  max-width: 560px;
  opacity: 0;
  animation: ${fadeUp} 0.9s ease-out 0.85s forwards;

  strong {
    color: #fff;
    font-weight: 700;
  }
`;

/* ==== Bottom bar ==== */

export const BottomBar = Styled.footer`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  border-top: 1px solid rgba(255,255,255,0.12);
  font-size: 0.7em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  opacity: 0;
  animation: ${fadeIn} 0.9s ease-out 1s forwards;

  .divider {
    display: inline-block;
    width: 32px;
    height: 1px;
    background: rgba(255,255,255,0.5);
    animation: ${pulse} 2.4s ease-in-out infinite;
    transform-origin: left center;
    margin-right: 12px;
    vertical-align: middle;
  }

  @media (max-width: 640px) {
    padding: 12px 22px;
    font-size: 0.62em;
    letter-spacing: 1.5px;
  }
`;
