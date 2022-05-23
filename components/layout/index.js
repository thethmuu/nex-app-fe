import { useState } from 'react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import Head from 'next/head'

import Header from '../headers'
import Sidebar from './sidebar'
import Footer from './footer'

export default function Layout({
  title,
  description,
  keywords,
  author,
  children,
}) {
  const router = useRouter()
  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => setMenuCollapse(!menuCollapse)
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Head>

      <div className="d-flex">
        <Sidebar menuCollapse={menuCollapse} />

        <div css={styles.container}>
          <Header menuCollapse={menuCollapse} menuIconClick={menuIconClick} />

          <main css={styles.main}>{children}</main>

          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.defaultProps = {
  title: 'NexStack',
  description: 'Nex App',
  keywords: 'admin manager employee',
  author: 'nex app dev',
}

const styles = {
  container: css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `,
  main: css`
    flex-grow: 1;
  `,
}
