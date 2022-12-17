import Object from "#/components/Object";

const Player: React.FC = () => {
  return (
    <div style={{ width: 600, height: 400, backgroundColor: "black" }}>
      {["a"].map((objectId) => (
        <Object key={objectId} objectId={objectId} />
      ))}
    </div>
  );
};
export default Player;
