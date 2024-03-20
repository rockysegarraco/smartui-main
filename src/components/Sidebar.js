import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

import Button from "@/components/Button";

export default function Example(props) {
  return (
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.closeModal}>
        <div className="fixed inset-0" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-x-4">
                          <div className="font-bold text-xl">Your Basket</div>
                          <div>
                            <img
                              className="h-8"
                              src="https://click2cart.com/assets/img/basket.svg?20240319T050807194229"
                            />
                          </div>
                        </div>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500"
                            onClick={props.closeModal}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="flex flex-row items-center gap-x-4 border p-4">
                        <div>
                          <img
                            className="w-[125px]"
                            src="https://www.kroger.com/product/images/medium/front/0007143000034"
                            alt=""
                          />
                        </div>
                        <div className="grow text-sm">
                          <div className="font-bold text-black bg-[#FED241] text-center py-1 rounded-full w-[80px] mb-2">
                            $3.67
                          </div>
                          Dole Sunflower Crunch Chopped Salad Kit 12.2 fl oz
                          <div className="flex justify-between items-center">
                            <div className="text-white mt-3 py-1 px-1 rounded-full text-center bg-[#E5E5E5] cursor-pointer lg:text-base text-xs w-[110px]">
                              <div className="flex items-center justify-between gap-x-2">
                                <div>
                                  <MinusCircleIcon className="h-8 text-black" />{" "}
                                </div>
                                <div className="text-black text-base">1</div>
                                <div>
                                  <PlusCircleIcon className="h-8 text-black" />{" "}
                                </div>
                              </div>
                            </div>
                            <div>
                              <TrashIcon className="h-6 text-slate-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-x-4 border p-4">
                        <div>
                          <img
                            className="w-[125px]"
                            src="https://www.kroger.com/product/images/medium/front/0007274506839"
                            alt=""
                          />
                        </div>
                        <div className="grow text-sm">
                          <div className="font-bold text-black bg-[#FED241] text-center py-1 rounded-full w-[80px] mb-2">
                            $10.99
                          </div>
                          Dole Sunflower Crunch Chopped Salad Kit 12.2 fl oz
                          <div className="flex justify-between items-center">
                            <div className="text-white mt-3 py-1 px-1 rounded-full text-center bg-[#E5E5E5] cursor-pointer lg:text-base text-xs w-[110px]">
                              <div className="flex items-center justify-between gap-x-2">
                                <div>
                                  <MinusCircleIcon className="h-8 text-black" />{" "}
                                </div>
                                <div className="text-black text-base">1</div>
                                <div>
                                  <PlusCircleIcon className="h-8 text-black" />{" "}
                                </div>
                              </div>
                            </div>
                            <div>
                              <TrashIcon className="h-6 text-slate-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-0">
                        <div className="flex items-center justify-between p-4 bg-slate-100 mb-2 mt-1 rounded-sm">
                          <div className="font-bold">TOTAL</div>
                          <div className="font-bold">$14.66</div>
                        </div>
                        <div className="flex justify-center text-white py-4 px-8 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer text-base">
                          Send to Cart
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
