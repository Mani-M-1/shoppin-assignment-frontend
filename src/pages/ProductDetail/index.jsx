import  { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import ProductGallery from '../../components/ProductGallery';
import Specifications from '../../components/Specifications';
import Pricing from '../../components/Pricing';
import AddToCartButton from '../../components/AddToCartButton';
import VariantSelector from '../../components/VariantSelector';
import './index.css';

const ProductDetail = () => {
  const { dispatch } = useContext(CartContext);
  
  // State to store selected size, case, and band
  const [selectedSize, setSelectedSize] = useState('41mm');
  const [selectedCase, setSelectedCase] = useState('Aluminum');
  const [selectedBand, setSelectedBand] = useState('Sport Band');

  // Handle adding to cart
  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: 1,
        name: 'Apple Watch Series 9',
        variant: { selectedSize, selectedCase, selectedBand },
        price: 399,
      },
    });
  };

  return (
    <div className="product-detail">
      <ProductGallery />
      <Specifications />
      <VariantSelector
        selectedSize={selectedSize}
        selectedCase={selectedCase}
        selectedBand={selectedBand}
        setSelectedSize={setSelectedSize}
        setSelectedCase={setSelectedCase}
        setSelectedBand={setSelectedBand}
      />
      <Pricing price={399} />
      <AddToCartButton onAdd={handleAddToCart} />
    </div>
  );
};

export default ProductDetail;
