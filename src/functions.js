import axios from 'axios';

// const API_URL = 'http://localhost:3000/api/v1'; // Update with your API URL
const API_URL = 'https://notifier-server-0rtz.onrender.com/api/v1'; // Update with your API URL

const API_TOKEN_URL = `${API_URL}/token/subscribe`;


export async function sendTokenToServer(token) {
    try {
        
        console.log('Token sending to server:');
     
        const response = await axios.post(API_TOKEN_URL, { token });
     
        return response
        
    } catch (error) {
       
    }
}
 export async function Unsubscribe(token) {
    try {
       
        const response = await axios.delete(`${API_URL}/token/unsubscribe`, { data:{token} });
        return response.status
    } catch (error) {
       
    }   

}

export async function getNotification(){
    try {
        const response = await axios.get(`${API_URL}/notifications/janaza`);
   
        return response.data
    } catch (error) {
        console.error('Error sending token to server:', error);
    }       
}