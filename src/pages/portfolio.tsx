import React from "react";
import NavBar from "../organisms/NavBar/NavBar";
import { navItems } from "../consts";
import PortfolioContainer from "../organisms/PortfolioContainer/PortfolioContainer";
import Layout from "../organisms/Layout/Layout";

const Portfolio = () => (
  <Layout>
    <NavBar items={navItems} highlightedIndex={0} />
    <PortfolioContainer category="UI/UX" no="A">
      <div style={{ backgroundColor: "lightgray", height: "200px" }}></div>
      <div style={{ backgroundColor: "lightgray", height: "200px" }}></div>
      <div style={{ backgroundColor: "lightgray", height: "200px" }}></div>
      <div style={{ backgroundColor: "lightgray", height: "200px" }}></div>
    </PortfolioContainer>
    <PortfolioContainer category="WEB" no="B">
      <div style={{ backgroundColor: "lightgray", height: "200px" }}></div>
      <div style={{ backgroundColor: "lightgray", height: "200px" }}></div>
      <div style={{ backgroundColor: "lightgray", height: "200px" }}></div>
      <div style={{ backgroundColor: "lightgray", height: "200px" }}></div>
    </PortfolioContainer>
  </Layout>
);

export default Portfolio;
