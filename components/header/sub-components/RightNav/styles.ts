import styled from 'styled-components';

export const LogoUl = styled.img`
  margin: 20px 50px 20px 5%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    max-width: 160px;
    max-height: 70px;
    object-fit: contain;
  }
`;
