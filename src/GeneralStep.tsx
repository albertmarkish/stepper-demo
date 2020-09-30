import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

export const GeneralStep: React.FC = () => {
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      alignItems="center"
    >
      <h2>VPG General Info</h2>
      <Box
        display="flex"
        flexDirection="column"
        width="25vw"
        flexGrow="1"
        justifyContent="center"
      >
        <TextField
          id="vpgName"
          label="VPG Name"
          variant="outlined"
          required
          margin="normal"
          value={"Hello World VPG"}
          onChange={onNameChange}
        />
        <TextField
          id="vpgDescription"
          label="VPG Description"
          variant="outlined"
          multiline
          rows="4"
          value={"some description here up to 140 symbols."}
          onChange={onDescriptionChange}
        />
      </Box>
    </Box>
  );
};
