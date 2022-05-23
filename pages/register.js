import { css } from '@emotion/react'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import getConfig from 'next/config'
import { setCookie } from 'nookies'
import { set } from 'date-fns'
import { tr } from 'date-fns/locale'

import AuthenticationLayout from '@/components/layout/authenticationLayout'

const Register = () => {
  const API_URL =
    getConfig().publicRuntimeConfig.API_URL || 'http://localhost:1337'
  const router = useRouter()

  const [passwordvisible, setpasswordvisible] = useState(false)
  const [conpasswordvisible, setconpasswordvisible] = useState(false)
  const [passwordstrength, setpasswordstrength] = useState('')
  const [userexist, setuserexist] = useState(false)

  const handlePwdStrength = () => {
    let regExpNum = '[0-9]'
    let regExpLower = '[a-z]'
    let regExpUpper = '[A-Z]'
    let regExpSpecial = '[@#$%^&-+=()]'
    if (
      getValues().password.match(regExpNum) &&
      getValues().password.match(regExpLower) &&
      getValues().password.match(regExpUpper) &&
      getValues().password.match(regExpSpecial)
    ) {
      setpasswordstrength('strong')
    } else if (
      (getValues().password.match(regExpNum) &&
        getValues().password.match(regExpLower)) ||
      (getValues().password.match(regExpNum) &&
        getValues().password.match(regExpUpper)) ||
      (getValues().password.match(regExpNum) &&
        getValues().password.match(regExpSpecial))
    ) {
      setpasswordstrength('weak')
    } else if (password.length <= 8) {
      setpasswordstrength('weak')
    }
    // else if (
    //   getValues().password.length >= 8 &&
    //   getValues().password.match(regExpNum) &&
    //   getValues().password.match(regExpLower) &&
    //   getValues().password.match(regExpUpper)
    // ) {
    //   setpasswordstrength('good')
    // }
  }
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm()
  const onSubmit = async (values) => {
    const registerInfo = {
      username: values.username,
      email: values.email.replaceAll(/(\r\n|\s)/g, ''),
      password: values.password,
    }
    const result = await fetch(`${API_URL}/api/auth/local/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerInfo),
    })
    const data = await result.json()
    console.log(result.status)
    if (result.status == 200) {
      setCookie(null, 'token', data.jwt, {
        secure: false,
        maxAge: 24 * 60 * 60 * 14, //2 weeks
        path: '/',
      })
      router.push('/ken')
    } else {
      console.log(data.error.message)
    }
    reset()
  }
  const checkUsername = async () => {
    const user = await fetch(
      `${API_URL}/api/users?filters[username][$eq]=${getValues().username}`
    )
    const data = await user.json()
    if (data.length === 1) {
      setuserexist(true)
    } else {
      setuserexist(false)
    }
  }

  return (
    <AuthenticationLayout>
      <div css={styles.container}>
        <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div css={styles.register}>Register</div>
          <input
            type="text"
            id="email"
            name="username"
            css={styles.input}
            className={`${userexist && 'form-invalid'}`}
            placeholder="Name"
            onKeyUp={() => {
              trigger('username'), checkUsername()
            }}
            {...register('username', {
              required: 'Your name is required',
            })}
          />
          {userexist && <p css={styles.error_msg}>This name already exists.</p>}

          <input
            type="email"
            id="email"
            name="email"
            css={styles.input}
            className={`${
              errors.email && getValues().email.length > 0 && 'form-invalid'
            }`}
            placeholder="Email"
            onKeyUp={() => trigger('email')}
            {...register('email', {
              required: true,
              pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ },
            })}
          />
          {errors.email && getValues().email.length > 0 && (
            <p css={styles.error_msg}>Invalid Email</p>
          )}
          <div className="input-with-icon ">
            <input
              type={passwordvisible ? 'text' : 'password'}
              id="password"
              name="password"
              css={styles.input}
              placeholder="Password"
              className={`${
                errors.password &&
                getValues().password.length > 0 &&
                'form-invalid'
              }`}
              onKeyUp={() => {
                trigger('password')
                handlePwdStrength()
              }}
              {...register('password', {
                required: true,
                minLength: 8,
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                },
              })}
            />
            <div
              className="eye-icon"
              onClick={() => setpasswordvisible(!passwordvisible)}
            >
              {passwordvisible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          {errors.password && getValues().password.length > 0 && (
            <p css={styles.error_msg}>
              Minimum 8 characters.
              <br /> Must contain upper and lowercase, numbers and symbol.
            </p>
          )}
          <div className="input-with-icon ">
            <input
              type={conpasswordvisible ? 'text' : 'password'}
              id="password"
              name="confirmpassword"
              css={styles.input}
              className={`${
                errors.confirmpassword &&
                getValues().confirmpassword.length > 0 &&
                'form-invalid'
              }`}
              placeholder="Confirm Password"
              onKeyUp={() => trigger('confirmpassword')}
              {...register('confirmpassword', {
                validate: (value) =>
                  value === getValues().password ||
                  'The password did not match',
              })}
            />
            <div
              className="eye-icon"
              onClick={() => setconpasswordvisible(!conpasswordvisible)}
            >
              {conpasswordvisible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          {errors.confirmpassword && getValues().confirmpassword.length > 0 && (
            <p css={styles.error_msg}>Passwords don't match.</p>
          )}
          <div css={styles.strength_container}>
            <label css={styles.label_strength}>password strength:</label>
            <label
              css={styles.strength_status({
                strong: passwordstrength == 'strong',
              })}
            >
              {passwordstrength}
            </label>
          </div>
          <label css={styles.label_policy}>
            By registering,I agree with the{' '}
            <span css={styles.span_link}>Privacy Policy</span>
          </label>
          <input type="submit" css={styles.button} />
          <label css={styles.label_signin}>
            Already have an account?&nbsp;<Link href="/login">Sign in</Link>
          </label>
        </form>
      </div>
    </AuthenticationLayout>
  )
}

const styles = {
  container: css`
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.08);
    margin: 35px 100px;
    font-family: 'Open Sans';
    display: flex;
    justify-content: center;
  `,
  register: css`
    font-size: 18px;
    color: #082932;
    font-weight: 600;
    margin-top: 32px;
    margin-bottom: 32px;
    text-align: center;
  `,
  form: css`
    margin: 20px 20px;
    display: flex;
    flex-direction: column;
  `,
  input: css`
    background: #ffffff;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    border: none;
    width: 340px;
    height: 58px;
    padding: 20px;
    margin-bottom: 8px;
  `,
  error_msg: css`
    font-weight: 600;
    font-size: 12px;
    color: #e53e3e;
    margin-bottom: 8px;
  `,

  passwordcontainer: css`
    position: relative;
  `,
  eyes: css`
    position: absolute;
    right: 23px;
    top: 22.6px;
  `,
  strength_container: css`
    display: flex;
  `,
  label_strength: css`
    font-weight: 400;
    font-style: italic;
    font-size: 13px;
    color: #718096;
    margin-bottom: 36px;
  `,
  strength_status: ({ strong }) => css`
    font-weight: 400;
    font-style: italic;
    font-size: 13px;
    color: ${strong ? '#48BB78' : '#e53e3e'};
  `,
  label_policy: css`
    font-weight: 400;
    font-size: 14px;
    color: #082932;
    margin-bottom: 25px;
  `,
  button: css`
    background: linear-gradient(53.56deg, #13547a -0.45%, #00abd1 125.69%);
    box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11),
      0px 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    border: 0;
    width: 340px;
    height: 58px;
    color: #ffffff;
    margin-bottom: 20px;
  `,
  span_link: css`
    color: #5e72e4;
  `,
  label_signin: css`
    font-weight: 400;
    font-size: 13px;
    color: #718096;
    text-align: center;
  `,
}
export default Register

// {errors.username &&
//   getValues().username.length > 0 &&
//   userexist == true && (
//     <p css={styles.error_msg}>This name already exists.</p>
//   )}

// className={`${
//   errors.username &&
//   getValues().username.length > 0 &&
//   'form-invalid'
// }`}
