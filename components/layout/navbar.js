import { css } from '@emotion/react'
import Link from 'next/link'
import { FaSignInAlt } from 'react-icons/fa'

import LogoImage from '../icons/logo'
// import { NEXT_URL } from '@/config/index'

function Navbar() {
  // const login = async ({ email: identifier, password }) => {
  //   const res = await fetch(`${NEXT_URL}/api/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       identifier,
  //       password,
  //     }),
  //   })

  //   if (res.ok) {
  //     router.push('/login')
  //   }
  // }

  return (
    <div css={styles.header}>
      <div css={styles.logo}>
        <Link href="/landingPage">
          <a>
            <LogoImage />
            Nex App
          </a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Admin</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <button
                className="btn-info btn-icon"
                style={{ color: '#f2f5fc', borderRadius: '5px' }}
              >
                <FaSignInAlt /> Log In
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const styles = {
  header: css`
    width: 100%;
    font-size: 18px;
    font-family: 'Comfortaa', sans-serif;
    display: inline-flex;
    justify-content: space-between;
    align-items: baseline;
    background: var(--primary-gradient);
    height: 60px;
    padding: 0 30px;
    box-shadow: var(--shadow);

    a {
      color: var(--lighter-gray);
      margin-right: 20px;
      text-decoration: none;

      &:hover {
        color: var(--inside-color);
      }
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
    }
  `,

  logo: css`
    color: #fff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

export default Navbar
