import React from "react";
import navigationMenu from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profilepic from "../images/profilepic.jpeg";
export const Navigation = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("Logout");
    handleClose();
  };
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 32 32"
          >
            <path d="M 4.0175781 4 L 13.091797 17.609375 L 4.3359375 28 L 6.9511719 28 L 14.246094 19.34375 L 20.017578 28 L 20.552734 28 L 28.015625 28 L 18.712891 14.042969 L 27.175781 4 L 24.560547 4 L 17.558594 12.310547 L 12.017578 4 L 4.0175781 4 z M 7.7558594 6 L 10.947266 6 L 24.279297 26 L 21.087891 26 L 7.7558594 6 z"></path>
          </svg>
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="curser-pointer flex space-x-3 items-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar alt="username" src={profilepic}></Avatar>
          <div>
            <span>Yogesh K Naik</span>
            <span className="opacity-60">@yogeshknaik</span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};
