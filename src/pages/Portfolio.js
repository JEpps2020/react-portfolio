import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import portfolio from "../portfolio.json";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Row from "../components/Row"


class Portfolio extends Component {
  state = {
    portfolio
  };

  componentDidMount() {
    this.setState({ portfolio });
  }

  render() {
    return (
      <Wrapper>
      <Title children="My GW Bootcamp Porfolio" />
      <Row>
      {this.state.portfolio.map(item => (
        <PortfolioCard
          id={item.id}
          key={item.id}
          name={item.name}
          image={item.image}
          assignment={item.assignment}
          url={item.url}
        />
      ))}
      </Row>
    </Wrapper>
    );
  }
}

export default Portfolio;
