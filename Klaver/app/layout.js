import './globals.css'

export const metadata = {
  title: 'Klaver — natuurwijnbar & bistro',
  description: 'Klein, warm, en eerlijk. Natuurwijn en seizoensgerechten in het hart van de stad.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
