import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Text as RebassText, Heading as RebassHeading } from 'rebass';

export const Heading = styled(RebassHeading)`
  ${props => props.uppercase && 'text-transform: uppercase;'}
  &::selection {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const Text = styled(RebassText)`
  ${props => props.uppercase && 'text-transform: uppercase;'}
  &::selection {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const Markdown = styled(ReactMarkdown)`
  p::selection,
  h1::selection,
  h2::selection,
  h3::selection,
  h4::selection,
  strong::selection,
  li::selection {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const AnimatedSpan = styled.span`
  @keyframes spark {
    0%,
    10%,
    30%,
    60%,
    100% {
      color: ${props => props.theme.colors.secondary};
    }
    20%,
    50%,
    90% {
      color: ${props => props.theme.colors.primary};
    }
  }
  @keyframes invertedSpark {
    0%,
    10%,
    30%,
    60%,
    100% {
      color: ${props => props.theme.colors.primary};
    }
    20%,
    50%,
    90% {
      color: ${props => props.theme.colors.secondary};
    }
  }
  animation: ${props => (props.invert ? 'invertedSpark' : 'spark')} 30s
    ${props => props.invert && '50ms'} infinite;
  &::selection {
    background: ${props => props.theme.colors.primaryText};
  }
`;
