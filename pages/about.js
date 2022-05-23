import { css } from '@emotion/react'

import AboutLayout from '@/components/layout'
import Navbar from '@/components/layout/navbar'

export default function AboutPage() {
  return (
    <AboutLayout title="About | NexStack" navbar={<Navbar />}>
      <div css={styles.container}>
        <h1>About Us</h1>
        <p>Nex-App has three personnels who are admin, manager and employee.</p>
        <p>Version 1.0.0</p>
      </div>
    </AboutLayout>
  )
}

const styles = {
  container: css`
    padding: 0 50px;
    margin: 5em auto;
  `,
}
