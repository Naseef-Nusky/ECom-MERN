import { useState,useReducer,useEffect } from "react";
import { Link } from "react-router-dom";
//import data from "../data";
import axios from 'axios'

const reducer=(state,action)=>{
  switch(action.type){
    case'FETCH_REQUEST':
      return{...state,loading:true};
    case'FETCH_SUCCESS':
      return{...state,product: action.payload, loading:false};
    case 'FETCH_FAIL':
      return{...state, loading: false, error: action.payload};
    default:
        return state;
  }
};

function HomeScreen  () {
  // const[{loading,error, products},dispatch]=useReducer(reducer,{
  //   products:[],
  //   loading:true,
  //   error:'',
  // });

  const[products,setProducts]=useState([]);
  useEffect(()=>{
    // const fetchData=async() =>{
    //   dispatch({type:'FETCH_REQUEST'});
    //   try{
    //     const result=await axios.get('/api/products');
    //     dispatch({type:'FETCH_SUCCESS',payload:result.data});
    //   }catch(err){
    //     dispatch({type:'FETCH_FAIL',payload: err.massage});
    //   }

      const fetchData=async() =>{
        
          const result=await axios.get('/api/products');
          setProducts(result.data);
        
        
     
     setProducts(result.data)
    };
    fetchData();
  },[]);
    return ( 
        <div>
          <h1>Featured Product</h1>
          <div className="products">
          {products.map((product)=>(
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name}/>
                </Link>
                <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
                </Link>
                <p>${product.price}</p>
                <button>Add to cart</button>
                </div>
            
              </div>
          
            ))
          }
          </div>
           
        </div>
     );
}
 
export default HomeScreen;