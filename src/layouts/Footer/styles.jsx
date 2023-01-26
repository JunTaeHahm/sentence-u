import styled from '@emotion/styled';

export const Container = styled.footer`
  font-size: 0.8rem;
  position: fixed;
  background-color: var(--background);
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  border-top: 0.06rem solid black;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  gap: 2rem;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.8rem;
    a {
      font-family: var(--IMB-Li);
      display: flex;
      align-items: center;
      background-color: var(--black);
      color: var(--white);
      border-radius: 2rem;
      padding: 0.3rem 1rem;
      gap: 0.8rem;
      transition: all 0.2s;
      &:hover {
        background-color: var(--gray);
        color: var(--black);
      }
    }
  }
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;
