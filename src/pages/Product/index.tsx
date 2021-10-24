import { Tabs, Product as _Product } from "@/components";
import { Layout } from "@/layouts";
import { Overview } from "./Overview";

export function Product() {
  const pictures = [
    {
      id: "1",
      title: "TMA-2 HD WIRELESS",
    },
    {
      id: "1",
      title: "TMA-2 HD WIRELESS",
    },
  ];

  const anothers = [
    {
      id: "1",
      title: "TMA-2 HD Wireless",
    },
    {
      id: "2",
      title: "CO2 - Cable",
    },
  ];

  return (
    <Layout.Default>
      <div className="overflow-auto">
        <header className="flex flex-col gap-2 px-6">
          <strong className="text-primary">USD 350</strong>

          <h1 className="text-3xl font-bold">TMA-2 HD WIRELESS</h1>

          <Tabs />
        </header>

        <Overview pictures={pictures} anothers={anothers} />
      </div>
    </Layout.Default>
  );
}
