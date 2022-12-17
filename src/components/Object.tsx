type ObjectProps = {
  objectId: string;
};

const Object: React.FC<ObjectProps> = ({ objectId }) => {
  return (
    <div
      id={objectId}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      Hello!
    </div>
  );
};

export default Object;
