import Head from "next/head";

import CreateNewProject from "@/components/CreateNewProject";

const Home = () => {
  return (
    <div>
      <Head>
        <title>MotionCraft</title>
        <meta name="description" content="オンライン動画生成アプリ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CreateNewProject />
      </main>
    </div>
  );
};
export default Home;
