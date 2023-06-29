import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'welcome',
  description: 'welcome to my page',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}
