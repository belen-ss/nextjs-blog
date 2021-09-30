import Layout from "../../components/layout"
import Link from 'next/link'

export default function index({data}) {
  return (
    <Layout>
      <h1>Lista de Blog</h1>
      {
        data.map(({id, title, body}) => (
          <div key={id}>
            <Link href={`/blog/${id}`}>
              <a><h3>{id} - {title}</h3></a>
            </Link>
            <p>{body}</p>
          </div>
        ))
      }
    </Layout>
  )
}


export async function getStaticProps () {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error)
  }
}