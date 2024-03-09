import { Box } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

interface PageProps {
  id?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <Box id={props.id}>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      {props.children}
    </Box>
  );
}
