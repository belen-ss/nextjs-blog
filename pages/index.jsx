import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout
      title='Home | My Next.js Site'
      description="Home"
      home
    >
      <section className={utilStyles.headingMd}>
        <p>I love guinea pigs!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, doloremque maiores ut nostrum iste accusantium quidem! Similique quasi nisi possimus. Qui inventore praesentium doloribus. Saepe nulla pariatur architecto temporibus! Quis?</p>
      </section>
    </Layout>
  )
}
