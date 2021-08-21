import styled from '@emotion/styled';

export const MyPageModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 304px;
  will-change: top, left;
  top: auto;
  margin-top: 10px;
  right: 4px;
  & > div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    width: 100%;
    padding-bottom: 10px;
  }
`;
