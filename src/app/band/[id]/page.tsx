export async function generateStaticParams() {
  const posts = [{id:"oscos"}]; 
  return posts;
}

export default function Page({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>
}