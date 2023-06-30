import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'bands',
  description: 'desc',
}

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <div>nest</div>
   
        {children}
        <div>footer</div>
      </section>
    )
  }