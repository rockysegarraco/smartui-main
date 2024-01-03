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
        <InputLabel id="demo-select-small-label">Sort by</InputLabel>
        <Select
          className="bg-white"
          labelId="demo-select-small-label"
          id="demo-select-small"
          value="1"
          label="Choose"
        >
          <MenuItem value={1}>Fastest Delivery</MenuItem>
          <MenuItem value={2}>Fastest Delivery</MenuItem>
          <MenuItem value={3}>Fastest Delivery</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
