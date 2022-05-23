import { css } from '@emotion/react'
import React, { useRef, useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
//import BankService from './api/bank'
import showDefaultNoti from '@/utils/notification'
import { GET_BANK_INFORMATIONS } from 'graphql/queries/bankInformation'
import { CREATE_BANK_INFORMATION } from 'graphql/mutations/bankInformation'

import { useMutation, gql } from '@apollo/client'

function BankInformationForm({ increment, decrement }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  // let bankService = new BankService();
  // bankService.getAll(GET_BANK_INFORMATIONS, (response) => {
  //     console.log(response);
  // });

  // get mutation query
  const [createBankInformation, { loading: loading }] = useMutation(
    CREATE_BANK_INFORMATION,
    {
      onError: (error) => {
        showDefaultNoti('Your bank information saving failed.', 'error')
        console.log(error)
      },
      onCompleted: (data) => {
        if (data) {
          showDefaultNoti(
            'Your bank information successfully saved.',
            'success'
          )
          increment()
        }
      },
    }
  )

  const onSubmit = (data) => {
    // update mutation query with input value
    if (!loading) {
      createBankInformation({
        variables: {
          bankName: data.bankName,
          bankAccountName: data.bankAccountName,
          bankAccountNumber: data.bankAccountNumber,
          dateOfBirth: data.dateOfBirth,
          publishedAt: new Date().toISOString(),
        },
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div css={style.formFlexDiv}>
        <div css={style.formFlexChildDiv}>
          <label css={style.formLabel}>
            Bank Name<span css={style.requiredSpan}>*</span>
          </label>
          <select
            css={style.selectBox}
            className="form-select"
            {...register('bankName', { required: true })}
          >
            <option value=""></option>
            <option value="KBZ Bank">KBZ Bank</option>
            <option value="AYA Bank">AYA Bank</option>
            <option value="CB Bank">CB Bank</option>
          </select>
          {errors.bankName && (
            <span className="invalid-feedback d-block">
              This field is required
            </span>
          )}
        </div>
        <div css={style.formFlexChildDiv}>
          <label css={style.formLabel}>
            Bank Account Name<span css={style.requiredSpan}>*</span>
          </label>
          <input
            css={style.textInput}
            type="text"
            {...register('bankAccountName', { required: true })}
          />
          {errors.bankAccountName && (
            <span className="invalid-feedback d-block">
              This field is required
            </span>
          )}
        </div>
      </div>
      <div css={style.formFlexDiv}>
        <div css={style.formFlexChildDiv}>
          <label css={style.formLabel}>
            Bank Account Number<span css={style.requiredSpan}>*</span>
          </label>
          <input
            css={style.textInput}
            type="text"
            {...register('bankAccountNumber', { required: true })}
          />
          {errors.bankAccountNumber && (
            <span className="invalid-feedback d-block">
              This field is required
            </span>
          )}
        </div>
        <div css={style.formFlexChildDiv}>
          <label css={style.formLabel}>
            Date of Birth<span css={style.requiredSpan}>*</span>
          </label>
          <input
            css={style.textInput}
            type="date"
            {...register('dateOfBirth', { required: true })}
          />
          {errors.DateOfBirth && (
            <span className="invalid-feedback d-block">
              This field is required
            </span>
          )}
        </div>
      </div>

      <div css={style.buttonContainer}>
        <button
          className="button b-secondary me-4"
          onClick={decrement}
        >
          Back
        </button>
        <button className="button b-primary" type="submit">
          Next
        </button>
      </div>
    </form>
  )
}
export default BankInformationForm
const style = {
  buttonContainer: css`
    text-align: center;
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
}
