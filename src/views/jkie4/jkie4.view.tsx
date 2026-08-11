import { useEffect, useRef } from 'react'
import {
  GlobalStyle,
  Screen,
  BgLayer,
  Bg,
  Overlay,
  TopBar,
  Logo,
  TopMeta,
  Content,
  Badge,
  Title,
  Sub,
  Loc,
  BottomBar,
} from './jkie4.style'

function Jkie4View() {
  const screenRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.title = 'JK4E · RT 004 / RW 03B · Jatikramat Indah I'
  }, [])

  useEffect(() => {
    const el = screenRef.current
    if (!el) return

    if (!window.matchMedia('(hover: hover)').matches) return

    let rafId = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1
      targetY = (e.clientY / window.innerHeight) * 2 - 1
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06
      el.style.setProperty('--mx', currentX.toFixed(3))
      el.style.setProperty('--my', currentY.toFixed(3))
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <Screen ref={screenRef}>
        <BgLayer>
          <Bg />
        </BgLayer>
        <Overlay />

        <TopBar>
          <Logo src="/jkie4/logo.png" alt="JK4E" />
          <TopMeta>
            RT <span>004</span> · RW <span>03B</span>
          </TopMeta>
        </TopBar>

        <Content>
          <Badge>Rukun Tetangga 004 · Rukun Warga 03B</Badge>
          <Title>Jatikramat Indah I</Title>
          <Sub>
            Rumah bagi warga yang tumbuh bersama sebagai satu keluarga besar
            — bertetangga dengan hangat, bergotong royong, saling menjaga.
          </Sub>
          <Loc>
            <strong>Kel. Jatikramat</strong> · Kec. Jati Asih · Kota Bekasi
          </Loc>
        </Content>

        <BottomBar>
          <div>
            <span className="divider" />
            © {new Date().getFullYear()} · Pengurus RT 004
          </div>
          <div>Jatikramat Indah I</div>
        </BottomBar>
      </Screen>
    </>
  )
}

export default Jkie4View
