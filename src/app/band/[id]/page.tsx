import Link from 'next/link'

export async function generateStaticParams() {
  const posts = [{id:"oscos"}]; 
  return posts;
}

export default function Page({ params }: { params: { id: string } }) {
  const checkout = `/band/${params.id}/book`
  return <>
    <div>My Post: {params.id}</div>
    <Link href={checkout}>Dashboard</Link>
  </>
}