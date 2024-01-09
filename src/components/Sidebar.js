import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Button from "@/components/Button";

export default function Example(props) {
  return (
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
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
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          <img
                            className="h-12"
                            src="https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/targetpoweredbyinstacart_usa_dark.svg"
                            alt=""
                          />
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                      <div className="flex flex-row justify-between items-center gap-x-4 border p-4">
                        <div>
                          <img
                            className="h-12 w-full"
                            src="https://s3-us-west-2.amazonaws.com/smartcommerce.co/images_pms/41/20708841.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="grow text-sm">
                          Pantene Miracle Moisture Boost Conditioner with Rose
                          Water 8 fl oz
                        </div>
                        <div>$8.99</div>
                        <div>
                          <img src="erase.png" />
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center gap-x-4 border p-4">
                        <div>
                          <img
                            className="h-12 w-full"
                            src="https://s3-us-west-2.amazonaws.com/smartcommerce.co/images_pms/41/20708841.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="grow text-sm">
                          Pantene Miracle Moisture Boost Conditioner with Rose
                          Water 8 fl oz
                        </div>
                        <div>$8.99</div>
                        <div>
                          <img src="erase.png" alt="" />
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center gap-x-4 border p-4">
                        <div>
                          <img
                            className="h-12 w-full"
                            src="https://s3-us-west-2.amazonaws.com/smartcommerce.co/images_pms/41/20708841.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="grow text-sm">
                          Pantene Miracle Moisture Boost Conditioner with Rose
                          Water 8 fl oz
                        </div>
                        <div>$8.99</div>
                        <div>
                          <img src="erase.png" alt="" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button
                          title="Add to Cart"
                          ImageUrl="https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/targetpoweredbyinstacart_usa_dark.svg"
                          bg="bg-[#CC0000]"
                          animate="animate-delay-[.4s] animate-fade-up animate-once"
                          textColor="text-white"
                        />
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
