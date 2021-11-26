import axios from 'axios';

const url = 'http://localhost:8000';


//user registration api
export const authenticateRegister = async(user) => {
    try{
        return await axios.post(`${url}/register`, user);

    }catch(err){
        console.log('error while calling register API: ', err);
    }

};


//user login api
export const authenticateLogin = async(user) => {
    try{
        return await axios.post(`${url}/login`, user);

    }catch(err){
        console.log('error while calling login API: ', err);
    }

};


//payment api
export const paymentUpdate = async(data) => {
    try{
        let response = await axios.post(`${url}/payment`, data);
        console.log(response.data);
        return response.data;

    }catch(err){
        console.log('error while calling payment API: ', err);
    }

};