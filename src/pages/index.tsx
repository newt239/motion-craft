import Head from "next/head";

import CreateNewProject from "#/components/CreateNewProject";
import SavedProjectList from "#/components/SavedProjectList";
const Home = () => {
  return (
    <div>
      <Head>
        <title>MotionCraft</title>
        <meta name="description" content="オンライン動画生成アプリ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <main style={{ maxWidth: 800, flexGrow: 1 }}>
          <CreateNewProject />
          <SavedProjectList />
        </main>
      </div>
    </div>
  );
};
export default Home;
