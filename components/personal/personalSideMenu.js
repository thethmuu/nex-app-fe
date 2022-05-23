import { css } from '@emotion/react'

const PersonalSideMenu = ({ step }) => {
  return (
    <>
      <div css={style.sideMenuBox}>
        <ul css={style.sideMenuBoxUl}>
          <li css={style.sideMenuBoxLi}>
            <div css={style.sideMenuBoxDiv}>
              <label css={style.sideMenuBoxLabel}>Personal</label>
              <img
                css={step < 1 && style.sideMenuIcon}
                alt="Personal Information"
                src={
                  '/images/' +
                  (step == 1 ? 'personalWhite' : 'personalBlue') +
                  '.svg'
                }
              />
            </div>
          </li>
          <li css={style.sideMenuBoxLi}>
            <div css={style.sideMenuBoxDiv}>
              <label css={style.sideMenuBoxLabel}>Bank</label>
              <img
                css={step < 2 ? style.sideMenuIconGray : style.sideMenuIcon}
                alt="Bank Information"
                src={
                  '/images/' +
                  (step < 2
                    ? 'bankGray'
                    : step == 2
                    ? 'bankWhite'
                    : 'bankBlue') +
                  '.svg'
                }
              />
            </div>
          </li>
          <li css={style.sideMenuBoxLi}>
            <div css={style.sideMenuBoxDiv}>
              <label css={style.sideMenuBoxLabel}>Family</label>
              <img
                css={step < 3 ? style.sideMenuIconGray : style.sideMenuIcon}
                alt="Family Information"
                src={
                  '/images/' +
                  (step < 3
                    ? 'familyGray'
                    : step == 3
                    ? 'familyWhite'
                    : 'familyBlue') +
                  '.svg'
                }
              />
            </div>
          </li>
          <li css={style.sideMenuBoxLi}>
            <div css={style.sideMenuBoxDiv}>
              <label css={style.sideMenuBoxLabel}>
                Education &<br /> Experience
              </label>
              <img
                css={step >= 4 ? style.sideMenuIcon : style.sideMenuIconGray}
                alt="Education & Experience"
                src={
                  '/images/' +
                  (step >= 4 ? 'educationWhite' : 'educationGray') +
                  '.svg'
                }
              />
            </div>
          </li>
        </ul>
      </div>
      <div css={style.personalRoadMap}>
        <div css={style.roadMapPointContainer}>
          <div css={step == 1 ? style.activePoint : style.roadMapPoint}>
            <img
              css={style.roadMapPointImg}
              src={
                '/images/' +
                (step == 1 ? 'personalActive' : 'personalMark') +
                '.jpg'
              }
            />
          </div>
          <div css={step == 2 ? style.activePoint : style.roadMapPoint}>
            <img
              css={style.roadMapPointImg}
              src={
                '/images/' +
                (step < 2
                  ? 'personalGray'
                  : step == 2
                  ? 'personalActive'
                  : 'personalMark') +
                '.jpg'
              }
            />
          </div>
          <div css={step == 3 ? style.activePoint : style.roadMapPoint}>
            <img
              css={style.roadMapPointImg}
              src={
                '/images/' +
                (step < 3
                  ? 'personalGray'
                  : step == 3
                  ? 'personalActive'
                  : 'personalMark') +
                '.jpg'
              }
            />
          </div>
          <div css={step == 4 ? style.activePoint : style.roadMapPoint}>
            <img
              css={style.roadMapPointImg}
              src={
                '/images/' +
                (step < 4 ? 'personalGray' : 'personalActive') +
                '.jpg'
              }
            />
          </div>
        </div>
        <div css={style.line}></div>
      </div>
    </>
  )
}

const style = {
  sideMenuBox: css`
    width: 11.5%;
    padding-top: 65px;
  `,
  sideMenuBoxUl: css`
    text-align: right;
    list-style: none;
  `,
  sideMenuBoxLi: css`
    margin-bottom: 113px;
  `,
  sideMenuBoxDiv: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 50px;
  `,
  sideMenuBoxLabel: css`
    margin-right: 15.22px;
    font-size: 16px;
    line-height: 22px;
    color: #718096;
  `,
  sideMenuIcon: css`
    min-width: 50px;
  `,
  sideMenuIconGray: css`
    width: 25px;
    margin: 0 12.5px;
  `,

  personalRoadMap: css`
    width: 80px;
    margin-left: 12px;
    width: 20px;
    margin-right: 48px;
    display: flex;
    padding-top: 125px;
    padding: 74px 0 14px;
    position: relative;
  `,
  roadMapPointContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 490px;
    position: absolute;
  `,
  activePoint: css`
    margin-bottom: 140px;
    &::before {
      content: '';
      border-style: solid;
      border-width: 40px 50px 40px0;
      border-color: transparent #fff transparent transparent;
      position: absolute;
      right: -70px;
      margin-top: -30px;
    }
  `,
  roadMapPoint: css`
    margin-bottom: 131px;
  `,
  roadMapPointImg: css`
    border-radius: 50px;
    width: 20px;
  `,
  line: css`
    width: 4px;
    background-color: var(--medium-gray);
    margin: 0 auto;
    height: 500px;
    margin-top: 15px;
  `,
}
export default PersonalSideMenu
