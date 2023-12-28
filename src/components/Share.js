import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";

export default function SelectSmall() {
  return (
    <>
      <div className="flex text-center items-center bg-white p-4 border-t">
        <div className="basis-1/2">Share & Save</div>
        <div className="basis-1/2">Share & Save</div>
      </div>
    </>
  );
}
