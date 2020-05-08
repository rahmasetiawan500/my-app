import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // const userLogged = "Zuma";
  // const userLoggedJSX = <strong> Menuju Masa Depan</strong>;
  // let a = 9;
  // let b = 3;

  return (
    <div className="Parentbox">

    <FotoProduk />
    <ProdukInfo isDiscount = "comming" name= "Ubud, Bali" category = "Indonesia" />
    <ReviewItems />
     { 
     /* 
     a + b / 1 
     {userLogged}
     {userLoggedJSX} */
     }
    </div>
  );
}

function ReviewItems() {
  const users = [
    {
        "id": 1,
        "name": "Masayoshi",
        "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
        "photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        "id": 2,
        "name": "Shayna",
        "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
        "photo": "https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        "id": 3,
        "name": "Alqowy",
        "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
        "photo": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
];

const listReviewItems = users.map((itemReview) =>
  <div className="Item">
  <img src= {itemReview.photo} />
  <div className="User">

<h3>{itemReview.name}</h3>
  <p>{itemReview.review}</p>

  </div>
  </div>
  );

return(

  <div className="Review-box">
  <h2>Reviews</h2>
  {listReviewItems}

</div>
);

}

function FotoProduk() {
  return (
  <div className="Foto">
  <img src="popular1.png" />
  </div>

  );

}

function CheckDiscount(props) {
  const { isDiscount }= props;
if (isDiscount == "yes") {
  return (
    <p>Diskon 50% dapatkan sekarang</p>
  );
}  else if (isDiscount == "comming") {
  return(
    <p>Diskon SEGERA </p>
  );
} else {
return (
    <p>Tidak Ada Diskon</p>
    );
}
  
}

function ProdukInfo(props) {
  const {category, name, isDiscount} = props ;
  const benefits = ["Makanan Khas Bali", "Terdapat Wifi", "Banyak Akses dituju"];
  const listItems = benefits.map((benefits) =>
  <li>{benefits}</li>
);
  return (
    
    <div className="Deskripsi">
    <p className="Cate">{category}</p>
    <h1 className="Title">{name}</h1>
    <p className="Price">IDR 25.678.677</p>
    <CheckDiscount isDiscount={isDiscount} />
    <p className="Info">
    Aliqua et laboris adipisicing adipisicing sint est adipisicing tempor. Aliqua do in nulla ullamco proident. Nisi voluptate qui sunt elit eu pariatur sint sint ex ipsum. Labore sint ullamco officia commodo est. Voluptate eu et voluptate pariatur in. Lorem duis aliqua aliquip incididunt cillum amet.
    </p>
    <ul>
    {listItems}
    </ul>
    <a onClick={(e) =>TambahJourney(name, e)}>Add to Journey</a>
    </div>
    

      );
  
}

function TambahJourney(e){
  return console.log("membeli....." + e);
}

export default App;
