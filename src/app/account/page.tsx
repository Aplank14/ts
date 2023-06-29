export default async function Page() {
  const res:any = await fetch("http://localhost:3000/api/isAlive");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const json = await res.json();
  return <h1>Hello account holder! {json.message}</h1>
}