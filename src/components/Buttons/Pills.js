import { MapIcon } from "@heroicons/react/24/solid";
import Button from "@/components/Button";

export default function ButtonMap() {
  return (
    <div>
      <div className="flex flex-col gap-y-1 px-6 pb-6">
        <Button
          title="Add to Cart"
          ImageUrl="https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/targetpoweredbyinstacart_usa_dark.svg"
          bg="bg-[#CC0000]"
          animate="animate-delay-[.2s] animate-fade-up animate-once"
          textColor="text-white"
        />
        <Button
          title="Add to Cart"
          ImageUrl="https://click2cart.com/img/supers/sc/us/small/amazon_usa_dark.svg"
          bg="bg-[#000000]"
          animate="animate-delay-[.4s] animate-fade-up animate-once"
          textColor="text-white"
        />
        <Button
          title="Add to Cart"
          ImageUrl="https://click2cart.com/img/supers/sc/ca/small/instacart_ca_dark.svg"
          bg="bg-[#003E29]"
          animate="animate-delay-[.6s] animate-fade-up animate-once"
          textColor="text-white"
        />
        <Button
          title="Add to Cart"
          ImageUrl="https://click2cart.com/img/supers/sc/us/small/walmartpoweredbyinstacart_usa_dark.svg"
          bg="bg-[#0071DC]"
          animate="animate-delay-[.8s] animate-fade-up animate-once"
          textColor="text-white"
        />
      </div>
    </div>
  );
}
