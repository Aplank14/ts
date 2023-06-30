import Link from 'next/link'
import {getUsers} from '../../../../lib/mongodb'

export const dynamicParams = false;

export async function generateStaticParams() {
  return getUsers();
}

export default function Page({ params }: { params: { id: string } }) {
  const checkout = `/band/${params.id}/book`
  return <>
    <div>My Post: {params.id}</div>
    <Link href={checkout}>Dashboard</Link>
  </>
}