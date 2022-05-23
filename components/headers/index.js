import { css } from '@emotion/react'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { FaSignOutAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'

import { NEXT_URL } from '@/config/index'
import showDefaultNoti from '@/utils/notification'

const Header = ({ menuCollapse, menuIconClick }) => {
  const router = useRouter()

  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    })

    if (res.ok) {
      showDefaultNoti('You have sucessfully logged out.', 'info')
      router.push('/landingPage')
    }
  }

  return (
    <nav css={styles.headerMenu} className={`${!menuCollapse && 'opened'}`}>
      <div id="icon" css={styles.menuIcon} onClick={menuIconClick}>
        <FiMenu size="1.5em" />
      </div>
      <div css={styles.menuItems}>
        <div css={styles.searchBox}>
          <input
            type="text"
            css={styles.searchInput}
            placeholder="Search here"
          />
          <span css={styles.searchIcon}>
            <FiSearch />
          </span>
        </div>

        <img src="/images/notification.svg" />

        <img src="/images/message.svg" />

        <img src="/images/user.svg" />

        <span>Ken Ling</span>

        {/* <img src="/images/vector.svg" /> */}
        <button
          onClick={() => logout()}
          className="btn-info btn-icon"
          style={{ color: '#f2f5fc', borderRadius: '5px' }}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </nav>
  )
}

export default Header
const styles = {
  headerMenu: css`
    background: var(--buttons);
    height: 66px;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    transition: margin 0.3s ease;
  `,
  menuIcon: css`
    cursor: pointer;
  `,
  menuItems: css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  searchBox: css`
    position: relative;
  `,
  searchIcon: css`
    position: absolute;
    right: 0px;
    padding-right: 20px;
    padding-top: 6px;
    font-size: 14px;
    color: white;
  `,
  searchInput: css`
    background: rgba(255, 255, 255, 0.2);
    box-shadow: var(--shadow);
    border-radius: 20px;
    color: #ffffff;
    border: #ffffff;
    padding: 8px;
    padding-left: 20px;
    font-size: 13px;
  `,
}
