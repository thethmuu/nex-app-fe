import { css } from '@emotion/react';
import React, { useRef, useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";

import PersonalAddMore from './personalAddMore';

function EducationAndExperienceForm ({increment, decrement}) {
    const [bankName, setBankName] = useState("");
    const [educationCount, setEducationCount] = useState(1);
    const [experienceCount, setExperienceCount] = useState(1);
    const addEducation = () => {
        setEducationCount(educationCount+1);
    }
    const addExperience = () => {
      setExperienceCount(experienceCount+1);
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        increment();
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
      <div css={style.educationandexperienceForm}>
        <legend>Education</legend> 
        <div css={style.educationContainer}>
          <div css={style.labelFields}>
            <label>
              Institution <code>*</code>
            </label>
            <input
              type="text"
              name="institution"
              css={style.input}
              style={{ outline: errors.institution? '1px solid rgba(229, 62, 62, 1)' : '' }} 
              {...register("institution", { required: true })}
            />
            {errors.institution && <span className="invalid-feedback d-block">This field is required</span>}
          </div>
          <div css={style.labelFields}>
            <label>
              Subject<code>*</code>
            </label>
            <input
              type="text"
              name="subject"
              css={style.input}
              style={{ outline: errors.subject? '1px solid rgba(229, 62, 62, 1)' : '' }} 
              {...register("subject", { required: true })}
            />
            {errors.subject && <span className="invalid-feedback d-block">This field is required</span>}
          </div>
          <div css={style.labelFields}>
            <label>
              Started Date<code>*</code>
            </label>
            <input type="date" css={style.input} name="starteddate" style={{ outline: errors.starteddate? '1px solid rgba(229, 62, 62, 1)' : '' }} {...register("starteddate", { required: true })} />
            {errors.starteddate && <span className="invalid-feedback d-block">This field is required</span>}
          </div>
          <div css={style.labelFields}>
            <label>
              Completed Date<code>*</code>
            </label>
            <input type="date" css={style.input} name="completeddate" style={{ outline: errors.completeddate? '1px solid rgba(229, 62, 62, 1)' : '' }} {...register("completeddate", { required: true })} />
            {errors.completeddate && <span className="invalid-feedback d-block">This field is required</span>}
          </div>
          <div css={style.labelFields}>
            <label>
              Degree<code>(optional)</code>
            </label>
            <input type="text" css={style.input} name="degree" />
          </div>
          <div css={style.labelFields}>
            <label>
              Year<code>(optional)</code>
            </label>
            <select css={style.input} className="form-select">
              <option value=""></option>
              <option value="First Year">First Year</option>
              <option value="Second Year">Second Year</option>
              <option value="Third Year">Third Year</option>
              <option value="Fourth Year">Fourth Year</option>
              <option value="Final Year">Final Year</option>
            </select>
          </div>
          <div css={style.addmore}>
            <hr/>
            <PersonalAddMore addEducation={addEducation}/>
          </div>
        </div>
        <legend>Experience<code>(optional)</code></legend>
        <div css={style.experienceContainer}>
          <div css={style.labelFields}>
            <label>
              Company Name <code>*</code>
            </label>
            <input
              type="text"
              name="companyname"
              css={style.input}
              style={{ outline: errors.companyname? '1px solid rgba(229, 62, 62, 1)' : '' }} 
              {...register("companyname", { required: true })}
            />
            {errors.companyname && <span className="invalid-feedback d-block">This field is required</span>}
          </div>
          <div css={style.labelFields}>
            <label>
              Location<code>*</code>
            </label>
            <input
              type="text"
              name="location"
              css={style.input}
              style={{ outline: errors.location? '1px solid rgba(229, 62, 62, 1)' : '' }} 
              {...register("location", { required: true })}
            />
            {errors.location && <span className="invalid-feedback d-block">This field is required</span>}
          </div>
          <div css={style.labelFields}>
            <label>
              Period from<code>*</code>
            </label>
            <input type="date" css={style.input} name="periodfrom" style={{ outline: errors.periodfrom? '1px solid rgba(229, 62, 62, 1)' : '' }} {...register("periodfrom", { required: true })} />
            {errors.periodfrom && <span className="invalid-feedback d-block">This field is required</span>}
          </div>
          <div css={style.labelFields}>
            <label>
              Period to<code>*</code>
            </label>
            <input type="date" css={style.input} name="periodto" style={{ outline: errors.periodto? '1px solid rgba(229, 62, 62, 1)' : '' }} {...register("periodto", { required: true })} />
            {errors.periodto && <span className="invalid-feedback d-block">This field is required</span>}
          </div>
          <div css={style.labelFields}>
            <label>
              Job Position<code>(optional)</code>
            </label>
            <input type="text" css={style.input} name="jobposition" />
          </div>
          <div></div>
          <div css={style.addmore}>
            <hr/>
            <PersonalAddMore addExperience={addExperience}/>
          </div>
        </div>
        <div css={style.buttonContainer}>
            <button css={style.secondaryBtn} type="button" onClick={decrement}>Back</button>
            <button css={style.primaryBtn}  type="submit">Done</button>
        </div>
      </div>
    </form>
}
const style= {
  educationandexperienceForm: css`
      margin-bottom: 99px;
      top: 0px;
  `,
  educationContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    border: 1px solid #A0AEC0;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 30px 40px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    background: #fff;
    position: relative;
    width: 900px;
    height: 510px;
    font-family: 'Open Sans';
    font-size: 14px;
    @media screen and (max-width: 768px) {
      width: 500px;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      margin-right: 20px;
    }
  `,
  experienceContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    border: 1px solid #A0AEC0;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 30px 40px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    position: relative;
    width: 900px;
    height: 510px;
    flex-direction: column;
    font-family: 'Open Sans';
    font-size: 14px;
    margin-top: 30px;
    margin-bottom: 20px;
    left: 0px;
    @media screen and (max-width: 768px) {
      width: 500px;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      margin-right: 20px;
    }
  `,
  addmore: css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  `,
  input: css`
    width: 350px;
    height: 50px;
    font-family: 'Open Sans';
    font-size: 14px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border: none;
    margin-top: 10px;
    padding: 3px 4px;
    @media screen and (max-width: 768px) {
      width: 100px;
    }
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
      background: linear-gradient(53.56deg, #13547A -0.45%, #00ABD1 125.69%);
      box-shadow: 0 10px 60px rgba(0, 0, 0, 0.08);
      border-radius: 5px;
      color: #fff;
  `,
}
export default EducationAndExperienceForm;









