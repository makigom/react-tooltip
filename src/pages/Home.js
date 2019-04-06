import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Col,
  Row,
} from 'reactstrap';

import TooltipContainer from '../components/TooltipContainer';

class Home extends Component {
  state = {
    tooltips: [
      { placement: 'top', title: 'Tooltip on top' },
      { placement: 'right', title: 'Tooltip on right' },
      { placement: 'bottom', title: 'Tooltip on bottom' },
      { placement: 'left', title: 'Tooltip on left' },
      { placement: 'top', title: <><em>Tooltip</em> <u>with</u> <b>HTML</b></> },
    ],
  }

  renderTooltips = () => {
    const { tooltips } = this.state;
    const tooltipContainers = tooltips.map(tooltip => (
      <Col md={{ size: 'auto' }} sm="4" xs="12" key={tooltip.placement}>
        <TooltipContainer tooltip={tooltip} />
      </Col>
    ));

    return tooltipContainers;
  }

  render(){
    return(
      <>
        <Title>Tooltip Excercise by Macarena Gómez</Title>
        <StyledRow>
          {this.renderTooltips()}
        </StyledRow>
      </>
    );
  }
}

export default Home;

const StyledRow = styled(Row)`
  padding: 10% 2%;
  margin: auto;
  justify-content: center;
`;

const Title = styled.h1`
  padding: 2%;
  font-size: 2em;
  font-weight: 100;
  color: #fff;
  background-color: #563d7c;
`;