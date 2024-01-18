import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";

export default function SelectSmall() {
  return (
    <>
      <div className="flex items-center border-t bg-[#E9E9EE] sticky bottom-0">
        <div className="basis-1/2 text-center text-[#E60023] border-r border-[#787878]/10 px-4 py-2">
          <img className="mx-auto h-12" src="img/Group 6.svg" />
        </div>
        <div className="basis-1/2 text-center text-[#E60023] px-4 py-2">
          <img className="mx-auto h-12" src="img/Group 7.svg" />
        </div>
      </div>
    </>
  );
}
