import CompanyLogo from '@/components/icons/companyLogo'
import { css } from '@emotion/react'

const PersonalHeader = () => (
  <div css={style.personalHeader}>
    <CompanyLogo />
  </div>
)

const style = {
  personalHeader: css`
    background: linear-gradient(
      77.15deg,
      #244d79 13.06%,
      #4192a2 52.51%,
      #9bccd0 88.36%
    );
    position: relative;
    display: flex;
    align-items: center;

    svg {
      width: 150px;
      height: 70px;
    }
  `,
}
export default PersonalHeader
