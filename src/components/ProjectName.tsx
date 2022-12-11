import { useState } from "react";

import { EditableText, H1 } from "@blueprintjs/core";

const ProjectName: React.FC = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <H1>
        <EditableText value={name} onChange={(v) => setName(v)} />
      </H1>
    </div>
  );
};
export default ProjectName;
