import React from "react";
import "../Style/BrandMarquee.css"; 

const brands = [
  { id: 1, name: "Estée Lauder", logo: "https://logos-world.net/wp-content/uploads/2020/01/Estee-Lauder-Logo-History.jpg" },
  { id: 2, name: "Carolina Herrera", logo: "https://m.media-amazon.com/images/I/51xW1E7gMxL._AC_UF1000,1000_QL80_.jpg" },
  { id: 3, name: "Clinique", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vQV4_DrJV0IfY29fzsCmRCuupD4agzO9ag&s" },
  { id: 4, name: "Laneige", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qAcgAe0gC7jMr0IAwgX129h9Z2obozR9xw&s" },
  { id: 5, name: "MAC", logo: "https://cld.accentuate.io/270298677333/1690379353799/ELCS_1163748679_PP_MAC_ELYS_BRAND_REFRESH_1400x600_V2.jpg?v=1690379353800&options=w_768" },
  { id: 6, name: "Chanel", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMK3v8oujSADCmWPz9faI1pc7_R3QBoXO9Q&s" },
  { id: 1, name: "Estée Lauder", logo: "https://logos-world.net/wp-content/uploads/2020/01/Estee-Lauder-Logo-History.jpg" },
  { id: 2, name: "Carolina Herrera", logo: "https://m.media-amazon.com/images/I/51xW1E7gMxL._AC_UF1000,1000_QL80_.jpg" },
  { id: 3, name: "Clinique", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vQV4_DrJV0IfY29fzsCmRCuupD4agzO9ag&s" },
  { id: 4, name: "Laneige", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qAcgAe0gC7jMr0IAwgX129h9Z2obozR9xw&s" },
  { id: 5, name: "MAC", logo: "https://cld.accentuate.io/270298677333/1690379353799/ELCS_1163748679_PP_MAC_ELYS_BRAND_REFRESH_1400x600_V2.jpg?v=1690379353800&options=w_768" },
  { id: 6, name: "Chanel", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMK3v8oujSADCmWPz9faI1pc7_R3QBoXO9Q&s" },
  { id: 1, name: "Estée Lauder", logo: "https://logos-world.net/wp-content/uploads/2020/01/Estee-Lauder-Logo-History.jpg" },
  { id: 2, name: "Carolina Herrera", logo: "https://m.media-amazon.com/images/I/51xW1E7gMxL._AC_UF1000,1000_QL80_.jpg" },
  { id: 3, name: "Clinique", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vQV4_DrJV0IfY29fzsCmRCuupD4agzO9ag&s" },
  { id: 4, name: "Laneige", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qAcgAe0gC7jMr0IAwgX129h9Z2obozR9xw&s" },
  { id: 5, name: "MAC", logo: "https://cld.accentuate.io/270298677333/1690379353799/ELCS_1163748679_PP_MAC_ELYS_BRAND_REFRESH_1400x600_V2.jpg?v=1690379353800&options=w_768" },
  { id: 6, name: "Chanel", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMK3v8oujSADCmWPz9faI1pc7_R3QBoXO9Q&s" },
];

const BrandMarquee = () => {
  return (
    <div className="marquee-container">
    <div className="marquee">
      <div className="marquee-inner">
        {brands.concat(brands).map((brand, index) => (
          <div key={index} className="marquee-item">
            <img src={brand.logo} alt={brand.name} className="brand-logo" />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default BrandMarquee;
