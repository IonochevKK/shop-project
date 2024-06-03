
import "./pageNews.scss";
import Layout from "../../components/Layout/Layout";
import BlockPosts from "../../components/BlockPosts/BlockPosts";
const PageNews = () => {
  return (
    <div className="pageNews">
      <Layout>
        <BlockPosts isbreadCrumbs lenghtCards={15} isButton />
      </Layout>
    </div>
  );
};

export default PageNews;
