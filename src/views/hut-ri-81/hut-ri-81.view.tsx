import { useEffect } from 'react'
import {
  GlobalStyle,
  Page,
  Hero,
  HeroBadge,
  HeroNumber,
  HeroTitle,
  HeroSubtitle,
  HeroMeta,
  Section,
  SectionHead,
  PosCard,
  PosHead,
  ItemTable,
  ItemRow,
  Note,
  DonationBox,
  Footer,
  PrintButton,
} from './hut-ri-81.style'

type Item = {
  nama: string
  qty: number
  harga: number
  note?: string
}

type Pos = {
  letter: string
  pos: string
  desc?: string
  items: Item[]
}

const anggaran: Pos[] = [
  {
    letter: 'A',
    pos: 'Sumbangan ke RW.03B',
    desc: 'Kontribusi ke tingkat RW untuk kegiatan bersama',
    items: [
      { nama: 'Sumbangan 17-an ke RW.03B', qty: 1, harga: 500_000 },
    ],
  },
  {
    letter: 'B',
    pos: 'Tim Olahraga',
    desc: 'Sewa lapangan, perlengkapan, & kaos tim',
    items: [
      { nama: 'Sewa Lapangan Indoor (Delta)', qty: 5, harga: 45_000 },
      { nama: 'Kock latihan badminton', qty: 2, harga: 100_000 },
      { nama: 'Kaos TIM Badminton', qty: 10, harga: 60_000, note: 'Harga masih cfm konveksi' },
      { nama: 'Kaos TIM Tenis Meja', qty: 4, harga: 60_000, note: 'Harga masih cfm konveksi' },
      { nama: 'Kaos TIM Catur', qty: 4, harga: 60_000, note: 'Harga masih cfm konveksi' },
    ],
  },
  {
    letter: 'C',
    pos: '17-an RT 004',
    desc: 'Konsumsi hari H, hadiah lomba, & apresiasi',
    items: [
      { nama: 'Sarapan Soto Kudus Pak Sumardi', qty: 100, harga: 25_000, note: 'Harga masih cfm Pak Sumardi' },
      { nama: 'KFC paket untuk anak-anak', qty: 30, harga: 21_890 },
      { nama: 'Minuman air mineral botol kecil (220 ml)', qty: 200, harga: 1_000 },
      { nama: 'Es Kelapa Muda', qty: 15, harga: 10_000 },
      { nama: 'Teh bandulan', qty: 2, harga: 40_000 },
      { nama: 'Gula & Kopi', qty: 1, harga: 80_000 },
      { nama: 'Es Batu', qty: 1, harga: 30_000 },
      { nama: 'Lap Tangan', qty: 1, harga: 50_000 },
      { nama: 'Accessories / Bungkus Kado', qty: 3, harga: 30_000 },
      { nama: 'Hadiah perlombaan 17 Agustus 2026', qty: 1, harga: 1_000_000, note: 'Beragam gift' },
      { nama: 'Tip (Satpam · Ran · Oyi · Danu)', qty: 1, harga: 800_000 },
    ],
  },
  {
    letter: 'D',
    pos: 'Gapura 17 Agustus',
    desc: 'Perawatan & pelengkap gapura tahun ini',
    items: [
      { nama: 'Pasang Gapura di Ujung Jl. Bima × pertigaan Jl. Kresna', qty: 0, harga: 0, note: 'Sudah dialokasikan tahun 2025' },
      { nama: 'Baja Ringan (0.75)', qty: 0, harga: 0, note: 'Sudah dialokasikan tahun 2025' },
      { nama: 'Dyna Drill', qty: 10, harga: 30_000 },
      { nama: 'Paku Roofing 1 Box (2.5 cm)', qty: 1, harga: 150_000 },
      { nama: 'Cat merah & putih tiang bambu umbul-umbul', qty: 2, harga: 17_500 },
      { nama: 'Spanduk Dirgahayu RI 17 Agustus 2026 ke-81', qty: 1, harga: 180_000 },
      { nama: 'Cat Gapura nuansa Merah Putih (anti karat)', qty: 2, harga: 5_000 },
    ],
  },
]

const fmt = (n: number) => `Rp ${n.toLocaleString('id-ID')}`
const fmtHarga = (n: number) => n.toLocaleString('id-ID')

const subtotal = (pos: Pos) => pos.items.reduce((s, i) => s + i.qty * i.harga, 0)

