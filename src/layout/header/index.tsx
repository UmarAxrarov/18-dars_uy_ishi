import type { FC } from "react";
import { Layout, Menu } from "antd";
import { NavLink, useLocation } from "react-router";
const { Header } = Layout;

const menuItems = [
  { key: "1", label: "get all products", path: "/" },
  { key: "2", label: "get one product", path: "/product/1" },
  { key: "3", label: "create product", path: "/create" },
  { key: "4", label: "update product", path: "/update/1" },
  { key: "5", label: "delete product", path: "/delete/1" },
];

const HeaderLayout: FC = () => {
  const location = useLocation();

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={
          menuItems.find((item) => location.pathname.startsWith(item.path))?.key
            ? [
                menuItems.find((item) =>
                  location.pathname.startsWith(item.path)
                )!.key,
              ]
            : []
        }
        style={{ flex: 1, minWidth: 0 }}
        items={menuItems.map((item) => ({
          key: item.key,
          label: <NavLink to={item.path}>{item.label}</NavLink>,
        }))}
      />
    </Header>
  );
};

export default HeaderLayout;
