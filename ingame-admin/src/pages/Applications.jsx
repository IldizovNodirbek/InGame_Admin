import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePurchase } from "../store/PurchasesSlice";
import { updatePurchase } from "../store/PurchasesSlice";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ViewModal from "../components/ViewModal";

const Purchases = () => {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchases.purchasesList);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPurchase, setSelectedPurchase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = (event, purchase) => {
    setAnchorEl(event.currentTarget);
    setSelectedPurchase(purchase);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedPurchase(null);
  };

  const handleDelete = () => {
    if (selectedPurchase) {
      dispatch(deletePurchase(selectedPurchase.id));
    }
    handleMenuClose();
  };

  const handleEdit = () => {
    if (selectedPurchase) {
      dispatch(updatePurchase(selectedPurchase.id));
    }
    handleMenuClose();
  };

  const handleView = (purchase) => {
    console.log("View bosildi!", purchase);
    setSelectedPurchase(purchase); // 🟢 Avval mijozni tanlaymiz
    setIsModalOpen(true); // 🔵 Keyin modal ochamiz
  };

  useEffect(() => {
    console.log("IsModalOpen ozgardi!", isModalOpen);
  }, [isModalOpen]);

  return (
    <Box sx={{ p: 3 }}>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#333", color: "white" }}>
              <TableCell sx={{ color: "white" }}>Имя клиента</TableCell>
              <TableCell sx={{ color: "white" }}>Телефон клиента</TableCell>
              <TableCell sx={{ color: "white" }}>
                Количество продуктов
              </TableCell>
              <TableCell sx={{ color: "white" }}>Положение</TableCell>
              <TableCell sx={{ color: "white" }}>Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchases.map((purchase) => (
              <TableRow key={purchase.id}>
                <TableCell>{purchase.clientName}</TableCell>
                <TableCell>{purchase.phone}</TableCell>
                <TableCell>{purchase.productCount}</TableCell>
                <TableCell>{purchase.status}</TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleMenuClick(e, purchase)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={() => handleView(selectedPurchase)}>
                      View
                    </MenuItem>
                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* View Modal */}
      <ViewModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        purchase={selectedPurchase}
      />
    </Box>
  );
};

export default Purchases;
