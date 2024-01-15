import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Product() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setTitle(res.title);
        setDescription(res.description);
      });
  }, []);
  return (
    <>
      <h1>This is a specific Product page</h1>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
    </>
  );
}
