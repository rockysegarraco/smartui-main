import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";

export default function SelectSmall() {
  return (
    <>
      <FormControl fullWidth size="small">
        <Select
          className="bg-white"
          labelId="demo-select-small-label"
          id="demo-select-small"
          value="1"
        >
          <MenuItem value={1}>8 oz</MenuItem>
          <MenuItem value={2}>12 oz</MenuItem>
          <MenuItem value={3}>16 oz</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
