import { css } from '@emotion/react'

const ContentsLayout = ({ children }) => {
  return <main css={styles.container}>{children}</main>
}

const styles = {
  container: css`
    .contents {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: center;
    }

    h1 {
      height: 200px;
      width: 70%;
      padding-top: 120px;
    }

    p {
      height: 100px;
      width: 80%;
      padding-left: 280px;
    }
  `,
}

export default ContentsLayout
