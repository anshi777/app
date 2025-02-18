import React, { useState } from "react";
import { Form, Button, Table, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, updateProduct } from "../../features/SellerSlice";

const Seller = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const {products,loading,error}= useSelector((state) => state.product);

  const dispatch = useDispatch();
  const newProducts = useSelector((state) => state.seller.newProducts);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !category || !brand || !price || !image) {
      alert("Please fill all the fields");
      return;
    }

    const newProduct = {
      id: editingProduct ? editingProduct.id : Date.now(),
      productName,
      category,
      brand,
      price,
      image,
    };

    if (editingProduct) {
      dispatch(updateProduct(newProduct));
      setEditingProduct(null);
    } else {
      dispatch(addProduct(newProduct));
    }

    setProductName("");
    setCategory("");
    setBrand("");
    setPrice("");
    setImage(null);
  };

  const handleEdit = (product) => {
    setProductName(product.productName);
    setCategory(product.category);
    setBrand(product.brand);
    setPrice(product.price);
    setImage(product.image);
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div style={{ marginTop: "70px", padding: "20px" }}>
      <Container className="mt-5">
        <h2 className="text-center">Seller Product Upload</h2>

        
        <Form onSubmit={handleSubmit} className="p-4 border rounded shadow">
          {/* {products.length === 0 && (
          products.map((product) => {
            return (
              <div key={product.id}>
                <h2>{product.productName}</h2>
                <p>{product.category}</p>
                <p>{product.brand}</p>
                <p>{product.price}</p>
              </div>
            );  
          } */}
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" onChange={handleImageUpload} />
          </Form.Group>

          {image && (
            <div className="mb-3">
              <img src={image} alt="Product" width="100" height="100" />
            </div>
          )}

          <Button variant="primary" type="submit">
            {editingProduct ? "Update Product" : "Upload Product"}
          </Button>
        </Form>

        <h3 className="mt-4">Uploaded Products</h3>
        {newProducts.length > 0 ? (
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {newProducts.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>${product.price}</td>
                  <td>
                    <img src={product.image} alt="Product" width="50" height="50" />
                  </td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => handleEdit(product)}>
                      Update
                    </Button>{" "}
                    <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="text-muted">No newProducts uploaded yet.</p>
        )}
      </Container>
    </div>
  );
};

export default Seller;
