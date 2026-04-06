import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KAFES OUZO — 大阪・長堀橋のスペシャルティコーヒー',
  description: '大阪・長堀橋駅徒歩3分。豊富なシングルオリジンと丁寧な一杯をご提供するコーヒー専門店。平日10:00〜17:00営業。島之内1-11-15 ラ・フォーレ長堀橋1F。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
