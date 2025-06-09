import RetailerCard from "@/components/ProductLocator/RetailerCard";

export default function Columns({ title, children }) {
  return (
    <>
      <main className="md:h-screen lg:flex grid grid-cols-1 md:grid-cols-2">
        {/* Left Column (Fixed) */}
        <div className="lg:w-96 lg:sticky lg:top-0 lg:h-screen border-r border-slate-200">
          <h1 className="text-sm uppercase font-bold p-4 bg-white border-b border-slate-200">
            Find your Product{title}
          </h1>
          <div className="p-4">
            <div>
              <img
                className="mx-auto w-1/3"
                src="https://s3.us-west-2.amazonaws.com/static.smartcommerce.co/assets/img/productlocator/generic-product.svg"
              />
            </div>
          </div>
        </div>

        {/* Right Column (Scrollable) */}
        <div className="lg:w-full overflow-auto">
          <div className="bg-slate-300 h-48">MAP</div>
          <div className="bg-slate-400 p-4 sticky top-0">PILLS</div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4  gap-2 h-full">
              {/* CARD */}
              <RetailerCard
                retailer="Amazon"
                meta={
                  <>
                    <span className="font-bold lg:text-[1vw]">1.33mi</span>
                    <span className="text-slate-100"> | </span>
                    <a className="text-[#4363F9]" href="#">
                      Directions
                    </a>
                  </>
                }
                address="299 E International Speedway Boulevard Deland, FL 32724"
                image="https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg"
              />
              <RetailerCard
                retailer="Amazon"
                address={
                  <>
                    <div className="flex items-center font-bold gap-x-1 text-green-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                      <div>ONLINE</div>
                    </div>
                  </>
                }
                image="https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg"
              />
              <RetailerCard
                retailer="Amazon"
                image="https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg"
              />
            </div>
          </div>
          {children}
        </div>
      </main>
      <div className="fixed bottom-0 p-4 bg-white border-t border-slate-200 w-full text-center">
        Hello
      </div>
    </>
  );
}
