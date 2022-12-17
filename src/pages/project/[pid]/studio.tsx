import Header from "#/components/blocks/studio/Header";
import CreateNewObject from "#/components/blocks/studio/ObjectConfig/CreateNewObject";
import Preview from "#/components/blocks/studio/Preview";

const Studio = () => {
  return (
    <div>
      <main>
        <Header />
        <Preview />
        <CreateNewObject />
      </main>
    </div>
  );
};
export default Studio;
