import { Icon, Panel, Product } from "@/components";
import { Layout } from "@/layouts";
import clsx from "clsx";

export function Explore() {
  const sortList = ["Popularity", "Newest", "Most Expensive"];

  const products = [
    {
      title: "TMA-2 HD Wireless",
    },
  ];

  return (
    <Layout.Default>
      <form className="flex-1 flex flex-col">
        <header className="flex flex-col gap-2 px-8 mb-6">
          <p>Headphone</p>

          <h1 className="text-2xl font-bold">TMA Wireless</h1>

          <div className="text-sm flex items-center my-2">
            <button
              className={clsx(
                "inline-flex items-center gap-2",
                "border border-gray-dark rounded-xl",
                "py-2 px-4"
              )}
            >
              <Icon.Sliders className="w-5" />

              <span>Filter</span>
            </button>

            <ul className="flex flex-nowrap mx-4 whitespace-nowrap overflow-auto">
              {sortList.map((sortBy) => (
                <li key={sortBy}>
                  <a href="#">
                    <div className="min-w-20 p-3">{sortBy}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <Panel>
          <ul className="grid grid-cols-2 gap-4">
            {products.map((props) => (
              <li key={props.title}>
                <Product.Grid {...props} />
              </li>
            ))}
          </ul>
        </Panel>
      </form>
    </Layout.Default>
  );
}
