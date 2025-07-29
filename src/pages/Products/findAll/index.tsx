import React, { useEffect } from "react";
import toast from "react-hot-toast";

import { useFindAll } from "../../../hooks/products/findAll";

import { Card, Breadcrumb, Flex } from "antd";

const { Meta } = Card;

const FindAllPage: React.FC = () => {
  const { data, isError, isLoading } = useFindAll();

  useEffect(() => {
    if (isLoading) {
      const id = toast.loading("Loading...");
      return () => toast.dismiss(id);
    }
  }, [isLoading]);

  if (isError) {
    toast.error("This didn't work.");
    return null;
  }

  return (
    <>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[{ title: "Home" }, { title: "products" }]}
      />
      <Flex gap="middle" style={{ flexWrap: "wrap" }}>
        {data?.map((product) => (
          <Card
            key={product.id}
            hoverable
            style={{ width: 340, height: "340px", overflowY: "scroll",overflowX:"hidden" }}
            cover={<img alt={product.image} src={product.image} />}
          >
            <Meta title={product.title} description={product.description} />
            <p style={{ color: "green", margin: "10px 0px" }}>
              $ {product.price}
            </p>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default FindAllPage;
