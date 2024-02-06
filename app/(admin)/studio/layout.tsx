import SanityNavbar from "@/app/components/SanityNavbar"
import { Provider } from "@/app/utils/Provider"
import './globals.css'


export const metadata = {
  title: 'XBlog Studio',
  description: 'Upload and manage your blog posts here!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       <Provider>
          <SanityNavbar />
          {children}
       </Provider>
      </body>
    </html>
  )
}
