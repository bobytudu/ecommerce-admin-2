import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { SxProps } from "@mui/material";

interface CardProps {
  elevation?: number;
  children: React.ReactNode;
  title: string;
  sx?: SxProps;
  id?: string;
}

export default function Card(props: CardProps) {
  return (
    <Paper
    id={props.id}
      elevation={props.elevation || 0}
      sx={{
        border: 1,
        borderColor: "divider",
        ...props.sx,
      }}
    >
      <Typography variant="h6" sx={{ p: 2 }}>
        {props.title}
      </Typography>
      <Divider />
      <div style={{ padding: 24 }}>{props.children}</div>
    </Paper>
  );
}
