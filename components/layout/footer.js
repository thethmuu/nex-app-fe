import { css, jsx } from '@emotion/react'

export default function Footer() {
  return (
    <footer css={styles.footer}>
      {`Copyright © ${new Date().getFullYear()} Nex App`}
    </footer>
  )
}

const styles = {
  footer: css`
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  `,
}
