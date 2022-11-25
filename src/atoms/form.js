import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulir = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-2">
          <Form.Label>Nama Produk</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Gambar Produk</Form.Label>
          <Form.Control type="file" />
          <Form.Text className="text-muted">*JPG/PNG. max 100KB.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Harga Beli</Form.Label>
          <Form.Control type="number" placeholder="Rp." />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Harga Jual</Form.Label>
          <Form.Control type="number" placeholder="Rp." />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Jumlah Stok</Form.Label>
          <Form.Control type="number" placeholder="0" />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-end mt-5">
        <Button variant="primary" type="submit">
          Tambahkan
        </Button>
      </div>
    </div>
  );
};

export default Formulir;
