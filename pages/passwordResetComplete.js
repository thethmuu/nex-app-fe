import React from 'react'
import { css, jsx } from '@emotion/react'
import Link from 'next/link'

import CardLayout from '@/components/layout/index'
import AuthenticationLayout from '@/components/layout/authenticationLayout'
import FormLayout from '@/components/layout/formContainer'

const PasswordResetComplete = () => {
  return (
    <CardLayout>
      <AuthenticationLayout>
        <FormLayout>
          <div className="header-container">
            <div css={styles.logo}>
              <img src="/images/passwordResetComplete.svg" />
            </div>
            <span className="title">Password Reset Complete</span>
          </div>
          <div className="body-container">
            <div className="formControl">
              <Link href="/login">
                <input
                  type="submit"
                  value="Back to Sign In"
                  className="button"
                />
              </Link>
            </div>
          </div>
        </FormLayout>
      </AuthenticationLayout>
    </CardLayout>
  )
}

const styles = {
  logo: css`
    text-align: center;
    margin-top: 100px;
    // margin-bottom: 40px;
    cursor: pointer;
  `,
}

export default PasswordResetComplete
