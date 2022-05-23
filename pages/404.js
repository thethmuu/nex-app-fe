import Link from "next/link"
import { FaExclamationCircle } from "react-icons/fa"
import { css, jsx } from "@emotion/react"

import NotFoundLayout from "@/components/layout/index"

export default function NotFoundPage() {
  return (
    <NotFoundLayout>
      <div css={styles.error}>
        <h1>
          <i className="fa-solid fa-circle-exclamation" />
          404
        </h1>
        <h2>Sorry, there is nothing here.</h2>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </div>
    </NotFoundLayout>
  );
}

const styles = {
  error: css`
    text-align: center;
    margin: 100px 0 200px;

    h1 {
      font-size: 50px;
      display: block;
    }
  `,
}
