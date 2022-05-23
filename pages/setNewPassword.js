import React, { useState } from 'react'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { css, jsx } from '@emotion/react'
import Link from 'next/link'

import CardLayout from '@/components/layout/index'
import AuthenticationLayout from '@/components/layout/authenticationLayout'
import FormLayout from '@/components/layout/formContainer'

const SetNewPassword = () => {
  // handle events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm()

  // submit data input value
  const onSubmit = (data) => {
    reset()
  }

  // change password eye icon using state
  const [passwordIcon, setPasswordIcon] = useState(false)

  const passwordIconClick = () => {
    setPasswordIcon(!passwordIcon)
  }

  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(false)

  const confirmPasswordIconClick = () => {
    console.log(confirmPasswordIcon)
    setConfirmPasswordIcon(!confirmPasswordIcon)
  }

  // check password using watch
  const password = watch('password')

  return (
    <CardLayout>
      <AuthenticationLayout>
        <FormLayout>
          <div className="header-container">
            <div css={styles.logo}>
              <img src="/images/reset_icon.svg" />
            </div>
            <span className="title">Set New Password</span>
          </div>
          <div className="body-container">
            <form onSubmit={handleSubmit(onSubmit)} className="formControl">
              <div className="input-with-icon">
                <input
                  type={passwordIcon === false ? 'password' : 'text'}
                  name="password"
                  placeholder="New Password"
                  className={`${errors.password && 'fp-invalid'}`}
                  {...register('password', {
                    required: 'A password is required',
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                      message: `Minimum 8 characters.
                          Must contain upper and lowercasae, numbers and symbol.`,
                    },
                    minLength: {
                      value: 8,
                      message: `Minimum 8 characters.
                          Must contain upper and lowercasae, numbers and symbol.`,
                    },
                    maxLength: {
                      value: 25,
                      message: 'Maximum 25 characters.',
                    },
                  })}
                  onKeyUp={() => {
                    trigger('password')
                  }}
                />

                {errors.password && (
                  <p className="error-msg">
                    {errors.password.message}
                    <br />
                  </p>
                )}

                {/* dynamic eye icon */}
                <div className="eye-icon">
                  {passwordIcon === false ? (
                    <FaEyeSlash onClick={passwordIconClick} />
                  ) : (
                    <FaEye onClick={passwordIconClick} />
                  )}
                </div>
              </div>
              <div className="input-with-icon">
                <input
                  type={confirmPasswordIcon === false ? 'password' : 'text'}
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  className={`confirm-password ${
                    errors.confirmPassword && 'fp-invalid'
                  }`}
                  {...register('confirmPassword', {
                    required: 'A confirm password is required',
                    validate: (value) =>
                      value === password || "Passwords don't match",
                  })}
                  onKeyUp={() => {
                    trigger('confirmPassword')
                  }}
                />
                {errors.confirmPassword && (
                  <span className="error-msg">
                    {errors.confirmPassword.message}
                  </span>
                )}

                {/* dynamic eye icon */}
                <div className="eye-icon">
                  {confirmPasswordIcon === false ? (
                    <FaEyeSlash onClick={confirmPasswordIconClick} />
                  ) : (
                    <FaEye onClick={confirmPasswordIconClick} />
                  )}
                </div>
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
    margin-top: 30px;
    // margin-bottom: 11.2px;
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

export default SetNewPassword
