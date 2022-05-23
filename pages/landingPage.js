import { css } from '@emotion/react'
import LandingLayout from '@/components/layout/index'
import Navbar from '@/components/layout/navbar'

function dashboard() {
  return (
    <LandingLayout title='Landing Page | NexStack' navbar={<Navbar />}>
      <div css={styles.container}>
        <h1>Landing Page</h1>
      </div>
    </LandingLayout>
  )
}

const styles = {
  container: css`
    padding: 0 50px;
    margin: 5em auto;
  `,
}

export default dashboard
