import axios from "axios";

const API_URL = "/data/Product.json"; 

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.product;
  } catch (error) {
    throw error.response?.data || "Error fetching products";
  }
};


export const fetchUsers = async()=>{
  try{
    const response = await axios.get(API_URL)
    return response.data.users;
  }
  catch(error){
    throw error.response?.data || "Error fetching users";
  }
}

 export default { fetchProducts , fetchUsers};
