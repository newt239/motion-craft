import {
  Button,
  ButtonGroup,
  Menu,
  MenuDivider,
  MenuItem,
} from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";

const Toolbar: React.FC = () => {
  return (
    <div>
      <ButtonGroup>
        <Popover2
          placement="bottom-start"
          content={
            <Menu>
              <MenuItem text="New" icon="document" />
              <MenuItem text="Open" icon="folder-shared" />
              <MenuItem text="Close" icon="add-to-folder" />
              <MenuDivider />
              <MenuItem text="Save" icon="floppy-disk" />
              <MenuItem text="Save as..." icon="floppy-disk" />
              <MenuDivider />
              <MenuItem text="Exit" icon="cross" />
            </Menu>
          }
        >
          <Button icon="cog" rightIcon="caret-down">
            設定
          </Button>
        </Popover2>
      </ButtonGroup>
    </div>
  );
};

export default Toolbar;
