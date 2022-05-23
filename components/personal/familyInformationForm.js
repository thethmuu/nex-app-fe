import { css } from '@emotion/react'
import React, { useRef, useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import PersonalAddMore from './personalAddMore'
//import FamilyService from './api/family'
import showDefaultNoti from '@/utils/notification'
import { CREATE_FAMILY_INFORMATION } from 'graphql/mutations/familyInformation'
import { useMutation, gql } from '@apollo/client'

function FamilyInformationForm({ increment, decrement }) {
  const [familyMemberCount, setFamilyMemberCount] = useState(1)
  const [flag, setFlag] = useState(true)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [createFamilyInformation, { loading: loading }] = useMutation(
    CREATE_FAMILY_INFORMATION,
    {
      onError: (error) => {
        setFlag(false)
        // showDefaultNoti('Your family information saving failed.', 'error')
      },
      onCompleted: (data) => {
        if (data) {
        }
      },
    }
  )

  const onSubmit = (data) => {
    try {
      let result = []

      contentArray.filter((value) => {
        result.push(data.family[value])
      })

      result.map((value, index) => {
        if (!loading) {
          createFamilyInformation({
            variables: {
              name: value.name,
              relationship: value.relationship,
              dateOfBirth: value.dateOfBirth,
              phone: value.phone,
              publishedAt: new Date().toISOString(),
            },
          })

          if (index == result.length - 1) {
            if (flag) {
              showDefaultNoti(
                'Your family information successfully saved.',
                'success'
              )
            }
            increment()
          }
        }
      })
    } catch (error) {
      showDefaultNoti('Your informations are not save.', 'error')
    }
  }

  const [contentArray, setContentArray] = useState([0])

  const addFamilyMember = () => {
    setContentArray([...contentArray, familyMemberCount])
    setFamilyMemberCount(familyMemberCount + 1)
  }

  const removeFamilyMember = (e) => {
    let index = e.target.getAttribute('data')
    contentArray.splice(index, 1)

    setContentArray([...contentArray])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div css={style.familyForm}>
        {contentArray.map((value, index) => {
          return (
            <div key={index} css={style.formFlexContainer}>
              {index > 0 && (
                <img
                  src="../images/bin.svg"
                  css={style.binImage}
                  onClick={removeFamilyMember}
                  data={index}
                />
              )}
              <div css={style.formFlexDiv}>
                <div css={style.formFlexChildDiv}>
                  <label css={style.formLabel}>Name</label>
                  <input
                    css={style.textInput}
                    type="text"
                    {...register('family[' + value + '][name]')}
                  />
                </div>
                <div css={style.formFlexChildDiv}>
                  <label css={style.formLabel}>Relationship</label>
                  <input
                    css={style.textInput}
                    type="text"
                    {...register('family[' + value + '][relationship]')}
                  />
                </div>
              </div>
              <div css={style.formFlexDiv}>
                <div css={style.formFlexChildDiv}>
                  <label css={style.formLabel}>Date of Birth</label>
                  <input
                    css={style.textInput}
                    type="date"
                    {...register('family[' + value + '][dateOfBirth]')}
                  />
                </div>
                <div css={style.formFlexChildDiv}>
                  <label css={style.formLabel}>Phone</label>
                  <input
                    css={style.textInput}
                    type="text"
                    {...register('family[' + value + '][phone]')}
                  />
                </div>
              </div>
              <hr />
            </div>
          )
        })}

        <PersonalAddMore addRow={addFamilyMember} />
      </div>
      <div css={style.buttonContainer}>
        <button css={style.secondaryBtn} type="button" onClick={decrement}>
          Back
        </button>
        <button css={style.primaryBtn} type="submit">
          Next
        </button>
      </div>
    </form>
  )
}

const style = {
  familyForm: css`
    margin-bottom: 99px;
  `,
  buttonContainer: css`
    text-align: center;
    margin-bottom: 40px;
  `,
  secondaryBtn: css`
    width: 120px;
    height: 40px;
    padding: 7px 20px;
    border: 1px solid var(--primary);
    filter: drop-shadow(0 10px 60px rgba(0, 0, 0, 0.08));
    border-radius: 5px;
    margin-right: 30px;
  `,
  primaryBtn: css`
    width: 120px;
    height: 40px;
    padding: 7px 20px;
    border: 0;
    background: linear-gradient(53.56deg, #13547a -0.45%, #00abd1 125.69%);
    box-shadow: 0 10px 60px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    color: #fff;
  `,
  formLabel: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--primary);
    display: block;
    margin-bottom: 5px;
  `,
  textInput: css`
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 460px;
    height: 58px;
    padding: 12px 20px;
    border: 1px;

    @media (max-width: 1400px) {
      width: 400px;
    }

    @media (max-width: 1200px) {
      width: 300px;
    }

    @media (max-width: 992px) {
      width: 100%;
    }
  `,
  selectBox: css`
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 460px;
    height: 58px;
    padding: 12px 20px;
    border: 1px;

    @media (max-width: 1400px) {
      width: 400px;
    }

    @media (max-width: 1200px) {
      width: 300px;
    }

    @media (max-width: 992px) {
      width: 100%;
    }
  `,
  requiredSpan: css`
    color: var(--red);
    margin-left: 8px;
  `,
  formFlexContainer: css`
    display: flex;
    flex-direction: column;
  `,
  formFlexDiv: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    @media (max-width: 992px) {
      flex-direction: column;
      margin-bottom: 0;
    }
  `,
  formFlexChildDiv: css`
    @media (max-width: 992px) {
      margin-bottom: 20px;
    }
  `,
  binImage: css`
    width: 30px;
    margin-left: auto;
  `,
}
export default FamilyInformationForm
