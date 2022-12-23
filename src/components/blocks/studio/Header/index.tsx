import ProjectName from "#/components/blocks/studio/Header/ProjectName";
import Toolbar from "#/components/blocks/studio/Header/Toolbar";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProjectName />
      <Toolbar />
    </div>
  );
};

export default Header;
