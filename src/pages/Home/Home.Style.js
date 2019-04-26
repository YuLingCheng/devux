import styled from 'styled-components';

import { ButtonLink } from '../../components/Styleguide';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: center;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const CTA = styled(ButtonLink)`
  margin-top: 0.5rem;
`;
