import Head from "next/head";

import { Container } from "@mantine/core";

import CreateNewProject from "#/components/blocks/home/CreateNewProject";
import SavedProjectList from "#/components/blocks/home/SavedProjectList";

const Home = () => {
  return (
    <div>
      <Head>
        <title>MotionCraft</title>
        <meta name="description" content="オンライン動画生成アプリ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Container>
          <CreateNewProject />
          <SavedProjectList />
        </Container>
      </div>
    </div>
  );
};
export default Home;
