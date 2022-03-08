import axios from 'axios';

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "2b52c313b2msh26a780c5132d231p13a985jsne54b2cb597e7",
  },
};
const Restaurants = async () => {
    try{    
        const {data:{data}} = await axios.get(URL,options);
        return data;
    }catch(error){
        console.log(error);
    }
}
export default Restaurants;