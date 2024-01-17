import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import Widget from "@/components/Widget";

export default function Example() {
  return (
    <div className="bg-white lg:h-screen lg:p-0 p-4">
      <div className="relative isolate pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 mx-auto max-w-full px-6 py-8 lg:gap-x-10 lg:px-48 lg:py-12">
          <div className="col-span-1 lg:col-span-8 xl:col-span-6 lg:mx-0 order-2 lg:order-1">
            <h1 className="mt-4 max-w-lg text-2xl font-bold text-black sm:text-4xl">
              DAILY MOISTURE SHAMPOO
            </h1>
            <p className="mt-6 text-lg leading-6 text-black max-w-full lg:max-w-4xl">
              The moisturizing shampoo that gently cleanses and deeply hydrates.
            </p>
            <p className="mt-6 text-lg leading-6 text-black max-w-full lg:max-w-4xl">
              The Daily Moisture Renewal Shampoo gently cleanses your hair with
              a nutrient rich lather that wraps every strand with strength. The
              Pro-V formula delivers 2X moisture, deeply hydrating and
              nourishing dry hair for lasting softness. (*vs non-conditioning
              shampoo)
            </p>
            <div className="font-bold mb-4">
              How does it work? – The Pro-V Nutrients.
            </div>
            <p className="mt-6 text-lg leading-6 text-black max-w-full lg:max-w-4xl">
              Moisturizing Lipids: Absorb into each strand to rebuild flexible
              restore hair with moisture. <br /> <br />
              Protective Antioxidant, Histidine: – Goes deep into hair’s core to
              protect existing bonds by reducing free radical damage.
            </p>
            <div className="mt-4">
              <Widget />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4 xl:col-span-6 mx-auto order-1 lg:order-2 lg:mb-0 mb-4">
            <img
              className="w-full border"
              src="https://images.ctfassets.net/r9udlqyetmm3/2GwqnMP0l62nzNq9fkzAlu/da62d639d47104a8218f95bf622cf99a/080878195565_C1N1_dt.jpg?fm=webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
