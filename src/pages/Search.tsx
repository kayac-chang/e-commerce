import { Nav, Icon, Input, Product, Section } from "@/components";

type SearchOptionProps = {
  title: string;
};
function SearchOption({ title }: SearchOptionProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon.Clock className="w-5 text-gray-dark" />

      <span className="text-sm">{title}</span>

      <button className="ml-auto">
        <Icon.X className="w-5" />
      </button>
    </div>
  );
}

export function Search() {
  const searchTerms = [{ title: "TMA2 Wireless" }, { title: "Cable" }];

  const popularProducts = [
    {
      title: "TMA-2 Comfort Wireless",
    },
    {
      title: "TMA-2 DJ",
    },
    {
      title: "TMA-2 Move Wireless",
    },
  ];

  return (
    <main className="h-screen overflow-hidden flex flex-col gap-4">
      <Nav.Search />

      <form className="px-8 flex flex-col gap-8">
        <Input.Search className="border border-gray-dark" />

        <Section title="Lastest search">
          <ul className="flex flex-col gap-4">
            {searchTerms.map((props) => (
              <li key={props.title}>
                <SearchOption {...props} />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Popular product">
          <ul className="flex flex-col gap-6">
            {popularProducts.map((props) => (
              <li key={props.title}>
                <Product.Popular {...props} />
              </li>
            ))}
          </ul>
        </Section>
      </form>
    </main>
  );
}
