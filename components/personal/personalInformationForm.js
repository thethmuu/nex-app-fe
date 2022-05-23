import { css } from '@emotion/react'
import React, { useRef, useState, useEffect, useContext } from 'react'
import showDefaultNoti from '@/utils/notification'
import { useForm } from 'react-hook-form'
// import { API_URL } from '@/config/index'
function PersonalInformationForm({ increment }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [profileImg, setProfileImg] = useState(null)
  const [previewImg, setPreviewImg] = useState({})
  const [file, setFile] = useState()

  const handleImageChange = async (e) => {
    const selectedImg = e.target.files[0]
    setProfileImg(selectedImg)
    const imgPreview = URL.createObjectURL(selectedImg)

    setPreviewImg(imgPreview)

    const formData = new FormData()
    formData.append('files', e.target.files[0])

    const res = await fetch('http://localhost:1337/api/upload', {
      method: 'POST',
      body: formData,
    })
    console.log('formData', formData)
    const data = await res.json()
    console.log('data', data)
    setFile(data)
  }
  console.log('setfile', file)

  const onSubmit = async (data) => {
    const info = { ...data, image: file }
    console.log('info', info)
    const res = await fetch(
      'http://localhost:1337/api/personal-informations?populate=*',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //body: formData,
        body: JSON.stringify({ data: info }),
      }
    )
    // console.log('formData', formData)
    console.log('response', res)
    if (!res.ok) {
      showDefaultNoti('Something went wrong.', 'error')
    } else {
      increment()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div css={style.profileEdit}>
        {profileImg ? (
          <img
            src={previewImg}
            alt={profileImg.name}
            width={75}
            height={80}
            css={style.profileImg}
          />
        ) : (
          <div>
            <img
              src="images/profileDefault.svg"
              width={75}
              height={80}
              css={style.profileImg}
            />
            <label htmlFor="input" css={style.labelEdit}>
              Edit
            </label>
          </div>
        )}

        <input
          type="file"
          name="image"
          css={style.fileEdit}
          accept="image/*"
          //{...register('profile')}
          onChange={handleImageChange}
        />
      </div>
      <div css={style.personalForm}>
        <div css={style.formFlexDiv}>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              First Name<span css={style.requiredSpan}>*</span>
            </label>
            <input
              css={style.textInput}
              type="text"
              name="firstName"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && (
              <span className="invalid-feedback d-block">
                This field is required
              </span>
            )}
          </div>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Last Name<span css={style.requiredSpan}>*</span>
            </label>
            <input
              css={style.textInput}
              type="text"
              name="lastName"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && (
              <span className="invalid-feedback d-block">
                This field is required
              </span>
            )}
          </div>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Phone<span css={style.requiredSpan}>*</span>
            </label>
            <input
              css={style.textInput}
              type="text"
              name="phone"
              {...register('phone', { required: true })}
            />
            {errors.phone && (
              <span className="invalid-feedback d-block">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div css={style.formFlexDiv}>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Birthday<span css={style.requiredSpan}>*</span>
            </label>
            <input
              css={style.textInput}
              type="date"
              name="birthday"
              {...register('birthday', { required: true })}
            />
          </div>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Nationality<span css={style.requiredSpan}>*</span>
            </label>
            <input
              css={style.textInput}
              type="text"
              name="nationality"
              {...register('nationality', { required: true })}
            />
          </div>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Religion<span css={style.requiredSpan}>( optional )</span>
            </label>
            <input
              css={style.textInput}
              type="text"
              name="religion"
              {...register('religion')}
            />
          </div>
        </div>
        <div css={style.formFlexDiv}>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              NRIC No.<span css={style.requiredSpan}>*</span>
            </label>
            <input
              css={style.textInput}
              type="text"
              name="nricNo"
              {...register('nricNo', { required: true })}
            />
          </div>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Marital Status<span css={style.requiredSpan}>( optional )</span>
            </label>
            <select
              css={style.selectBox}
              className="form-select"
              {...register('maritalStatus')}
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Gender<span css={style.requiredSpan}>*</span>
            </label>
            <div css={style.radioFlexBox}>
              <div css={style.radioControl}>
                <input
                  css={style.radioInput}
                  type="radio"
                  name="gender"
                  value="Male"
                  {...register('gender', { required: true })}
                />
                <label css={style.radioLabel}>Male</label>
              </div>
              <div css={style.radioControl}>
                <input
                  css={style.radioInput}
                  type="radio"
                  name="gender"
                  value="Female"
                  {...register('gender', { required: true })}
                />
                <label css={style.radioLabel}>Female</label>
              </div>
            </div>
          </div>
        </div>
        <hr css={style.horizontalLine} />
        <div css={style.formFlexDiv}>
          <div css={style.divfullWidth}>
            <label css={style.formLabel}>
              Address<span css={style.requiredSpan}>*</span>
            </label>
            <textarea
              css={style.textarea}
              type="text"
              name="address"
              {...register('address', { required: true })}
            ></textarea>
          </div>
        </div>
        <div css={style.formFlexDiv}>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              State<span css={style.requiredSpan}>*</span>
            </label>
            <input
              css={style.textInput}
              type="text"
              name="state"
              {...register('state', { required: true })}
            />
          </div>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Country<span css={style.requiredSpan}>*</span>
            </label>
            <select
              css={style.selectBox}
              className="form-select"
              {...register('country', { required: true })}
            >
              <option value="Myanmar">Myanmar</option>
              <option value="Singapore">Singapore</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Postal Code<span css={style.requiredSpan}>( optional )</span>
            </label>
            <input
              css={style.textInput}
              type="text"
              name="postalCode"
              {...register('postalCode')}
            />
          </div>
        </div>
        <hr css={style.horizontalLine} />
        <div css={style.formFlexDiv}>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Department<span css={style.requiredSpan}>( optional )</span>
            </label>
            <select
              css={style.selectBox}
              className="form-select"
              {...register('department')}
            >
              <option value="Department 1">Department 1</option>
              <option value="Department 2">Department 2</option>
              <option value="Department 3">Department 3</option>
            </select>
          </div>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Designation<span css={style.requiredSpan}>*</span>
            </label>
            <select
              css={style.selectBox}
              className="form-select"
              {...register('designation', { required: true })}
            >
              <option value="Designation 1">Designation 1</option>
              <option value="Designation 2">Designation 2</option>
              <option value="Designation 3">Designation 3</option>
            </select>
          </div>
          <div css={style.formFlexChildDiv}>
            <label css={style.formLabel}>
              Reports to<span css={style.requiredSpan}>( optional )</span>
            </label>
            <select
              css={style.selectBox}
              className="form-select"
              {...register('reportsTo')}
            >
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="hr">HR</option>
            </select>
          </div>
        </div>
        <hr css={style.horizontalLine} />
      </div>
      <div css={style.buttonContainer}>
        <button css={style.primaryBtn} type="submit">
          Next
        </button>
      </div>
    </form>
  )
}

