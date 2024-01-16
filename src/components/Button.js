import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Button(props) {
  return (
    <div className="group">
      <div
        className={`flex w-full ${props.bg} ${props.animate} justify-between rounded-full p-1 items-center pr-4 hover:bg-opacity-90 cursor-pointer`}
      >
        <div className="flex grow flex-row items-center rounded-full justify-between">
          <div className="flex items-center">
            <div className="pr-4">
              <img className="h-10" src={props.ImageUrl} alt="" />
            </div>
            <div
              className={`uppercase font-medium text-md ${props.textColor} text-center item-center group-hover:animate-jump-in`}
            >
              {props.title}
            </div>
          </div>
          <div>
            <ChevronRightIcon
              className={`h-6 w-6 group-hover:animate-jump-in ${props.textColor}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
