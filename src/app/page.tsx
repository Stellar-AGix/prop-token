'use client'
import { useState } from 'react'

const properties = [
  { id: 1, name: 'Lekki Heights Tower', location: 'Lagos, Nigeria', value: 2400000, tokens: 24000, price: 100, yield: 9.2, sold: 78, emoji: '🏢' },
  { id: 2, name: 'Nairobi Garden Flats', location: 'Nairobi, Kenya', value: 800000, tokens: 8000, price: 100, yield: 11.4, sold: 45, emoji: '🏘️' },
  { id: 3, name: 'Cape Town Beach Villa', location: 'Cape Town, SA', value: 1600000, tokens: 16000, price: 100, yield: 7.8, sold: 91, emoji: '🏖️' },
]

export default function Home() {
  const [invested, setInvested] = useState<Record<number, number>>({})
  const [shares, setShares] = useState<Record<number, string>>({ 1: '5', 2: '5', 3: '5' })

  const invest = (id: number) => setInvested(prev => ({ ...prev, [id]: parseInt(shares[id] || '0') }))

  return (
    <div style={{ minHeight: '100vh', background: '#0c1520' }}>
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e3050' }}>
        <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 22, fontWeight: 700 }}>Prop<span style={{ color: '#60a5fa' }}>Token</span></div>
        <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#64748b' }}>
          <span style={{ cursor: 'pointer', color: '#e8f0fe' }}>Properties</span>
          <span style={{ cursor: 'pointer' }}>My Portfolio</span>
          <span style={{ cursor: 'pointer' }}>Learn</span>
        </div>
        <button style={{ background: '#1d4ed8', border: 'none', borderRadius: 8, padding: '10px 20px', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Connect Wallet</button>
      </nav>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '50px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>Own a piece of<br /><span style={{ color: '#60a5fa' }}>prime real estate.</span></h1>
          <p style={{ color: '#64748b', fontSize: 17 }}>Each token = $100 of property. Trade freely on Stellar DEX.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {properties.map(p => (
            <div key={p.id} style={{ background: '#131f2e', border: '1px solid #1e3050', borderRadius: 20, overflow: 'hidden' }}>
              <div style={{ background: '#1e3050', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64 }}>{p.emoji}</div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 17, fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>{p.name}</h3>
                <div style={{ fontSize: 13, color: '#64748b', marginBottom: 16 }}>📍 {p.location}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
                  <div style={{ background: '#0c1520', borderRadius: 10, padding: '10px 12px' }}>
                    <div style={{ fontSize: 11, color: '#64748b', marginBottom: 4 }}>TOTAL VALUE</div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>${(p.value/1e6).toFixed(1)}M</div>
                  </div>
                  <div style={{ background: '#0c1520', borderRadius: 10, padding: '10px 12px' }}>
                    <div style={{ fontSize: 11, color: '#64748b', marginBottom: 4 }}>ANNUAL YIELD</div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#10b981' }}>{p.yield}%</div>
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#64748b', marginBottom: 6 }}>
                    <span>Tokens sold</span><span>{p.sold}%</span>
                  </div>
                  <div style={{ background: '#1e3050', borderRadius: 4, height: 6, overflow: 'hidden' }}>
                    <div style={{ background: '#60a5fa', height: '100%', width: `${p.sold}%`, borderRadius: 4 }} />
                  </div>
                </div>
                {invested[p.id] ? (
                  <div style={{ background: '#0d2620', border: '1px solid #166534', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                    <div style={{ color: '#4ade80', fontWeight: 700 }}>✓ You own {invested[p.id]} tokens</div>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>${(invested[p.id] * p.price).toLocaleString()} invested</div>
                  </div>
                ) : (
                  <div>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                      <input type="number" value={shares[p.id]} onChange={e => setShares(s => ({ ...s, [p.id]: e.target.value }))} style={{ flex: 1, background: '#0c1520', border: '1px solid #1e3050', borderRadius: 8, padding: '10px 12px', color: '#e8f0fe', fontSize: 16, fontWeight: 700, fontFamily: 'inherit', outline: 'none' }} />
                      <div style={{ background: '#1e3050', borderRadius: 8, padding: '10px 12px', fontSize: 13, color: '#60a5fa', fontWeight: 600, whiteSpace: 'nowrap' }}>${(parseInt(shares[p.id]||'0') * p.price).toLocaleString()}</div>
                    </div>
                    <button onClick={() => invest(p.id)} style={{ width: '100%', background: '#1d4ed8', border: 'none', borderRadius: 10, padding: '12px', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>Buy Tokens</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