const style = {
  personalForm: css`
    margin-bottom: 50px;
  `,
  buttonContainer: css`
    text-align: center;
    margin-bottom: 40px;
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
    width: 300px;
    height: 58px;
    padding: 12px 20px;
    border: 1px;

    @media (max-width: 1400px) {
      width: 250px;
    }

    @media (max-width: 1200px) {
      width: 210px;
    }

    @media (max-width: 992px) {
      width: 100%;
    }
  `,
  radioInput: css`
    margin-right: 10px;
  `,
  divfullWidth: css`
    width: 100%;
  `,
  textarea: css`
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    height: 58px;
    padding: 12px 20px;
    border: 1px;
    width: 100%;
    min-height: 100px;
  `,
  selectBox: css`
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 300px;
    height: 58px;
    padding: 12px 20px;
    border: 1px;

    @media (max-width: 1400px) {
      width: 250px;
    }

    @media (max-width: 1200px) {
      width: 210px;
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
    width: 300px;

    @media (max-width: 1400px) {
      width: 250px;
    }

    @media (max-width: 1200px) {
      width: 210px;
    }

    @media (max-width: 992px) {
      width: 100%;
      margin-bottom: 20px;
    }
  `,
  horizontalLine: css`
    margin-bottom: 50px;
    border: 1px solid var(--light-gray);
  `,
  radioControl: css`
    padding-top: 17px;
    display: flex;
    margin-right: 64px;
    align-items: center;
  `,
  radioLabel: css`
    margin: 0;
  `,
  radioFlexBox: css`
    display: flex;
  `,
  profileEdit: css`
    position: absolute;
    top: 160px;
    right: 100px;
  `,
  personalFormContainer: css`
    position: relative;
  `,
  profileImg: css`
    border-radius: 50px;
    position: relative;
  `,
  labelEdit: css`
    position: absolute;
    top: 25px;
    left: 25px;
  `,
  fileEdit: css`
    position: absolute;
    top: 25px;
    left: 30px;
  `,
}

export default PersonalInformationForm
