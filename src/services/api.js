import axios from "axios";

const API_BASE = "https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3";

export const fetchBitcoinPrice = async () => {
    try {
      const response = await axios.get(
        `${API_BASE}/simple/price`,
        {
          params: {
            ids: "bitcoin",
            vs_currencies: "inr,usd",
            include_24hr_change: true,
          },
        }
      );
  
      // Ensure the response structure is valid
      if (response.data && response.data.bitcoin) {
        console.log("Bitcoin Price Data:", response.data.bitcoin); // Debug the API response
        return response.data.bitcoin;
      } else {
        console.error("Unexpected API response format:", response.data);
        return null; // Return null if data is invalid
      }
    } catch (error) {
      console.error("Error fetching Bitcoin price:", error.message);
      return null; // Return null in case of an error
    }
  };

export const fetchTrendingCoins = async () => {
    try {
      const response = await axios.get(`${API_BASE}/search/trending`);
      
      // Check if the response contains the expected structure
      if (response.data && Array.isArray(response.data.coins)) {
        console.log("Trending Coins API Response:", response.data.coins); // Debug the response
        return response.data.coins; // Return the coins array if valid
      } else {
        console.error("Unexpected API response format:", response.data);
        return []; // Return an empty array if the response is invalid
      }
    } catch (error) {
      console.error("Error fetching trending coins:", error.message);
      return []; // Return an empty array in case of an error
    }
  };

export const fetchCoinDetails = async (id) => {
  const response = await axios.get(`${API_BASE}/coins/${id}`);
  return response.data;
};
