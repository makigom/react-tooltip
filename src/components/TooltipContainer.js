import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  Button,
} from 'reactstrap';


const TooltipContainer = (props) => {
  const { title } = props.tooltip;

  const calculatePosition = () => {
    const { placement } = props.tooltip;

    switch(placement){
      case 'top':
       return 'bottom: 100%; left: 0;';
      case 'right':
        return 'top: 0; left: 100%;';
      case 'bottom':
        return 'top: 100%; right: 0;';
      case 'left':
        return 'right: 100%; bottom: 0;';
      default:
       return '';
    }
  }

  return(
    <Fragment>
      <TooltipContainerWrapper>
        {title}
        <TooltipText placement={calculatePosition()}>
          {title}
        </TooltipText>
      </TooltipContainerWrapper>
    </Fragment>
  )
}

export default TooltipContainer;


const TooltipContainerWrapper = styled(Button)`
  font-weight: 400;
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
  padding: 3%;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  display: inline-block;
  margin: 4%;
  ${({ placement }) => placement}

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
