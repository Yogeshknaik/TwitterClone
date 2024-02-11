import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import profilePic from "../images/profilepic.jpeg";
import verifiedPic from "../images/verified.png";
import postedimage from "../images/speingreact.jpeg";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
function TweetCard() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteTweet = () => {
    console.log("tweet deleted");
    handleClose();
  };
  const handelOpenReplyModel = () => {
    console.log("open model");
  };
  const handelCreateRetweet = () => {
    console.log("create Retweet");
  };
  const handelLiketweet = () => {
    console.log("handel Like tweet");
  };
  return (
    <div className="">
      {/* <div className="flex items-center font-semibold text-gray-700">
        <RepeatIcon />
        <p>Retweet</p>
      </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src={profilePic}
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="flex cursor-pointer items-center space-x-2">
            <span className="font-semibold">Yogesh K N</span>
            <span className="text-gray-600">@yogeshknaik .2m</span>
            <img className="ml-2 w-5 h5" src={verifiedPic} alt="verified" />
          </div>
          <div>
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
              <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
              <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="mt-2">
          <div className="cursor-pointer">
            <p>full stack project using react and spring boot</p>
            <img
              className="w-[28rem] border border-gray-400 p-5 rounded-md "
              src={postedimage}
              alt="post"
            />
          </div>
          <div className="py-5 flex flex-wrap justify-between items-center">
            <div className="space-x-3 flex items-center text-gray-600">
              <ChatBubbleIcon
                className="cursor-pointer"
                onClick={handelOpenReplyModel}
              />
              <p>34</p>
            </div>
            <div
              className={`${
                true ? "text-pink-600" : "text-gray-600"
              }space-x-3 flex items-center`}
            >
              <RepeatIcon
                className="cursor-pointer"
                onClick={handelCreateRetweet}
              />
              <p>23</p>
            </div>
            <div
              className={`${
                true ? "text-pink-600" : "text-gray-600"
              }space-x-3 flex items-center`}
            >
              {true ? (
                <FavoriteIcon
                  className="cursor-pointer"
                  onClick={handelLiketweet}
                />
              ) : (
                <FavoriteBorderIcon
                  className="cursor-pointer"
                  onClick={handelLiketweet}
                />
              )}
              <p>23</p>
            </div>
            <div className="space-x-3 flex items-center text-gray-600">
              <BarChartIcon
                className="cursor-pointer"
                onClick={handelOpenReplyModel}
              />
              <p>340</p>
            </div>
            <div className="space-x-3 flex items-center text-gray-600">
              <FileUploadIcon
                className="cursor-pointer"
                onClick={handelOpenReplyModel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
