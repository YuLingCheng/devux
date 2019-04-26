import styled from 'styled-components';

import { ButtonLink } from '../../components/Styleguide';

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  padding: 0 40px 40px;

  & > :not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const CTA = styled(ButtonLink)`
  margin-top: 0.5rem;
`;
