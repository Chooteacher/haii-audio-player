import styled from 'styled-components';

export const AudioPlayerContainer = styled.div`
  @font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  margin-top: 3.125rem;

  .audioTitle {
    margin-bottom: 0.938rem;
    text-align: center;

    span {
      font-family: 'SUIT-Medium' !important;
      font-weight: 600;
      font-size: 1.875rem;
      color: #6b6bfe;
      cursor: pointer;
    }
  }

  .audioTextBox {
    width: 414px;
    height: 70vh;
    padding-top: 1.857rem;
    padding-bottom: 4.375rem;
    background-image: linear-gradient(-225deg, #3089f6 0%, #6e6eff 51%, #3958fe 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    border: 0.063rem solid #f5f7fa;
    border-radius: 0.5rem;

    .audioText {
      font-size: 3.6rem;
      font-family: 'SUIT-Medium' !important;
      color: #f5f7fa;
    }

    .audioContentBox {
      width: 90%;
      padding: 4.2rem 0rem;
      padding-top: 0.6rem;
      margin-top: 1.6rem;
      border: 0.063rem solid #ebedee;
      border-radius: 0.438rem;
      background: #c9ccd3;
      background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);

      .albumImgBox {
        display: flex;
        align-items: center;

        iframe {
          width: 45%;
          margin-top: 0.625rem;
          margin-right: 1rem;
          margin-left: 1.3rem;
          border-radius: 0.938rem;
          pointer-events: none;
          background-color: #d7d6ff;
        }
      }
    }
  }
`;
