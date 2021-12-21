import React from "react";
import { useDispatch } from "react-redux";
import { setSnackbar } from "./redux/ducks/snackbar";
import { Button } from "@material-ui/core";

const Engineer = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>Apply to be an engineer!</div>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          dispatch(
            setSnackbar(
              true,
              "success",
              "Your engineer application has been successfully submitted!"
            )
          )
        }
      >
        Apply to be an engineer
      </Button>
    </>
  );
};

export default Engineer;
