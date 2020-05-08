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
    <ProdukInfo category = "Indonesia" />

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


function ProdukInfo(props) {
  const {category} = props ;
  return (
    
    <div className="Deskripsi">
    <p className="Cate">{category}</p>
    <h1 className="Title">Ubud, Bali</h1>
    <p className="Price">IDR 25.678.677</p>
    <p className="Info">
    Aliqua et laboris adipisicing adipisicing sint est adipisicing tempor. Aliqua do in nulla ullamco proident. Nisi voluptate qui sunt elit eu pariatur sint sint ex ipsum. Labore sint ullamco officia commodo est. Voluptate eu et voluptate pariatur in. Lorem duis aliqua aliquip incididunt cillum amet.
    </p>
    </div>

      );
  
}

export default App;
