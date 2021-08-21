import styled from '@emotion/styled';

export const MenubarWrapper = styled.div`
  background-color: #026aa7;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  max-height: 40px;
  overflow: hidden;
  padding: 4px 4px;
  & > div {
    display: flex;
    justify-content: space-between;
  }
  & > div > div {
    padding-right: 10px;
  }

  & > div > div > span > a {
    text-decoration: none;
    color: inherit;
  }
`;
