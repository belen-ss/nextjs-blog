import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Layout.module.css'

const name = 'Astrid Sosa'

export default function Layout({ children, title, description, home }) {
  console.log(home)
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content={description} />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2X1}>{name}</h1>
          </>
        )
          : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/img/1.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
      </header>
      <nav>
        <Link href="/"><a>Inicio | </a></Link>
        <Link href="/blog"><a>Blog | </a></Link>
        <Link href="/contact"><a>Contacto | </a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>
      <main> {children} </main>

      <footer>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </footer>
    </div>
  )
}

Layout.defaultProps = {
  title: "Next.js | Mi sitio de Next.js",
  description: "Descripción de mi sitio web"
};
