/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import TabsMap from "@/components/TabsMap";
import { DeliveryTab } from "@/components/DeliveryTab";
import PickupTab from "@/components/PickupTab";
import PickupTabScroll from "@/components/PickupTabScroll";

export default function Page() {
  const [tab, setTab] = useState("Delivery");
  return (
    <>
      <div>
        <div>
          <div className="mx-auto max-w-sm bg-white shadow-sm h-screen">
            <div className="h-2/3 bg-slate-500">Hello</div>
            <div className="h-1/3 overflow-auto">
              {/* TABS */}
              <div className="pt-5">
                <TabsMap tabname={tab} setTab={(name) => setTab(name)} />
              </div>
              {/* Delivery Tab */}
              {tab === "Delivery" && <DeliveryTab />}

              {/* Pickup Tab */}
              {tab === "Pickup" && <PickupTab />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
