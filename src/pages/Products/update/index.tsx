import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Input, Button, Form, Card } from "antd";
import { useParams } from "react-router";
import type { IProduct } from "../../../interfaces/products.interface";
import { findOne, update } from "../../../api/products";

export default function UpdateProductPage() {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm<Partial<IProduct>>();

  useEffect(() => {
    if (id) {
      findOne(id).then((product) => {
        setValue("title", product.title);
        setValue("price", product.price);
        setValue("description", product.description);
        setValue("image", product.image);
      });
    }
  }, [id, setValue]);

  async function onSubmit(data: Partial<IProduct>) {
    if (id) await update(id, data);
  }

  return (
    <Card title="Update Product">
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        <Form.Item label="Title">
          <Input {...register("title", { required: true })} />
        </Form.Item>
        <Form.Item label="Price">
          <Input type="number" {...register("price", { required: true })} />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea {...register("description")} />
        </Form.Item>
        <Form.Item label="Image">
          <Input {...register("image")} />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Update
        </Button>
      </Form>
    </Card>
  );
}