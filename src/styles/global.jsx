import React from 'react';

import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalStyle = () => (
  <Global
    styles={css`
      /*===================================================
                              Reset
      ===================================================*/
      ${emotionNormalize}
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
      }
      input,
      textarea,
      button {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        color: var(--primary-black);
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
      }
      html,
      body,
      #root {
        overflow: scroll;
        height: 100%;
        font-family: 'IBM Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--primary-black);
        background-color: var(--background);
        touch-action: manipulation;
        ::-webkit-scrollbar {
          display: none;
        }
      }
      #app {
        max-width: 1300px;
        height: 100%;
        min-height: 100%;
        margin: 0 auto;
      }
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: var(--primary-black);
      }

      /*===================================================
                              Font
      ===================================================*/
      @font-face {
        font-style: normal;
        font-weight: 300;
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Light.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Light.woff) format('woff');
        font-display: swap;
      }
      @font-face {
        font-style: normal;
        font-weight: 500;
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Medium.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Medium.woff) format('woff');
        font-display: swap;
      }
      @font-face {
        font-style: normal;
        font-weight: normal;
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Regular.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Regular.woff) format('woff');
        font-display: swap;
      }
      @font-face {
        font-style: normal;
        font-weight: bold;
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Bold.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Bold.woff) format('woff');
        font-display: swap;
      }
      @font-face {
        font-style: normal;
        font-weight: 300;
        font-family: 'Montserrat';
        src: url(./src/assets/fonts/Montserrat-Light.woff2) format('woff2'),
          url(./src/assets/fonts/Montserrat-Light.woff) format('woff');
        font-display: swap;
      }
      @font-face {
        font-style: normal;
        font-weight: normal;
        font-family: 'Montserrat';
        src: url(./src/assets/fonts/Montserrat-Regular.woff2) format('woff2'),
          url(./src/assets/fonts/Montserrat-Regular.woff) format('woff');
        font-display: swap;
      }

      /*===================================================
                             root
      ===================================================*/
      @media screen and (min-width: 1024px) {
        :root {
          font-size: 16px;
        }
      }
      @media screen and (max-width: 1023px) {
        :root {
          font-size: 0.9rem;
        }
      }
      @media screen and (max-width: 767px) {
        :root {
          font-size: 0.8rem;
        }
      }
      :root {
        --primary-black: #222;
        --primary-skyblue: #e0effe;
        --primary-blue: #008bf8;
        --primary-white: #f8f9fa;
        --primary-grey: #c9c9c9;
        --primary-lightgrey: #dedede;
        --background: #fbfdfc;
        --prism-code-1: #7c858d;
        --prism-code-2: #abb2bf;
        --prism-code-3: #e06c75;
        --prism-code-4: #d19a66;
        --prism-code-5: #98c379;
        --prism-code-6: #56b6c2;
        --prism-code-7: #c678dd;
        --prism-code-8: #61afef;
        --prism-code-9: #c678dd;
        --neumorphic: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem var(--primary-white);
        --card: 0.13rem 0.13rem 0.6rem 0 rgba(0, 0, 0, 0.4);
      }

      /*============================================
                     PTR(Pull To Refresh)
      ============================================*/
      .ptr-element {
        position: absolute;
        width: 100%;
        color: #aaa;
        text-align: center;
        height: 50px;
        transition: all;
      }
      .ptr-element .genericon {
        opacity: 0.6;
        font-size: 34px;
        width: auto;
        height: auto;
        transition: all 0.25s ease;
        transform: rotate(90deg);
        margin-top: 5px;
      }
      .ptr-refresh .ptr-element .genericon {
        transform: rotate(270deg);
      }
      .ptr-loading .ptr-element .genericon,
      .ptr-reset .ptr-element .genericon {
        display: none;
      }
      .loading {
        display: inline-block;
        text-align: center;
        opacity: 0.4;
        margin: 12px 0 0 5px;
        display: none;
      }
      .ptr-loading .loading {
        display: block;
      }
      .loading span {
        display: inline-block;
        vertical-align: middle;
        width: 10px;
        height: 10px;
        margin-right: 3px;
        transform: scale(0.3);
        border-radius: 50%;
        animation: ptr-loading 0.4s infinite alternate;
      }
      .loading-ptr-1 {
        animation-delay: 0 !important;
      }
      .loading-ptr-2 {
        animation-delay: 0.2s !important;
      }
      .loading-ptr-3 {
        animation-delay: 0.4s !important;
      }
      @keyframes ptr-loading {
        0% {
          transform: translateY(0) scale(0.3);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          background-color: #333;
          opacity: 1;
        }
      }
      .ptr-loading .refresh-view,
      .ptr-reset .refresh-view,
      .ptr-loading .ptr-element,
      .ptr-reset .ptr-element {
        transition: all 0.25s ease;
      }
      .ptr-reset .refresh-view {
        transform: translate3d(0, 0, 0);
      }
      .ptr-loading .refresh-view {
        transform: translate3d(0, 30px, 0);
      }
    `}
  />
);

export default GlobalStyle;
