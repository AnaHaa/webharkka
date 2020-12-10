import axios from 'axios';
// @ Hong Ly data
const url = 'https://corona.lmao.ninja/v2/all';

// Fetch the data from the url using axios then return the data
export const fetchData = async ()  => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (err) {
        console.log(err);
    }
}

export default fetchData;