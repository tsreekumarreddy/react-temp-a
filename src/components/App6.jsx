import { useState } from "react";
import "./App6.css";

export default function App6() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    if (!product || !price || !quantity) {
      alert("Please fill all fields.");
      return;
    }

    const newProduct = { product, price: Number(price), quantity: Number(quantity) };
    setProducts([...products, newProduct]);

    // Reset input fields
    setProduct("");
    setPrice("");
    setQuantity("");
  };

  const handleDelete = (item) => {
    setProducts(products.filter((value) => value !== item));
  };

  return (
    <div>
      <h3>This is App6</h3>
      <div className="App-Row">
        <div className="App-Box">
          <p>
            <input
              type="text"
              value={product}
              placeholder="Product Name"
              onChange={(e) => setProduct(e.target.value)}
            />
          </p>
          <p>
            <input
              type="number"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </p>
          <p>
            <input
              type="number"
              value={quantity}
              placeholder="Quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <ol className="App-Box">
          {products.map((value, index) => (
            <li key={index}>
              {value.product} | {value.price} | {value.quantity} | {value.price * value.quantity}{" "}
              <button onClick={() => handleDelete(value)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
