import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  Button,
} from 'reactstrap';

const TooltipContainer = (props) => {
  const { tooltip } = props;

  return(
    <Fragment>
      <TooltipContainerWrapper>
        {tooltip.title}
        <TooltipText>
          {tooltip.title}
        </TooltipText>
      </TooltipContainerWrapper>
    </Fragment>
  )
}

export default TooltipContainer;

const TooltipContainerWrapper = styled(Button)`
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  position: relative;
  display: inline-block;

  &&:hover > span {
    visibility: visible;
  }
`;

const TooltipText = styled.span`
  visibility: hidden;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 3%;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  display: inline-block;

  ::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #000 transparent transparent transparent;
  }
`;
