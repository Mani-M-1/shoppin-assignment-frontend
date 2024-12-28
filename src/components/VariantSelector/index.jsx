import { useState } from 'react';
import './index.css';


const VariantSelector = ({ selectedSize, selectedCase, selectedBand, setSelectedSize, setSelectedCase, setSelectedBand }) => {

  const [isVisible, setIsVisible] = useState({size: false, case: false, band: false});


  const handleVisibility = (type) => {
    if (type === 'Size') {
      setIsVisible({size: true, case: false, band: false})
    }
    if (type === 'Case') {
      setIsVisible({size: false, case: true, band: false})
    }
    if (type === 'Band') {
      setIsVisible({size: false, case: false, band: true})
    }
  }


  return (
    <div className="variant-selector">
      <button className="variant-button" onClick={() => handleVisibility('Size')}>
        Size
      </button>
      <button className="variant-button" onClick={() => handleVisibility('Case')}>
        Case
      </button>
      <button className="variant-button" onClick={() => handleVisibility('Band')}>
        Band
      </button>

      {
        isVisible.size
        &&
        <div className="options">
          <h4>Select Size</h4>
          <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
            <option value="41mm">41mm</option>
            <option value="45mm">45mm</option>
          </select>
        </div>

}

      {
        isVisible.case
        &&
        <div className="options">
          <h4>Select Case</h4>
          <select value={selectedCase} onChange={e => setSelectedCase(e.target.value)}>
            <option value="Aluminum">Aluminum</option>
            <option value="Stainless Steel">Stainless Steel</option>
          </select>
        </div>
      }


      {
        isVisible.band
        &&
        <div className="options">
          <h4>Select Band</h4>
          <select value={selectedBand} onChange={e => setSelectedBand(e.target.value)}>
            <option value="Sport Band">Sport Band</option>
            <option value="Leather Band">Leather Band</option>
            <option value="Milanese Loop">Milanese Loop</option>
          </select>
        </div>
      }
    </div>
  );
};


export default VariantSelector;
