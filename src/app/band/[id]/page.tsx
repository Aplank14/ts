import 'server-only'
import {cache} from 'react'
import Link from 'next/link'
import clientPromise from '../../../../lib/mongodb'

export const dynamicParams = false;

const getUsers = cache(async () => {
  const client = await clientPromise
  const dab = client.db("SampleDB")
  const collection = dab.collection('SampleCollection');
  const document = await collection.find({}, { projection: {sku : true}});
  const r = await document.toArray()
  const routes = r.map((doc) => { return {id: doc.sku}});
  return routes;
});

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