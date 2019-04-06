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
        return {
          bottom: '105%',
          left: '0',
          arrow: {
            top: '100%',
            left: '50%',
            borderColor: '#000 transparent transparent transparent',
            marginLeft: '-5px',
          }
        }
      case 'right':
        return {
          left: '105%',
          top: '0',
          arrow: {
            top: '50%',
            right: '100%',
            borderColor: 'transparent #000 transparent transparent',
            marginTop: '-5px',
          }
        }
      case 'bottom':
        return {
          top: '105%',
          right: '0',
          arrow: {
            bottom: '100%',
            left: '50%',
            borderColor: 'transparent transparent #000 transparent',
            marginLeft: '-5px',
          }
        }
      case 'left':
        return {
          right: '105%',
          bottom: '0',
          arrow: {
            left: '100%',
            top: '50%',
            borderColor: 'transparent transparent transparent #000',
            marginTop: '-5px',
          }
        }
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
  width: 100%;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  text-align: center;
  margin: 3% 0;
  padding: 2%;
  bottom: ${({ placement }) => placement.bottom || 'unset'};
  left: ${({ placement }) => placement.left || 'unset'};
  top: ${({ placement }) => placement.top || 'unset'};
  right: ${({ placement }) => placement.right || 'unset'};

  ::after {
    bottom: ${({ placement }) => placement.arrow.bottom || 'unset'};
    left: ${({ placement }) => placement.arrow.left || 'unset'};
    top: ${({ placement }) => placement.arrow.top || 'unset'};
    right: ${({ placement }) => placement.arrow.right || 'unset'};
    border-color: ${({ placement }) => placement.arrow.borderColor || 'unset'};
    margin-top: ${({ placement }) => placement.arrow.marginTop || 'unset'};
    margin-left: ${({ placement }) => placement.arrow.marginLeft || 'unset'};
    content: " ";
    position: absolute;
    border-width: 5px;
    border-style: solid;
  }
`;
