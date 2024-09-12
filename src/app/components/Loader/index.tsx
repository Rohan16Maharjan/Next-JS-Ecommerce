import { Box, CircularProgress } from "@chakra-ui/react";
import React from "react";

interface Props {
  width?: string;
  height?: string;
}

export default function Loader({ width = "100%", height = "75vh" }: Props) {
  return (
    <Box width={width} height={height}>
      <CircularProgress isIndeterminate color="green.300" />
    </Box>
  );
}
