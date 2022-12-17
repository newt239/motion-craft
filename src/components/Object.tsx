type ObjectProps = {
  objectId: string;
};

const Object: React.FC<ObjectProps> = ({ objectId }) => {
  return <div id={objectId}>Hello!</div>;
};

export default Object;
