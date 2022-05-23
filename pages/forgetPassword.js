import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { css, jsx } from '@emotion/react'

import CardLayout from '@/components/layout/index'
import AuthenticationLayout from '@/components/layout/authenticationLayout'
import FormLayout from '@/components/layout/formContainer'
import getConfig from 'next/config'

const ForgetPassword = () => {
  const API_URL =
    getConfig().publicRuntimeConfig.API_URL || 'http://localhost:1337'
  // handle events
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm()

  // submit data input value
  const onSubmit = async (values) => {
    const emailCheck = await fetch(
      `{API_URL}/api/users?filters[username][$eq]=${getValues().email}`
    )
    if (emailCheck.length == 1) {
      const res = await fetch(`${API_URL}/api/auth/forget-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email: values.email,
        },
      })
      const data = await data.json()
      console.log(data)
    }
    reset()
  }

  return (
    <CardLayout>
      <AuthenticationLayout>
        <FormLayout>
          <div className="header-container">
            <div css={styles.logo}>
              <img src="/images/mailbox.svg" />
            </div>
            <span className="title">Forgot Password ?</span>
            <span className="description">
              No worries, we'll send you reset instructions
            </span>
          </div>

          <div className="body-container">
            <form onSubmit={handleSubmit(onSubmit)} className="formControl">
              <div className="input-with-icon">
                <input
                  className={`${errors.email && 'form-invalid'}`}
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  {...register('email', {
                    required: 'Please enter your email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  onKeyUp={() => {
                    trigger('email')
                  }}
                />
                {errors.email && (
                  <span className="error-msg">{errors.email.message}</span>
                )}
              </div>
              <input type="submit" value="Reset Password" className="button" />
            </form>
            <div css={styles.requestNewOne}>
              <span>Didn't receive an instruction email?</span>
              <a href="#">Request a new one</a>
            </div>
          </div>
          <div className="footer-container">
            <label>
              Remeber your password?
              <Link href="/login">
                <a>Sign in</a>
              </Link>
            </label>
          </div>
        </FormLayout>
      </AuthenticationLayout>
    </CardLayout>
  )
}

const styles = {
  logo: css`
    margin-top: 50px;
    // margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
  `,
   requestNewOne: css`
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: var(--dark-gray);
    margin-top: 15px;

    a {
      color: var(--links);
      text-decoration: none;
      margin-left: 10px;
    }
  `,
}

export default ForgetPassword
