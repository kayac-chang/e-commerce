import {
  Section,
  Review,
  Button,
  Product as _Product,
  List,
} from "@/components";

interface Item {
  id: string;
  title: string;
}

type Props = {
  pictures: Item[];
  anothers: Item[];
};

export function Overview({ pictures, anothers }: Props) {
  return (
    <>
      <div className="px-6">
        <List items={pictures} className="py-4 my-4 gap-4">
          {({ title }) => (
            <_Product.Picture
              title={title}
              className="w-[75vw] min-h-[24rem]"
            />
          )}
        </List>

        <Section title="Review (102)">
          <ul className="flex flex-col gap-4">
            <li>
              <Review name="Madelina" rate={4} time="1 Month ago">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Review>
            </li>

            <li>
              <Review name="Irfan" rate={4} time="1 Month ago">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Review>
            </li>

            <li>
              <Review name="Ravi Putra" rate={4} time="1 Month ago">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Review>
            </li>
          </ul>

          <div className="flex justify-center my-4">
            <button className="text-gray-darker text-sm p-2">
              See All Reviews
            </button>
          </div>
        </Section>
      </div>

      <div className="bg-gray-lighter p-6">
        <Section
          title="Another Product"
          option={
            <a href="#" className="text-gray-darker">
              See All
            </a>
          }
        >
          <List items={anothers} className="gap-4">
            {(item) => <_Product.Grid {...item} className="w-[40vw]" />}
          </List>
        </Section>
      </div>

      <footer className="flex p-4">
        <Button.Primary className="w-full text-white">
          Add To Cart
        </Button.Primary>
      </footer>
    </>
  );
}
