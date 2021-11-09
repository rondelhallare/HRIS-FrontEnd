import React from "react";
import { Button } from '@mui/material';

export default function ButtonClick() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color={flag ? "primary.main" : "red"}
    >
      button
    </Button>
  );
}
