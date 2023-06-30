import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'bands',
  description: 'desc',
}

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <div>nest</div>
   
        {children}
        <div>footer</div>
      </section>
    )
  }