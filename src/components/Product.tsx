import { Card, Icon } from "@/components";
import clsx from "clsx";
import IMG from "@/assets/product.png";

type Props = {
  className?: string;
  title: string;
};
function Topic({ title }: Props) {
  return (
    <Card className="p-6 flex">
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-auto">{title}</h3>

        <a href="#" className="flex text-primary">
          <span>Shop now</span>

          <Icon.ArrowRight />
        </a>
      </div>

      <div className="flex-1">
        <img src={IMG} alt="product picture" />
      </div>
    </Card>
  );
}

function Feature({ className, title }: Props) {
  return (
    <Card className={clsx("flex flex-col p-3", className)}>
      <div className="flex-1">
        <img src={IMG} alt="product picture" />
      </div>

      <header>
        <h3 className="text-sm">{title}</h3>

        <strong className="text-xs">USD 350</strong>
      </header>
    </Card>
  );
}

function Popular({ title }: Props) {
  return (
    <div className="flex gap-4">
      <Card className="flex-1">
        <div className="bg-gray-lighter flex justify-center items-center p-3">
          <img src={IMG} alt="product picture" />
        </div>
      </Card>

      <div className="flex-[3] flex flex-col justify-between">
        <header>
          <h3>{title}</h3>

          <strong className="text-xs">USD 350</strong>
        </header>

        <footer className="flex gap-4 items-center text-xs">
          <span className="inline-flex items-center gap-1">
            <Icon.Star className="w-4 text-accent" />

            <span>4.6</span>
          </span>

          <span>86 Reviews</span>

          <button className="ml-auto">
            <Icon.MoreVertical className="w-5" />
          </button>
        </footer>
      </div>
    </div>
  );
}

export const Product = {
  Topic,
  Feature,
  Popular,
};