function HutRi81View() {
  useEffect(() => {
    document.title = 'RAB HUT RI ke-81 · RT 004'
  }, [])

  return (
    <>
      <GlobalStyle />
      <Page>
        <Hero>
          <HeroBadge>Panitia RT 004 · Merdeka</HeroBadge>
          <HeroNumber>81</HeroNumber>
          <HeroTitle>Hari Ulang Tahun Republik Indonesia</HeroTitle>
          <HeroSubtitle>Rencana Anggaran Biaya · Rangkaian Kegiatan 17 Agustus 2026</HeroSubtitle>
          <HeroMeta>
            <div>
              <div className="label">Tanggal</div>
              <div className="value">17 Agustus 2026</div>
            </div>
            <div>
              <div className="label">Lokasi</div>
              <div className="value">Area RT 004</div>
            </div>
            <div>
              <div className="label">Rangkaian</div>
              <div className="value">{anggaran.length} Pos Kegiatan</div>
            </div>
            <div>
              <div className="label">Sumber Dana</div>
              <div className="value">Kas RT + Donasi</div>
            </div>
          </HeroMeta>
        </Hero>

        <Section>
          <SectionHead>
            <h2>Rincian Anggaran</h2>
            <span className="count">Per pos · qty × harga</span>
          </SectionHead>

          {anggaran.map(pos => {
            const sub = subtotal(pos)
            return (
              <PosCard key={pos.letter}>
                <PosHead>
                  <div className="letter">{pos.letter}</div>
                  <div className="info">
                    <h3 className="pos">{pos.pos}</h3>
                    {pos.desc && <p className="desc">{pos.desc}</p>}
                  </div>
                  <div className="sub">
                    <div className="lbl">Sub Total</div>
                    <div className="val">{fmt(sub)}</div>
                  </div>
                </PosHead>

                <ItemTable>
                  {pos.items.map((item, idx) => {
                    const total = item.qty * item.harga
                    const muted = item.qty === 0
                    return (
                      <ItemRow key={idx} $muted={muted}>
                        <div className="name">
                          <span className="no">{String(idx + 1).padStart(2, '0')}.</span>
                          {item.nama}
                          {item.note && <span className="note">{item.note}</span>}
                        </div>
                        <div className="qty">
                          {item.qty} × Rp {fmtHarga(item.harga)}
                        </div>
                        <div className="total">
                          {total === 0 ? '—' : fmt(total)}
                        </div>
                      </ItemRow>
                    )
                  })}
                </ItemTable>
              </PosCard>
            )
          })}
        </Section>

        <Note>
          <strong>Catatan.</strong> Beberapa harga masih menunggu konfirmasi dari
          vendor (konveksi kaos & Pak Sumardi). Realisasi belanja akan
          dipertanggungjawabkan melalui laporan keuangan yang dibagikan setelah
          seluruh rangkaian kegiatan selesai. Sisa dana (bila ada) akan
          dikembalikan seluruhnya ke Kas RT sebagai cadangan lingkungan.
        </Note>

        <DonationBox>
          <div className="head">
            <h3>💌 Donasi Warga</h3>
            <p className="subhead">
              Sehubungan dengan keterbatasan Dana Kas RT, Pengurus &amp; Panitia RT 004
              membuka donasi dari warga untuk mensukseskan seluruh rangkaian kegiatan.
            </p>
          </div>

          <div className="rekening">
            <div className="rek">
              <div className="role">Bendahara 1</div>
              <div className="name">Ibu Stevani Sebayang</div>
              <div className="addr">Jl. Gatot Kaca G-114</div>
              <div className="bank">Bank Mandiri</div>
              <div className="no">1300029932103</div>
            </div>
            <div className="rek">
              <div className="role">Bendahara 2</div>
              <div className="name">Ibu Lisa Bambang</div>
              <div className="addr">Jl. Kunti</div>
              <div className="bank">Setor Tunai</div>
              <div className="no">Konfirmasi Langsung</div>
            </div>
          </div>

          <p style={{ marginTop: 20, fontSize: '0.85em', color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
            Mohon konfirmasi transfer via WhatsApp Bendahara agar dapat dicatat
            dengan baik. Setiap donasi — sekecil apa pun — sangat berarti.
            Terima kasih atas partisipasi Bapak / Ibu warga.
          </p>
        </DonationBox>

        <Footer>
          <div className="merdeka">MERDEKA!</div>
          <div className="sig">Panitia HUT RI ke-81 · RT 004</div>
        </Footer>

        <PrintButton onClick={() => window.print()}>
          Cetak / Simpan PDF
        </PrintButton>
      </Page>
    </>
  )
}

export default HutRi81View
