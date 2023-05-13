import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Mensagem dia das mães',
  description: 'Fiz uma breve mensagem para minha esposa no dia das mães.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className} w-full`}>
        {children}
      </body>
    </html>
  )
}
