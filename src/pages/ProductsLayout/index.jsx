import { Outlet } from "react-router-dom";
export default function ProductsLayout() {
  const outletContext = {
    name: "products",
    project: "Edversity-Twitter",
    institution: "Edversity",
  };
  return (
    <>
      <p>This is products header</p>
      <Outlet context={outletContext} />
      {/* Content goes here */}
      <p>This is products footer</p>
    </>
  );
}
