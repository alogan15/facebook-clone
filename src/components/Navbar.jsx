import { Mail, Notifications, Pets} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const SearchsIcon = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const NavIcons = styled(Box)(({ theme }) => ({
  display: "none",
  backgroundColor: "white",
  borderRadius: "30px",
  alignItems: "center",
  gap: "50px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
      <Icons>
      <SearchsIcon>
      <Avatar
            sx={{ width: 45, height: 45 }}
            img src={require('/Users/andrelogan/dev/facebook-clone/facebookclone/src/images/codediff.png')}
            onClick={(e) => setOpen(true)}
          />
        <SearchIcon 
          sx={{ width: 35, height: 35 }}
        />
        </SearchsIcon>
        </Icons>
        
        {/* <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          FaceBook 2.0
        </Typography> */}
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        {/* <Search>
          <InputBase placeholder="search..." />
        </Search> */}
        <NavIcons>
        {/* <Avatar
            sx={{ width: 30, height: 30 }}
            img src={require('/workspace/facebook-clone/facebook-clone/src/images/home.png')}
            onClick={(e) => setOpen(true)}
          />
          <Avatar
            sx={{ width: 30, height: 30 }}
            img src={require('/workspace/facebook-clone/facebook-clone/src/images/watch.png')}
            onClick={(e) => setOpen(true)}
          />
          <Avatar
            sx={{ width: 30, height: 30 }}
            img src={require('/workspace/facebook-clone/facebook-clone/src/images/market.png')}
            onClick={(e) => setOpen(true)}
          />
          <Avatar
            sx={{ width: 30, height: 30 }}
            img src={require('/workspace/facebook-clone/facebook-clone/src/images/gaming.png')}
            onClick={(e) => setOpen(true)}
          /> 
          <Avatar
            sx={{ width: 30, height: 30 }}
            img src={require('/workspace/facebook-clone/facebook-clone/src/images/more.jpg')}
            onClick={(e) => setOpen(true)}
          /> */}

          <Avatar
            sx={{ width: 625, height: 50 }}
            img src={require('/Users/andrelogan/dev/facebook-clone/facebookclone/src/images/fbicons.jpg')}
            onClick={(e) => setOpen(true)}
          />
        </NavIcons>
        <Icons>
          <Badge badgeContent={108} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={86} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            img src={require('/Users/andrelogan/dev/facebook-clone/facebookclone/src/images/studyDre.jpg')}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">Dre</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;