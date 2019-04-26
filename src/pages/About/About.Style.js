import styled from 'styled-components';

import { ButtonLink } from '../../components/Styleguide';

export const Profile = styled.img`
  border-radius: 50%;
  border: 4px solid white;
  width: 100px;
`;

export const CTA = styled(ButtonLink)`
  margin-top: 0.5rem;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
Contact.Pictures = styled.div``;
Contact.Text = styled.div`
  padding: 30px;
`;
