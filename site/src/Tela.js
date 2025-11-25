import React from "react";
import { Box } from "@mui/material";

export default function Tela() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "100vw", height: "20vh", backgroundColor: "#9e3b3bff", }}>
            </Box>
            <Box sx={{ width: "100vw", height: "80vh", backgroundColor: "#1c996fff", }}>
            </Box>
            <Box sx={{ width: "100vw", height: "20vh", backgroundColor: "#3e30bbff", }}>
            </Box>
        </Box>
            );
}
