import { FC } from "react";

import Heading from "@/ui/Heading";
import Meta from "@/ui/Meta";
import Catalog from "@/ui/catalog/Catalog";

import { TypePaginationProducts } from "@/types/product.interface";

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
  return (
    <Meta title="Home">
      <Heading>Hello World!</Heading>
      <Catalog products={products || []} />
    </Meta>
  );
};

export default Home;
