import { Nav, Input, Badge, Product } from "@/components";

export function Home() {
  const categories = ["Microphones", "Loudspeakers", "Earphones", "Headphones"];

  const topics = [
    {
      title: "TMA-2 Modular Headphone",
    },
  ];

  const features = [
    {
      title: "TMA-2 HD Wireless",
    },
  ];

  return (
    <main className="h-screen overflow-hidden flex flex-col">
      <Nav />

      <form className="flex-1 flex flex-col">
        <header className="px-8 pt-4 pb-6">
          <p>Hi, Andrea</p>

          <h1 className="text-2xl font-medium mb-6">
            What are you looking for today?
          </h1>

          <Input.Search className="border border-gray-dark py-2" />
        </header>

        <div className="rounded-t-3xl bg-gray-light flex-1 px-8 pt-6 flex flex-col gap-2">
          <ul className="flex py-2 gap-6 overflow-auto">
            {categories.map((category) => (
              <li key={category}>
                <Badge.Default>
                  <a href="#">Headphone</a>
                </Badge.Default>
              </li>
            ))}
          </ul>

          <ul className="flex flex-nowrap gap-4">
            {topics.map((props) => (
              <li key={props.title} className="min-w-full">
                <Product.Topic {...props} />
              </li>
            ))}
          </ul>

          <div className="flex flex-col">
            <header className="flex justify-between py-4">
              <h2>Featured Products</h2>

              <a href="#" className="text-sm text-gray-darker">
                See All
              </a>
            </header>

            <ul className="flex flex-nowrap gap-4">
              {features.map((props) => (
                <li key={props.title} className="w-1/2">
                  <Product.Feature className="h-56" {...props} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </main>
  );
}
