import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import WidgetMap from "@/components/Widgets/WidgetMap";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#1E3932] lg:h-screen">
      <div className="relative isolate pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 mx-auto max-w-full px-6 py-8 sm:py-32 lg:gap-x-10 lg:px-24 lg:py-20">
          <div className="col-span-1 lg:col-span-7 lg:mx-0 lg:flex-auto order-2 lg:order-1">
            <h1 className="mt-4 max-w-lg text-4xl font-bold text-white sm:text-6xl lg:text-left text-center">
              Pike Place<span className="font-normal">®</span> Roast
            </h1>
            <h1 className="mt-2 max-w-lg text-2xl font-normal text-white sm:text-3xl lg:text-left text-center">
              K-Cup<span className="font-normal">®</span> Pods
            </h1>
            <p className="mt-6 text-lg leading-6 text-white max-w-full lg:max-w-4xl lg:text-left text-center">
              A smooth, well-rounded blend of Latin American coffees with subtle
              notes of cocoa and rich praline, it's perfect for every day.
            </p>
            <div className="mt-4 overflow-scroll">
              <img
                className="w-[800px] overflow-scroll"
                src="img/Screenshot 2023-12-28 at 7.03.20 PM.png"
                alt=""
              />
            </div>
            <div className="mt-4">
              <WidgetMap />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5 mx-auto order-1 lg:order-2">
            <img
              className="w-full"
              src="img/Screenshot 2023-12-28 at 5.52.44 PM.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
