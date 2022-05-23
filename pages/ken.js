import React from 'react'
import { css } from '@emotion/react'

function Ken(props) {
  return (
    <div css={styles.container}>
      <div css={styles.header}>Welcome</div>
      <div css={styles.contents}>
        <div className="side-border">Side bar</div>
        <div className="side-border" css={styles.contentDetails}>
          Side Content
        </div>
        <div className="side-border">A side Content</div>
      </div>
      <div css={styles.footer}>Footer</div>
    </div>
  )
}

const styles = {
  container: css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  header: css`
    font-size: 32px;
    border: 1px solid red;
  `,
  contents: css`
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    flex: 1;

    // class name can be follow BEM naming convention http://getbem.com/naming/
    // side-border is name of object
    // side__border is mean parent name is side and child name is border
    .side-border {
      border: 1px solid blue;
    }
  `,
  contentDetails: css`
    width: 100%;
  `,
  footer: css`
    height: 100px;
    border: 1px solid red;
  `,
}

export default Ken
