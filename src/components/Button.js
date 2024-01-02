import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Button(props) {
  return (
    <div>
      <div
        className={`flex w-full ${props.bg} ${props.animate} justify-between rounded-full p-1 items-center pr-4 hover:bg-opacity-90 cursor-pointer`}
      >
        <div className="group flex grow flex-row items-center rounded-full justify-between">
          <div>
            <img
              className="h-10 group-hover:animate-bounce"
              src={props.ImageUrl}
              alt=""
            />
          </div>
          <div
            className={`uppercase font-medium text-md ${props.textColor} text-center item-center`}
          >
            {props.title}
          </div>
          <div>
            <ChevronRightIcon
              className={`h-6 w-6 group-hover:animate-ping ${props.textColor}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
