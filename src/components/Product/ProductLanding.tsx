import { useCallback, useEffect, useState, type FC } from "react";
import type { Product } from "../../models/product";
import { getProducts } from "../../services/products";

export const ProductLanding: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProduct = useCallback(async () => {
    const res = await getProducts().then((res) => {
      setProducts(res!);
    });
    return res;
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((p) => (
          <p key={p.id}>
            {p.name} — ${p.price}
          </p>
        ))
      )}
    </div>
  );
};
