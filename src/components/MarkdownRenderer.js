import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';

const StyledLink = styled.a`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  color: black;
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.colors.primaryLight};
    transition: all 250ms;
  }

  &:hover {
    color: white;

    &::after {
      height: 110%;
      width: 110%;
    }
  }
`;

const MarkdownParagraph = styled.p`
  line-height: 2em;

  > img {
    height: 2em;
    margin-right: 1em;
  }

  &:first-child {
    margin-top: 0em;
  }
`;

const List = styled.ul`
  margin: 0;
`;
const MarkdownList = ({ ordered, ...otherProps }) =>
  ordered ? <List as="ol" {...otherProps} /> : <List {...otherProps} />;
MarkdownList.propTypes = { ordered: PropTypes.bool };

const MarkdownListItem = styled.li`
  margin: 0.25em 0;
  line-height: 2em;
`;

const MarkdownLink = ({ href, children }) => {
  const isInnerLink = href.indexOf('#') > 0;
  return isInnerLink ? (
    <LinkAnimated to={href} selected>
      {children}
    </LinkAnimated>
  ) : (
    <LinkAnimated
      as="a"
      selected
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </LinkAnimated>
  );
};

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default {
  paragraph: props => <MarkdownParagraph {...props} />,
  list: props => <MarkdownList {...props} />,
  listItem: props => <MarkdownListItem {...props} />,
  link: MarkdownLink,
};
