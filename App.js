import Select from 'react-select'
import React, { useState } from "react";
import Counter from "./Counter";
import Product from './Components/Product';
import data from './data';
import "./CounterStyles.css";

function App() {
 
  const { products } = data;
  const standard=269.99
  const featured=322.99
  const premium=394.99
  const featured_Sime=299.99
  const featured_Mah=309.99
  const premium_Igb=379.99
  const premium_Mah=389.99

  const [total_S, setTotal_S] = useState(0);
  const [total_F, setTotal_F] = useState(0);
  const [total_P, setTotal_P] = useState(0);

  const temp_total_S_UEM=(total_S%3)+(total_S-total_S%3)*2/3
  const temp_total_S_Mah=(total_S%5)+(total_S-total_S%5)*4/5
 
  
 // -------------------------------------
 var companyList =[
  {
      id:1,
      label:"Default"
  },
  {
      id:2,
      label:"UEM Sunrise"
  },
  {
      id:3,
      label:"Sime Darby Property Bhd."
  },
  {
      id:4,
      label:"IGB Berhad"
  },
  {
      id:5,
      label:"Mah Sing Group"
  }
 ];
 const [result,selValue]=useState(companyList.id);
 const selHandler = e =>
 {
  selValue(e.id);
 }

 // -------------------------------------
 // =====================================
  const incrementTotal_S = () => setTotal_S((currentTotal_S) => currentTotal_S + 1);
  const incrementTotal_F = () => setTotal_F((currentTotal_F) => currentTotal_F + 1);
  const incrementTotal_P = () => setTotal_P((currentTotal_P) => currentTotal_P + 1);
 // =====================================


 
 function Child ({dataParentToChild}){
  return(
      <div>
        <a href="#/">

          <div>
            <b>{result===1 ? <div>
              <h2 style={{textAlign: "left"}}> Total Price: RM {(total_S*standard+total_F*featured+total_P*premium).toFixed(2)} </h2> 
               </div>: null }</b>
          </div>

          <div>
            <b>{result===2 ? <div>
              <h2 style={{textAlign: "left"}}>Total Price: RM {(temp_total_S_UEM*standard+total_F*featured+total_P*premium).toFixed(2)} </h2> 
               </div>: null }</b>
          </div>

          <div>
            <b>{result===3 ? <div>
              <h2 style={{textAlign: "left"}}> Total Price: RM {(total_S*standard+total_F*featured_Sime+total_P*premium).toFixed(2)} </h2> 
               </div>: null }</b>
          </div>

          <div>
            <b>{result===4 && total_P>=4 ? <div>
              <h2 style={{textAlign: "left"}}> Total Price: RM {(total_S*standard+total_F*featured+total_P*premium_Igb).toFixed(2)} </h2> 
               </div>: <div>
              
                <b> {result===4 && (total_S!==0 || total_F!==0 || total_P!==0) ? <div>
                   <h2 style={{textAlign: "left"}}> Total Price: RM {(total_S*standard+total_F*featured+total_P*premium).toFixed(2)} </h2>
                   </div> :null}
                   </b>
                
                </div>
              }</b>
          </div>

          <div>
            <b>{result===5 && total_P>=3 ? <div>
              <h2 style={{textAlign: "left"}}> Total Price: RM {(temp_total_S_Mah*standard+total_F*featured_Mah+total_P*premium_Mah).toFixed(2)} </h2> 
               </div>: <div>
               <b> {result===5 && (total_S!==0 || total_F!==0 || total_P!==0) ? <div>
               <h2 style={{textAlign: "left"}}> Total Price: RM {(temp_total_S_Mah*standard+total_F*featured_Mah+total_P*premium).toFixed(2)} </h2>
               </div> :null}
                   </b>
                
                </div>
               }</b>
          </div>

        </a>
      </div>
  )
 }


  return ( 
    //  -----------------------Header-------------------- 
    <div className="App">
        <header className="block row center">
         <div>
           <a href="#/"> <h1>InstaHome Add Shop</h1> </a>
         </div>
        </header> 
       {/* --------------------Selecting the Company----- */}
      <div className="block col-2">
        <a href="#/"> <h2 style={{textAlign: "left"}}>Please select your company</h2> </a>  
        <Select options={companyList} onChange={selHandler}/> 
      </div> 
      {/* ---------------------Selecting the Number of Desired Ads----- */}    
      <div className="block col-2">
        <a href="#/">  <h2 style={{textAlign: "left"}}>Please select the number of your desired ads</h2>   </a>
  
        <div> 
         <div className="App"> 
           <div className="CountersContainer">   
            <Counter onClick={incrementTotal_S} />
            <Counter onClick={incrementTotal_F} />
            <Counter onClick={incrementTotal_P} />
          </div>    
        </div> 
       </div>
 
       <div className="row">  
         {products.map((product) => (<Product key={product.id} product={product}></Product>))}
       </div>

      </div>  
      {/* ---------------------Shopping Cart----- */} 
      <div className="block col-2">
      <a href="#/"> <h2 style={{textAlign: "left"}}> Shopping Cart </h2>  </a>
          <Child dataParentToChild ></Child>
      </div> 
    
      <div className="CheckoutBox">
          <button  onClick={() => alert('Thank you for your shopping!')}>  Checkout  </button>
      </div> 
    </div> 
  );
}
export default App ;