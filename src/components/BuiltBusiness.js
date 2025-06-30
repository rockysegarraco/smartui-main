const stats = [
  {
    id: 1,
    name: "One-click carting for ads + social media",
    value: "SmartLink",
    bgImage:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-[#4363F9] to-[#21295d]", // Gradient from blue to dark
  },
  {
    id: 2,
    name: "One-click carting for ads + social media",
    value: "SmartSite",
    bgImage:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-[#4363F9] to-[#21295d]", // Gradient from blue to
  },
  {
    id: 3,
    name: "One-click carting for ads + social media",
    value: "Reporting",
    bgImage:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-[#171C48] to-[#21295d]", // Gradient from blue to
  },
];

export default function BuiltBusiness() {
  return (
    <div className="bg-[#1C2358] pb-8 pt-20 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl md:text-6xl font-bold text-center text-white mb-8 lg:mb-8">
              Built for Your Business
            </h2>
            <p className="mt-4 text-lg/8 text-gray-300">
              Lorem ipsum dolor sit amet consect adipisicing possimus.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl sm:grid-cols-1 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`group relative flex flex-col ${stat.bgColor} p-8 transition-all duration-500 ease-out hover:bg-transparent overflow-hidden cursor-pointer h-[300px] lg:h-[500px]`}
              >
                {/* Background image - only visible on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-out"
                  style={{ backgroundImage: `url(${stat.bgImage})` }}
                />

                {/* Overlay to ensure text readability on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                {/* Content - positioned at bottom */}
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <dt className="text-sm/6 font-semibold text-gray-300 group-hover:text-white transition-colors duration-500">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white group-hover:text-white group-hover:scale-100 transition-all duration-500">
                    {stat.value}
                  </dd>

                  {/* Arrow Icon */}
                  <div className="mt-4 group-hover:translate-x-2 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
