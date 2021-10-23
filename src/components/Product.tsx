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

export const Product = {
  Topic,
  Feature,
};
