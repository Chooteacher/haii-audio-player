import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #eee;

  .mainContainer {
    width: inherit;
    max-width: 414px;
    background-color: #fff;
    border-radius: 0;
    overflow: hidden;
    color: #555;

    @media (min-width: 415px) {
      border-radius: 15px;
      margin: 30px auto;
    }

    .headContainer {
      padding: 1rem;
      background: linear-gradient(to right, #3958fe 80%, #3089f6);
      text-align: center;
      h1 {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
      }
    }

    .bodyContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 65%;
      margin-bottom: 20px;

      svg {
        margin-bottom: 10px;
        color: #3089f6;
      }
    }

    .formContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      margin-bottom: 20px;
      padding: 1rem;
      text-align: center;
      .title {
        margin-right: 5px;
      }

      select {
        width: 30%;
        height: inherit;
        margin-right: 10px;
        border: 1px solid #bbb;
        border-radius: 5px;
        color: #555;
        font-size: 16px;
        outline: none;
        cursor: pointer;

        option {
          padding: 3px;
        }
      }
    }
    .countContainer {
      height: 30px;
      margin-bottom: 22px;
      text-align: center;
    }

    .btnContaier {
      display: flex;
      justify-content: center;
      .startBtn {
        width: 70%;
        height: 2.5rem;
        margin: 0 auto;
        padding: 3px;
        border: none;
        border-radius: 5px;
        background: linear-gradient(to left top, #3958fe 30%, #3089f6);
        color: #fff;
        font-size: 16px;
        cursor: pointer;

        &:active {
          background: #2541d9;
        }
      }
    }
  }
`;
