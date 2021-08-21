import styled from '@emotion/styled';

export const LogInWrapper = styled.div`
  position: absolute;
  display: flex;
  background: blue;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  justify-content: center;
  flex-direction: column;
  padding: 30px 20px;
  background-color: #172b4d;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & h2 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
  & > div > div {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #adadad;
    margin: 30px;
    padding: 10px 10 px;
  }

  & input {
    border: none;
    width: 100%;
    outline: none;
    color: #636e72;
    height: 25px;
    font-size: 16px;
    background: none;
  }
  & button {
    width: 80%;
    margin: 0 auto;
    height: 40px;
    background: linear-gradient(125deg, #81ecec, #6c5ce7, #81ecec);
    background-position: left;
    background-size: 200%;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.4s;
    display: inline;
  }
  & button:hover {
    background-position: right;
  }
  & > ul {
    margin-top: 20px;
    margin-bottom: none;
    display: flex;
    justify-content: space-around;
  }
`;
