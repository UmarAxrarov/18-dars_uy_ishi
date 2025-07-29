import { useEffect } from "react";
import { Card } from "antd";
import { useNavigate, useParams } from "react-router";
import { deleteP } from "../../../api/products";

export default function DeleteProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      deleteP(id).then(() => navigate("/"));
    }
  }, [id, navigate]);

  return (
    <Card title="Deleting...">
      <p>Deleting product with id: {id}</p>
    </Card>
  );
}