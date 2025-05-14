import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import { deleteNote } from "../../api/notes";
import { toast } from "sonner";
import { IconButton } from "@mui/material";

export function MenuBtn({ id, isPrintable }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  async function handleDelete() {
    toast.success("Your note has been deleted!");
    await deleteNote(id);
    navigate("/notes");
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="print:hidden">
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="small"
      >
        <MoreVertIcon className="text-gray-800 dark:text-gray-100" />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} to={`/notes/update/${id}`}>
          Edit Note
        </MenuItem>
        <MenuItem onClick={handleDelete}>Delete Note</MenuItem>
        <MenuItem
          onClick={() => window.print()}
          style={{ display: isPrintable ? "block" : "none" }}
        >
          Print Note
        </MenuItem>
      </Menu>
    </div>
  );
}
