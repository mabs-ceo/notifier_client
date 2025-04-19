import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1'; // Update with your API URL
// const API_URL = 'https://notifier-server-0rtz.onrender.com/api/v1'; // Update with your API URL

const API_TOKEN_URL = `${API_URL}/token/subscribe`;


export async function sendTokenToServer(token,timeSpend,honeypotValue) {
    try {

     
        const {data} = await axios.post(API_TOKEN_URL, { token,timeSpend,honeypotValue });

        return data.code
        
    } catch (error) {
   
       return error.code
    }
}
 export async function Unsubscribe(token) {
    try {
       
        const {data} = await axios.delete(`${API_URL}/token/unsubscribe`, { data:{token} });
        return data.code
    } catch (error) {
        return error.code
    }   

}

export async function getNotification(){
    try {
        const {data} = await axios.get(`${API_URL}/notifications/janaza`);

        return data
    } catch (error) {
        
        return 
    }       
}

export async function getPrayerTime(){
    const datasetId = "d_e81ea2337599b674c4f645c1af93e0dc";
const url = "https://data.gov.sg/api/action/datastore_search?resource_id=" + datasetId;

  try {
    const response = await axios.get(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(response);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}