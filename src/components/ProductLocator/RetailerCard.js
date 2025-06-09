import Button from "@/components/Button";

export default function Columns({
  title,
  retailer,
  image,
  address,
  meta,
  children,
}) {
  return (
    <div>
      <div className="flex flex-col bg-white shadow h-full p-4 rounded">
        {/* CONTENT CARD */}
        <div className="grow">
          <div className="flex gap-4 items-start">
            <div className="flex-none size-20">
              <img className="w-10" src={image} />
            </div>
            <div>
              {/* CONTENT FLEX */}
              <div className="flex flex-col gap-2 mb-4">
                <div>
                  <span className="font-bold">{retailer}</span> <br /> $26, 12
                  oz (24 Pack)
                </div>
                <div className="lg:text-[1vw] lg:leading-[1.25vw] leading-5">
                  {address}
                </div>
                <div>{meta}</div>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER CARD */}
        <div className="size-14 flex-none ...">
          <button
            type="button"
            className="w-full rounded-full bg-[#4363F9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5673FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {title}

      {children}
    </div>
  );
}
