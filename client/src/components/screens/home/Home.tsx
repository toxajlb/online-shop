import { FC } from "react";

import Meta from "@/ui/Meta";
import CatalogPagination from "@/ui/catalog/CatalogPagination";
import Layout from "@/ui/layout/Layout";

import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";

import { TypePaginationProducts } from "@/types/product.interface";

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
  const { user } = useAuth();
  const { logout } = useActions();

  return (
    <Meta title="Home">
      <Layout>
        {!!user && <button onClick={() => logout()}>Logout</button>}
        <CatalogPagination title="Products" data={{ products, length }} />
      </Layout>
    </Meta>
  );
};

export default Home;
