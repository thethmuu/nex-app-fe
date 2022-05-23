import { css } from '@emotion/react'
import BankInformationForm from './bankInformationForm'
import PersonalInformationForm from './personalInformationForm'
import FamilyInformationForm from './familyInformationForm'
import EducationAndExperienceForm from './educationandexperienceForm'

import PersonalFormHeader from './personalFormHeader'

const PersonalFormLayout = ({ step, increment, decrement, done }) => (
  <div css={styles.personalForm}>
    <PersonalFormHeader step={step} />
    {step == 1 && <PersonalInformationForm increment={increment} />}
    {step == 2 && (
      <BankInformationForm increment={increment} decrement={decrement} />
    )}
    {step == 3 && (
      <FamilyInformationForm increment={increment} decrement={decrement} />
    )}
    {step == 4 && (
      <EducationAndExperienceForm increment={increment} decrement={decrement} />
    )}
  </div>
)
export default PersonalFormLayout
const styles = {
  personalForm: css`
    width: 82.5%;
    background-color: #fff;
    box-shadow: 0 10px 60px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    padding: 50px;
  `,
}
