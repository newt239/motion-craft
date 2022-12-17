import { ObjectDBProps } from "#/db";

type ObjectProps = {
  object: ObjectDBProps;
};

const Object: React.FC<ObjectProps> = ({ object }) => {
  return (
    <div
      id={`object-${object.objectId}`}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        ...object.from,
      }}
    >
      {object.content}
    </div>
  );
};

export default Object;
