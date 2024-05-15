import "./programms.scss";
import Layout from "../../components/Layout/Layout";
import PopularProgram from "../../components/PopularProgram/PopularProgram";
import FilterProgram from "../../components/FilterProgram/FilterProgram";
import BlockContact from "../../components/BlockContact/BlockContact";
const Programms = () => {
  return (
    <div className="programms">
      <Layout>
        <FilterProgram  isbreadCrumbs/>
        <PopularProgram pagination cardsLength={15} />
        <PopularProgram
          cardsLength={3}
          title
          backgorund={{ background: "white" }}
          disableFilter
        />
        <BlockContact
          bakcground={{ background: "#e7f3ff", margin: "0px 0px 60px 0px" }}
          imgLogo
        />
      </Layout>
    </div>
  );
};

export default Programms;
