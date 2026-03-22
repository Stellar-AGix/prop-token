import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'PropToken – Fractional Property on Stellar', description: 'Own fractions of real estate via Stellar tokens' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" /></head>
      <body style={{ fontFamily: "'IBM Plex Sans', sans-serif", background: '#0c1520', color: '#e8f0fe', margin: 0 }}>{children}</body>
    </html>
  )
}
