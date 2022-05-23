import { css, Global } from '@emotion/react'

export default function NavStyle({ children }) {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Open+Sans:wght@300;400;500;600&display=swap');

          :root {
            /* colors */
            --primary: #082932;
            --links: #5e72e4;
            --background: #f8f9fa;
            --dark-gray: #718096;
            --medium-gray: #a0aec0;
            --light-gray: #e2e8f0;
            --lighter-gray: #f2f5fc;
            --red: #e53e3e;
            --light-red: #fed7d7;
            --cyan: #00abd1;
            --blue: #2d6db7;
            --light-blue: #e0eeff;
            --green: #48bb78;
            --light-green: #c6f6d5;
            --aqua: #497c8a;
            --inside-color: #718096;

            /* gradients */
            --primary-gradient: linear-gradient(
              77.15deg,
              #244d79 13.06%,
              #4192a2 52.51%,
              #9bccd0 88.36%
            );
            --blue-gradient: linear-gradient(
              193.91deg,
              #5aa2f8 42.8%,
              rgba(38, 82, 194, 0) 125.14%
            );
            --green-gradient: linear-gradient(
              193.91deg,
              #1de9b8 38.21%,
              rgba(42, 134, 112, 0) 125.14%
            );
            --buttons: linear-gradient(
              53.56deg,
              #13547a -0.45%,
              #00abd1 125.69%
            );

            /* shadow */
            --shadow: 0px 10px 60px rgba(0, 0, 0, 0.08);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),
              0 4px 6px -4px rgb(0 0 0 / 0.1);

            /* media breakpoints */
            --device-sm: 576px;
            --device-md: 768px;
            --device-lg: 992px;
            --device-xl: 1200px;
            --device-xxl: 1400px;
          }

          html {
            height: 100%;
          }

          body {
            font-family: 'Open Sans', sans-serif;
            line-height: 2;
            background: #ffffff;
            color: var(--primary);
            overflow: auto;
          }

          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          .form-control {
            margin: 20px 20px;
          }
          /*Personal info*/
          code {
            color: red;
            margin-left: 5px;
            font-size: 12px;
          }

          input[type='file'] {
            // display: none;
            z-index: 2;
            opacity: 0;
          }

          /*personal info end*/
          .form-control label {
            // display: block;
            font-size: 14px;
            color: #172b4d;
          }

          .form-control,
          :focus {
            outline-color: #00abd1;
          }

          .form-invalid {
            outline-color: red;
          }

          .error-message {
            position: relative;
            font-style: normal;
            list-style: none;
          }

          .button {
            padding: 10px 48px;
            border-radius: 5px;
            box-shadow: var(--shadow);
            font-weight: 600;
            font-size: 14px;
          }
          .button:hover {
            box-shadow: var(--shadow-lg);
          }
          .b-primary {
            color: #ffffff;
            background: var(--buttons);
            border: 1px solid var(--buttons);
          }
          .b-secondary {
            background: #fff;
            border: 1px solid var(--primary);
          }
        `}
      />
      {children}
    </>
  )
}
