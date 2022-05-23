import { css } from '@emotion/react'

const PersonalAddMore = ({ addRow }) => (
  <div css={style.addmoreContainer} onClick={addRow}>
    <img css={style.addmoreImg} src="../images/addmore.svg" />
    <label css={style.addmoreLabel}>Add More</label>
  </div>
)

const style = {
  addmoreContainer: css`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: flex-start !important;
  `,
  addmoreImg: css`
    margin-right: 7.19px;
  `,
  addmoreLabel: css`
    cursor: pointer;
  `,
}

export default PersonalAddMore
