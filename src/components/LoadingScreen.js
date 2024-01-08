import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
      <div class="border-t-transparent border-solid animate-spin rounded-full border-[#f26B21] border-4 h-32 w-32 bg-orange-50 opacity-50"></div>
      <div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
        <img className="h-24 animate-pulse" src="img/c2c-mark.svg" />
      </div>
    </div>
  );
}
