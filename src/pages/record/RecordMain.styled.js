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
    color: ${({ theme }) => theme.text};

    @media (min-width: 415px) {
      border-radius: 0.938rem;
      margin: 1.875rem auto;
    }

    .headContainer {
      padding: 1rem;
      background: linear-gradient(to right, #3958fe 80%, #3089f6);
      text-align: center;
      h1 {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 700;
      }
    }

    .bodyContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 65%;
      margin-bottom: 1.25rem;

      svg {
        margin-bottom: 10px;
        color: #3089f6;
      }
    }

    .formContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.875rem;
      margin-bottom: 1.25rem;
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
        font-size: 1rem;
        outline: none;
        cursor: pointer;

        option {
          padding: 3px;
          color: ${({ theme }) => theme.text};
        }
      }
    }
    .countContainer {
      height: 1.875rem;
      margin-bottom: 1.375rem;
      text-align: center;
    }

    .btnContaier {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .btn {
        width: 70%;
        height: 2.5rem;
        padding: 3px;
        border: none;
        border-radius: 5px;
        background: linear-gradient(to left top, #3958fe 30%, #3089f6);
        color: #fff;
        font-size: 1rem;
        cursor: pointer;

        &:active {
          background: #2541d9;
        }
      }

      .listenBtn {
        margin-top: 5px;

        a {
          color: #fff;
          font-size: 1rem;
        }
      }

      .goToAudio {
        margin-top: 1.25rem;
        color: ${({ theme }) => theme.mainBlue};
        font-size: 1.5rem;
      }
    }
  }
`;
