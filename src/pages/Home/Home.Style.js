import styled from 'styled-components';

import { ButtonLink } from '../../components/Styleguide';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
  padding: 0 40px 40px;

  & > :not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const CTA = styled(ButtonLink)`
  margin-top: 0.5rem;
`;
