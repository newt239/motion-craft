import { Button } from "@blueprintjs/core";
import { useRouter } from "next/router";

import ProjectName from "#/components/ProjectName";

const Studio = () => {
  const router = useRouter();
  return (
    <div>
      <main>
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
      </main>
    </div>
  );
};
export default Studio;
