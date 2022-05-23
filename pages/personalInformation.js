import { css } from '@emotion/react'
import React, { useState, useEffect, useContext } from 'react'
import PersonalSideMenu from '@/components/personal/personalSideMenu'
import PersonalHeader from '@/components/personal/personalHeader'
import PersonalFormLayout from '@/components/personal/personalFormLayout'

function BankInformation() {
  const [step, addStep] = useState(2)

  const increment = () => {
    addStep(step + 1)
  }

  const decrement = () => {
    addStep(step - 1)
  }

  const done = () => {
    console.log('Go to other page.')
  }

  return (
    <div>
      <PersonalHeader />
      <div css={style.personalSideMenu}>
        <PersonalSideMenu step={step} />
        <PersonalFormLayout
          step={step}
          increment={increment}
          decrement={decrement}
          done={done}
        />
      </div>
    </div>
  )
}
const style = {
  personalSideMenu: css`
    display: flex;
    flex-direction: row;
    padding: 50px;
    background: var(--light-gray);
    align-items: self-start;
  `,
}
export default BankInformation
