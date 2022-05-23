import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'

import AuthenticationLayout from '@/components/layout/authenticationLayout'
import FormContainer from '@/components/layout/formContainer'
import { API_URL } from '@/config/index'
import showDefaultNoti from '@/utils/notification'
import useAuth from 'store/auth'

const Login = (props) => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm()

  const [passwordShown, setPasswordShow] = useState(false)
  const [passwordIcon, setPasswordIcon] = useState(false)

  const passwordIconClick = () => {
    setPasswordIcon(!passwordIcon)
    setPasswordShow(passwordShown ? false : true)
  }

  // const user = useAuth((state) => state.user)
  // const isAuthenticated = useAuth((state) => state.isAuthenticated)

  const submitData = async (values) => {
    values.email = values.email.replaceAll(/(\r\n|\s)/g, '') // strip whitespaces
    const loginInfo = {
      identifier: values.email,
      password: values.password,
    }

    const result = await fetch(`${API_URL}/api/auth/local`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    })

    const json = await result.json()

    if (result.status === 200) {
      setCookie(null, 'token', json.jwt, {
        secure: false,
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      // user = (user = json.user)
      // isAuthenticated = (isAuthenticated = true)

      const value = {
        user: json.user,
        isAuthenticated: true,
      }

      if (value?.user?.confirmed === true && value?.isAuthenticated) {
        showDefaultNoti('Successful Login!', 'success')
        reset()
        router.push('/')
      }
    } else {
      showDefaultNoti('Incorrect email or password.', 'error')
    }
  }

  return (
    <AuthenticationLayout>
      <FormContainer>
        <form onSubmit={handleSubmit(submitData)} css={styles.form}>
          <div css={styles.title}>Sign in</div>
          <div css={styles.description}>
            Enter your email and password below
          </div>

          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username or Email"
            onKeyUp={() => trigger('email')}
            className={`${errors.email && 'form-invalid'}`}
            {...register('email', {
              required: 'Your username or email is required',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              },
            })}
          />
          {errors.email && (
            <span css={styles.errorMsg}>{errors?.email?.message}</span>
          )}

          <div className="input-with-icon mt-3">
            <input
              type={passwordShown ? 'text' : 'password'}
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              onKeyUp={() => trigger('password')}
              className={`${errors.password && 'form-invalid'}`}
              {...register('password', {
                required: 'Your Password is required',
                minLength: 8,
              })}
            />

            <div className="eye-icon">
              {passwordIcon === false ? (
                <FaEyeSlash onClick={passwordIconClick} />
              ) : (
                <FaEye onClick={passwordIconClick} />
              )}
            </div>

            {errors.password && (
              <span className="error-msg">{errors?.password?.message}</span>
            )}
          </div>

          <div css={styles.rememberMeContainer}>
            <label>
              <input
                type="checkbox"
                name="checkbox"
                css={styles.checkRemember}
              />
              Remember Me
            </label>

            <Link href="/forgetPassword">
              <a css={styles.formRecovery}>Forgot Password?</a>
            </Link>
          </div>

          <input
            type="submit"
            className="button b-primary"
            css={styles.signInBtn}
            value="Sign In"
          />
        </form>
        {/* <div className="footer-container">
          <label>
            Don&apos;t have an account yet?
            <Link href="/register">
              <a>Register now</a>
            </Link>
          </label>
        </div> */}
      </FormContainer>
    </AuthenticationLayout>
  )
}

const styles = {
  form: css`
    margin: 20px 20px;

    input[type='text'],
    input[type='password'],
    input[type='email'] {
      display: flex;
      align-items: center;
      width: 100%;
      box-shadow: var(--shadow);
      border-radius: 8px;
      border: none;
      padding: 14px 10px;
    }

    .input-with-icon {
      position: relative;
    }

    .input-with-icon .eye-icon {
      position: absolute;
      right: 16px;
      top: 8px;
      font-size: 22px;
      color: var(--dark-gray);
      cursor: pointer;
    }

    input:focus {
      outline: none;
      border: 2px solid #00abd1;
    }

    .form-invalid {
      border: 1px solid var(--red) !important;
    }
  `,
  errorMsg: css`
    font-weight: 600;
    font-size: 12px;
    color: var(--red);
    display: block;
    margin-left: 10px;
    margin-top: 8px;
  `,
  title: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: var(--primary);
    margin-bottom: 5px;
  `,
  description: css`
    font-weight: 400;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--dark-gray);
    margin-bottom: 40px;
  `,
  rememberMeContainer: css`
    margin-top: 2em;

    label {
      font-weight: 400;
      font-size: 14px;
      color: var(--primary);
      margin-right: 100px;

      input {
        box-shadow: 0px 1px 3px rgba(50, 50, 93, 0.15),
          0px 1px 0px rgba(0, 0, 0, 0.02);
        border-radius: 4px;

        margin-right: 8px;
      }
    }
  `,
  formRecovery: css`
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    align-items: center;
    color: var(--links);
  `,
  signInBtn: css`
    width: 100%;
    margin-top: 2em;
  `,
}

export default Login
