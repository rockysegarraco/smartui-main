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
    <div className="bg-[#1E3932]">
      <div className="relative isolate pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-full px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-24 lg:py-40">
          <div className="col-span-1 lg:col-span-2 lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-4xl font-bold text-white sm:text-6xl">
              Pike Place® Roast
            </h1>
            <p className="mt-6 text-lg leading-8 text-white max-w-full lg:max-w-4xl">
              A smooth, well-rounded blend of Latin American coffees with subtly
              rich notes of cocoa and toasted nuts, it’s perfect for every day.
            </p>
            <div className="mt-10">
              <WidgetMap />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1 mt-16 sm:mt-24 lg:mt-0 mx-auto">
            <img
              className="w-[500px]"
              src="img/Screenshot 2023-12-28 at 5.52.44 PM.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
