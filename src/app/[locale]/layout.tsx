import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Glauber Monteiro',
  description: '@devglauber',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={cn(inter.className, 'flex flex-col h-screen')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="h-full grid grid-cols-home">
            <Sidebar />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
