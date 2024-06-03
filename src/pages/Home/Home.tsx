import React from "react";
import Layout from "../../components/Layout/Layout";
import "./home.scss";
import Spa from "../../components/Spa/Spa";
import FilterProgram from "../../components/FilterProgram/FilterProgram";
import PopularProgram from "../../components/PopularProgram/PopularProgram";
import SliderBlock from "../../components/SliderBlock/SliderBlock";
import BlockPosts from "../../components/BlockPosts/BlockPosts";
import DocumentsBlock from "../../components/DocumentsBlock/DocumentsBlock";
import BlockContact from "../../components/BlockContact/BlockContact";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Layout>
        <Spa />
        <FilterProgram link />
        <PopularProgram title cardsLength={6} sliceCards={3} />
        <SliderBlock />
        <BlockPosts lenghtCards={3} />
        <DocumentsBlock />
        <BlockContact title />
      </Layout>
    </div>
  );
};

export default Home;
