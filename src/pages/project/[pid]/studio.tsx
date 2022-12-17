import { Button } from "@blueprintjs/core";
import { useRouter } from "next/router";

import CreateNewObject from "#/components/CreateNewObject";
import PlayButton from "#/components/PlayButton";
import Player from "#/components/Player";
import ProjectName from "#/components/ProjectName";
import Toolbar from "#/components/Toolbar";

const Studio = () => {
  const router = useRouter();

  return (
    <div>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button icon="home" onClick={() => router.push("/")} />
            <ProjectName />
          </div>
          <Toolbar />
          <Player />
          <PlayButton />
          <CreateNewObject />
        </div>
      </main>
    </div>
  );
};
export default Studio;
