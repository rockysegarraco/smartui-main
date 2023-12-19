const tabs = [{ name: "Delivery" }, { name: "Pickup" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ tabname, setTab }) {
  return (
    <div>
      <div>
        <nav
          className="isolate flex border p-1 rounded-full mx-4 gap-x-1"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <span
              key={tab.name}
              onClick={() => setTab(tab.name)}
              className={classNames(
                tab.name === tabname
                  ? "text-white bg-blue-700 rounded-full active:text-black"
                  : "text-blue-700 hover:text-blue-700",
                tabIdx === 0 ? "" : "",
                tabIdx === tabs.length - 1 ? "" : "",
                "group relative min-w-0 flex-1 overflow-hidden py-2 px-4 text-center text-sm font-medium text-blue-500  cursor-pointer rounded-full hover:border-b-none"
              )}
              aria-current={tab.name === tabname ? "page" : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.name === tabname ? "bg-blue-500" : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
