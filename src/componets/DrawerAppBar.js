
import React from "react";
import Navigation from "../componets/Navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/MenuRounded";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;

// DRAWER APPBAR COMPONENT
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // DRAWER VARIABLE
  const drawer = (
    <Box
    
      onClick={handleDrawerToggle}
      // COME BACK: DRAWER STYLING BELOW
      sx={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        MENU
      </Typography>
      <Divider sx={{ backgroundColor: 'white' }} />
      <List sx={{ textAlign: "center"}}>
        <ListItem>
          <ListItemButton>
            <Navigation
              pages={pages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // BAR AND OTHER STUFF
  return (
    <Box posistion="fixed">
      <AppBar component="Navigation" elevation={0} sx={{ backgroundColor: "black" }}>
        {" "}
        <Toolbar sx={{ backgroundColor: "black" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              flexGrow: -1,
              backgroundColor: "black",
              color: "white",
              marginLeft: 'auto',
              display: { md: "none" },
            }}
          >
            <MenuIcon sx={{ fontSize: 50, margin: '10px 10px 5px 10px' }} />
          </IconButton>

          <Typography
            component="div"
            sx={{
              flex: 1,
              display: {
                xs: "none",
                md: "block",
                fontSize: "70px",
                fontWeight: "bold"
              },
            }}
          >
            MCW
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button>
              <Navigation
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="Drawer">
        {" "}
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;