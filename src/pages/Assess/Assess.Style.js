import styled from 'styled-components';

import { ButtonLink } from '../../components/Styleguide';

export const AssessContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  align-items: center;
  padding: 40px;

  & > .ant-card { max-width: 900px; }

  & > :not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const LevelsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const LevelContainer = styled.div`
  margin-bottom: 30px;
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;

  & .ant-card {
    flex: 1;
  }
`;

export const CTA = styled(ButtonLink)`
  margin-top: 0.5rem;
`;
