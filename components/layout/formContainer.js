import { css } from '@emotion/react'
import styled from '@emotion/styled'

const FormContainer = ({ children }) => {
  return <div css={styles.formContainer}>{children}</div>
}

const styles = {
  formContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 400px;

    background: #ffffff;
    box-shadow: var(--shadow);
    border-radius: 15px;
    z-index: 1;
    margin: 35px 100px;
    padding: 4em 0;
  `,
}

export default FormContainer
