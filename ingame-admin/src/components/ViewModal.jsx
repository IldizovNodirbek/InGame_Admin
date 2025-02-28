import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const ViewModal = ({ open, onClose, selectedPurchase }) => {
  if (!selectedPurchase) {
    return null;
  } else {
    console.log("Tanlangan purchase:", selectedPurchase);
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          width: 400,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          {selectedPurchase.clientName}
        </Typography>
        <Typography variant="body1">
          <strong>Customer Name:</strong> {selectedPurchase.clientName}
        </Typography>
        <Typography variant="body1">
          <strong>Customer Phone Number:</strong> {selectedPurchase.phone}
        </Typography>
        <Typography variant="body1">
          <strong>Customer Address:</strong> {selectedPurchase.address}
        </Typography>
        <Typography variant="body1">
          <strong>Customer Comment:</strong> {selectedPurchase.comment}
        </Typography>
        <Typography variant="body1">
          <strong>Delivery Method:</strong> {selectedPurchase.deliveryMethod}
        </Typography>
        <Typography variant="body1">
          <strong>Delivery Price:</strong> {selectedPurchase.deliveryPrice} UZS
        </Typography>
        <Typography variant="body1">
          <strong>Product Name:</strong> {selectedPurchase.productName}
        </Typography>
        <Typography variant="body1">
          <strong>Products Count:</strong> {selectedPurchase.productCount}
        </Typography>
        <Typography variant="body1">
          <strong>Payment Bank:</strong> {selectedPurchase.paymentBank}
        </Typography>
        <Typography variant="body1">
          <strong>Credit Name:</strong> {selectedPurchase.creditName}
        </Typography>
        <Typography variant="body1">
          <strong>Credit Term:</strong> {selectedPurchase.creditTerm}
        </Typography>
        <Typography variant="body1">
          <strong>Per Month:</strong> {selectedPurchase.perMonth}
        </Typography>
        <Typography variant="body1">
          <strong>USD:</strong> {selectedPurchase.usd}
        </Typography>
        <Typography variant="body1">
          <strong>UZS:</strong> {selectedPurchase.uzs}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ViewModal;
