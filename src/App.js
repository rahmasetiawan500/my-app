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

     { 
     /* 
     a + b / 1 
     {userLogged}
     {userLoggedJSX} */
     }
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
