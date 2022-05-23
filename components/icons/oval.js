import { useEffect, useState } from "react"
import {css, jsx} from '@emotion/react'

function GetWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Oval() {
  const [width, setWidth] = useState();
  const [height, setheight] = useState();

  useEffect(() => {
    const { width, height } = GetWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = GetWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <div css={styles.box}>
        <svg height={height} width={width} fill="none" viewBox="0 0 697 686"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.05107 462.737C-14.3809 372.338 118.737 332.848 164.486 253.166C210.481 173.054 177.658 38.0202 264.298 5.97318C350.144 -25.7803 421.627 78.8139 497.521 129.981C564.663 175.248 644.686 207.271 674.526 282.548C707.338 365.321 703.773 461.712 659.687 539.07C615.399 616.782 534.52 671.603 445.899 683.718C365.276 694.739 300.045 634.457 227.201 598.189C145.694 557.609 18.3345 552.32 2.05107 462.737Z"
            fill="url(#paint0_linear_1725_4542)"
            fillRule="evenodd"
            opacity="0.45"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1725_4542"
              gradientUnits="userSpaceOnUse"
              x1="391.001"
              x2="547.442"
              y1="709"
              y2="345.303"
            >
              <stop stopColor="#244D79" />
              <stop offset="0.498578" stopColor="#4192A2" />
              <stop offset="1" stopColor="#7DBAC2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return null;
}

const styles = {
  box: css`
    position: fixed;
    z-index: 100px;
    right: -520px;
    margin: 40px 250px 50px;

    @media (max-width: 767px) {
        right: -220px;
        margin: 10px 250px 110px;
    }
  `,
}

export default Oval;
