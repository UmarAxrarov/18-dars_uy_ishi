// File: src/pages/CreateProductPage.tsx
import { useForm } from "react-hook-form";
import { Input, Button, Form, Card } from "antd";
import type { IProduct } from "../../../interfaces/products.interface";
import { create } from "../../../api/products";

export default function CreateProductPage() {
  const { register, handleSubmit, reset } = useForm<Partial<IProduct>>();

  async function onSubmit(data: Partial<IProduct>) {
    await create(data);
    reset();
  }

  return (
    <Card title="Create Product">
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
          Create
        </Button>
      </Form>
    </Card>
  );
}