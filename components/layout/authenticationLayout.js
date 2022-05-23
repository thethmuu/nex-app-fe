import { css } from '@emotion/react'
import CompanyLogo from '../icons/companyLogo'
// import dynamic from 'next/dynamic'
import BackgroundOval from '@/components/icons/backgroundOval'
import { bp } from '@/utils/index'

const AuthenticationForm = ({ children }) => {
  // const BackgroundImage = dynamic(() => import('@/components/icons/oval'), {
  //   ssr: false,
  //   loading: () => <p>...</p>,
  // })

  return (
    <div className="container-fluid" css={styles.container}>
      <CompanyLogo />

      {children}

      <div css={styles.backgroundLogo}>
        <BackgroundOval />
      </div>
    </div>
  )
}

const styles = {
  container: css`
    position: absolute;
    inset: 0;

    padding: 0 3rem;

    background: var(--primary-gradient);
    background-repeat: no-repeat;
    overflow-y: scroll;
    overflow-x: hidden;
    @media (max-width: 1200px) {
      overflow: auto;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
    }
  `,
  backgroundLogo: css`
    position: absolute;
    right: 2rem;
    top: 2rem;
    @media (max-width: 992px) {
      position: absolute;
      top: 230px;
    }
  `,
}

export default AuthenticationForm
