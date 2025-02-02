import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Button,
} from '@mui/material';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  // Fetch products from API
  useEffect(() => {
    axios
      .get('http://localhost:3000/showproduct')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        setError('Failed to load products');
      });
  }, []);

  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Product List
      </Typography>
      {error && <Typography color="error">{error}</Typography>}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Time Limit</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.itemName}</TableCell>
                <TableCell>{product.itemDescription}</TableCell>
                <TableCell>${product.itemPrice}</TableCell>
                <TableCell>
                  {product.timeLimit} {product.timeUnit}
                </TableCell>
                <TableCell>{new Date(product.expiryDate).toLocaleString()}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={product.isActive ? 'primary' : 'error'}
                    size="small"
                  >
                    {product.isActive ? 'Active' : 'Expired'}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" size="small">
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" size="small" sx={{ ml: 1 }}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductsTable;
