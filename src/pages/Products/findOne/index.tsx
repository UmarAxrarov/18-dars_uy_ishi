import { useEffect, useState } from "react";
import { Card, Spin } from "antd";
import { useParams } from "react-router";
import type { IProduct } from "../../../interfaces/products.interface";
import { findOne } from "../../../api/products";

export default function FindOneProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      findOne(id).then((res) => {
        setProduct(res);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <Spin />;

  return (
    <Card
      title={product?.title}
      cover={<img src={product?.image} alt={product?.title} />}
    >
      <p>
        <strong>Price:</strong> ${product?.price}
      </p>
      <p>{product?.description}</p>
    </Card>
  );
}
