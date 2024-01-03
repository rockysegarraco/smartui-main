import Widget from "@/components/Widget";

export default function HalfPage() {
  return (
    <div className="relative isolate overflow-hidden bg-auto bg-no-repeat bg-center  bg-[url('/img/brown_MoltonCookies_h.jpg')]">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <img
            className="h-24"
            src="https://bigtreefarms.com/wp-content/uploads/2021/08/Logo.svg"
            alt="Your Company"
          />

          <h1 className="mt-10 text-4xl font-bold text-gray-900 sm:text-6xl">
            Organic Brown Coconut Sugar
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Unrefined, low glycemic and rich in essential nutrients, our Brown
            Coconut Sugar is rooted in tradition. Minimally processed using the
            same ancient methods that are passed down generation to generation.
            Offers an incredibly delicious and better-for-you 1:1 replacement to
            cane sugar.
          </p>
          <div className="mt-10">
            <Widget />
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
