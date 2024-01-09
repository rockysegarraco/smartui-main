import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function Pill(props) {
  return (
    <>
      <div
        className={`flex w-full ${props.bg} ${props.animate} justify-between rounded-full p-1 items-center pr-2 hover:bg-opacity-90 cursor-pointer`}
      >
        <div className="flex grow flex-row items-center rounded-full justify-between">
          <div className="animate-none hover:animate-pulse">
            <img className="h-12" src={props.ImageUrl} alt="" />
          </div>
          <div
            className={`uppercase font-medium text-sm lg:text-md ${props.textColor} text-center item-center`}
          >
            {props.title}
          </div>
          <div>
            <ChevronRightIcon className={`h-6 w-6 ${props.textColor}`} />
          </div>
        </div>
        <div className="flex flex-row items-center bg-black/10 hover:bg-black/25 px-4 py-2 rounded-full">
          <div
            onClick={props.openModal}
            className="font-medium text-white text-[10px] uppercase pr-1 text-center leading-[12px]"
          >
            3 of 4<br /> products
          </div>
          <ChevronLeftIcon className={`h-2 w-2 ${props.textColor}`} />
        </div>
      </div>
    </>
  );
}
