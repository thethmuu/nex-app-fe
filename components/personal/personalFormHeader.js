import { css } from '@emotion/react'

const PersonalFormHeader = ({ step }) => (
  <div css={style.personalFormHeader}>
    {step == 1 && (
      <div>
        <h4 css={style.header}>Personal Information</h4>
        <label css={style.headerLabel}>
          Please tell us more about yourself
        </label>
      </div>
    )}
    {step == 2 && (
      <div>
        <h4 css={style.header}>Bank Information</h4>
        <label css={style.headerLabel}>Please fill in this form.</label>
      </div>
    )}
    {step == 3 && (
      <div>
        <h4 css={style.header}>
          Family Information <span css={style.headerSpan}>( optional )</span>
        </h4>
        <label css={style.headerLabel}>Please fill in this form.</label>
      </div>
    )}
    {step == 4 && (
      <div>
        <h4 css={style.header}>Education & Experience</h4>
        <label css={style.headerLabel}>Please fill in this form.</label>
      </div>
    )}

    {/* {step == 1 && <img css={style.headerImg} src="../images/profileEdit.svg" />} */}
  </div>
)

const style = {
  personalFormHeader: css`
    margin-bottom: 50px;
    display: flex;
  `,
  header: css`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: var(--primary);
  `,
  headerSpan: css`
    color: #e53e3e;
    font-weight: 600;
    font-size: 14px;
  `,
  headerLabel: css`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--primary);
  `,
  headerImg: css`
    margin-left: auto;
    cursor: pointer;
  `,
}

export default PersonalFormHeader
