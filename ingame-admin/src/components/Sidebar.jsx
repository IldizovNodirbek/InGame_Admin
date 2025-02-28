import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // TO‘G‘RI IMPORT
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppsIcon from "@mui/icons-material/Apps";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import StarIcon from "@mui/icons-material/Star";
import ComputerIcon from "@mui/icons-material/Computer";
import FolderIcon from "@mui/icons-material/Folder";

const Sidebar = () => {
  const navigate = useNavigate(); // Yangi sahifaga o'tish uchun
  const [selected, setSelected] = useState(null);
  const [openManagement, setOpenManagement] = useState(false);

  const menuItems = [
    { text: "главный", icon: <DashboardIcon />, path: "/home" },
    { text: "заказы", icon: <ShoppingCartIcon />, path: "/orders" },
    { text: "приложение", icon: <AppsIcon />, path: "/apps" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 250 },
        cursor: "pointer",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}
      >
        InGame.uz
      </Typography>

      <List>
        <Typography
          variant="subtitle2"
          sx={{ pl: 2, color: "gray", fontSize: "18px", fontWeight: "bold" }}
        >
          Обзор
        </Typography>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)} // Sahifaga o'tkazish
            sx={{
              backgroundColor: selected === item.text ? "#4caf50" : "inherit",
              color: selected === item.text ? "white" : "inherit",
              "&:hover": { backgroundColor: "#81c784", color: "white" },
            }}
          >
            <ListItemIcon
              sx={{ color: selected === item.text ? "white" : "inherit" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}

        <Typography variant="subtitle2" sx={{ pl: 2, color: "gray", mt: 2 }}>
          Management
        </Typography>
        <ListItem button onClick={() => setOpenManagement(!openManagement)}>
          <ListItemText primary="Management" sx={{ fontWeight: "bold" }} />
          {openManagement ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openManagement} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              { text: "User", icon: <PeopleIcon />, path: "/users" },
              { text: "Продукт", icon: <CategoryIcon />, path: "/products" },
              {
                text: "Продукт Тип",
                icon: <CategoryIcon />,
                path: "/product-type",
              },
              {
                text: "Персональный Комплект",
                icon: <StarIcon />,
                path: "/personal-kit",
              },
              {
                text: "Desktop Game && FPS",
                icon: <ComputerIcon />,
                path: "/desktop-games",
              },
              {
                text: "Desktop Type",
                icon: <ComputerIcon />,
                path: "/desktop-type",
              },
              { text: "Каталог", icon: <FolderIcon />, path: "/catalog" },
            ].map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  pl: 4,
                  borderLeft: "3px solid green",
                  backgroundColor:
                    selected === item.text ? "#4caf50" : "inherit",
                  color: selected === item.text ? "white" : "inherit",
                  "&:hover": { backgroundColor: "#81c784", color: "white" },
                }}
              >
                <ListItemIcon
                  sx={{ color: selected === item.text ? "white" : "inherit" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
