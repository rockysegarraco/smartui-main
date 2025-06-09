import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
      <div class="border-t-transparent border-solid animate-spin rounded-full border-[#4363F9] border-4 h-32 w-32 bg-orange-50 opacity-50"></div>
      <div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 "></div>
    </div>
  );
}
