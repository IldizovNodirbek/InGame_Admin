import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MessageIcon from "@mui/icons-material/Message";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const Header = () => {
  // Redux store'dan qiymatlarni olish
  const totalRequests = useSelector((state) => state.header.totalRequests);
  const answeredRequests = useSelector(
    (state) => state.header.answeredRequests
  );
  const rejectedRequests = useSelector(
    (state) => state.header.rejectedRequests
  );
  const websiteVisits = useSelector((state) => state.header.websiteVisits);

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", gap: 8, mb: 3, }}>
        <Card
          sx={{
            width: 350,
            height: 250,
            bgcolor: "green",
            color: "white",
            borderRadius: 2,
          }}
        >
          <CardContent sx={{textAlign: "center", mt: "15%"}}>
            <WorkIcon sx={{ fontSize: 50 }} />
            <Typography variant="h4">{totalRequests}</Typography>
            <Typography>Umumiy arizalar</Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 350,
            height: 250,
            bgcolor: "#2196F3",
            color: "white",
            borderRadius: 2,
          }}
        >
          <CardContent sx={{textAlign: "center", mt: "15%"}}>
            <ShoppingCartIcon sx={{ fontSize: 50 }} />
            <Typography variant="h4">{answeredRequests}</Typography>
            <Typography>Javob berilganlar</Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 350,
            height: 250,
            bgcolor: "#FF9800",
            color: "white",
            borderRadius: 2,
          }}
        >
          <CardContent sx={{textAlign: "center", mt: "15%"}}>
            <MessageIcon sx={{ fontSize: 50 }} />
            <Typography variant="h4">{rejectedRequests}</Typography>
            <Typography>Rad etilganlar</Typography>
          </CardContent>
        </Card>
      </Box>

      <Typography variant="h6" sx={{ mb: 1, fontFamily: "sans-serif" }}>
        Website Visits
      </Typography>
      <Typography variant="body2" color="textSecondary">
        (+10% than last year)
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={websiteVisits}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="visits"
            stroke="#FF9800"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Header;
