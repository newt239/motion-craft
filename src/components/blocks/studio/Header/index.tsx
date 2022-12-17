import { Button } from "@blueprintjs/core";
import { useRouter } from "next/router";

import ProjectName from "#/components/blocks/studio/Header/ProjectName";

const Header = () => {
  const router = useRouter();

  return (
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
    </div>
  );
};
export default Header;
