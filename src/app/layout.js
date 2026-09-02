import './globals.css'

export const metadata = {
  title: 'Seltrix — AI-Powered Visual Store Manager',
  description:
    'Turn your security cameras into an AI agent that watches, searches, and reports. Natural language video search, business insights, real-time alerts. No monthly fee. All local.',
  openGraph: {
    title: 'Seltrix — AI-Powered Visual Store Manager',
    description: 'Your cameras see everything. Now make them understand everything.',
    url: 'https://seltrix.net',
    siteName: 'Seltrix',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}