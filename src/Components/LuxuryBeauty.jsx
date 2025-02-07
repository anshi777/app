import React from "react";

const products = [
  {
    id: 1,
    name: "ESTÉE LAUDER",
    discount: "Up To 25% Off",
    offer: "Buy 2 Get 1 Free",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3aJuSOBWo9EWZJtgUdNdmU0g6PPpu2CuLQ&s"
  },
  {
    id: 2,
    name: "CAROLINA HERRERA",
    discount: "Up To 15% Off",
    offer: "Free Gift Worth ₹3000 On ₹6500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFZqrcjJ1repgyaQqUIPGAruwP7o7fURZQPz29IKJFz2NDVfKj4qCl86BzwtlpN77aoU&usqp=CAU",
  },
  {
    id: 3,
    name: "CLINIQUE",
    discount: "Up To 25% Off",
    offer: "Buy 2 Get 1 Free",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwwpSf-2oYy3-twZbZ1caYItecc3TdyCl5g&s",
  },
  {
    id: 4,
    name: "LANEIGE",
    discount: "Up To 30% Off",
    offer: "Free Gift On All Orders",
    image: "https://storage.googleapis.com/kaggle-datasets-images/1556036/2563733/9759711e40a3773735eb582af7c30e98/dataset-card.png?t=2021-08-27-14-41-10",
  },
  {
    id: 5,
    name: "MAC",
    discount: "Up To 25% Off",
    offer: "Buy 2 Get 1 Free",
    image: "https://images-static.nykaa.com/uploads/a63e79b0-c79a-4a83-a324-30ade1202bd7.jpg?tr=cm-pad_resize,w-600",
  },
];

const LuxuryBeauty = () => {
  return (
    <div className="container mt-5" >
      <h2 className="text-center mb-4">Luxury Beauty Worth Falling For</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-2 mx-3">
            <div className="card text-center border-0 shadow-lg">
              <div className="pink-bg p-3 rounded-top">
                <img src={product.image} className="card-img-top" alt={product.name} />
              </div>
              <div className="card-body p-2">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-danger fw-bold">{product.discount}</p>
                <p className="text-muted">{product.offer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryBeauty;
