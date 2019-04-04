import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Container,
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
      { placement: 'top', title: 'Tooltip with HTML' },
    ],
  }

  renderTooltips = () => {
    const { tooltips } = this.state;
    const tooltipContainers = tooltips.map(tooltip => (
      <Col lg="2" md="2" sm="4" xs="12" key={tooltip.placement}>
        <TooltipContainer tooltip={tooltip} />
      </Col>
    ));

    return tooltipContainers;
  }

  render(){
    return(
      <Container>
        <StyledRow>
          {this.renderTooltips()}
        </StyledRow>
      </Container>
    );
  }
}

export default Home;

const StyledRow = styled(Row)`
  padding: 20% 2%;
`;