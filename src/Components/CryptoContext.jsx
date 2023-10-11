import { createContext, useLayoutEffect, useState } from "react";
export const cryptoContext = createContext({});
export const ContextProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState(null);
  const [coinData, setCoinData] = useState(null);
  const [searchedResult, setSearchedResult] = useState(null);
  const [searchCoins, setSearchCoins] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [currency, setCurrency] = useState("usd");
  const [sort, setSort] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [totalCoins, setTotalCoins] = useState(250);
  const [coinId, setCoinId] = useState("");
  const [marketChart, setMarketChart] = useState(null);
  const [day, setDay] = useState(7);
  const [favoriteCoins, setFavoriteCoins] = useState([]); // [{}]
  const [selectedCryptoId, setSelectedCryptoId] = useState(null); // creating a state to get the value of coin used for the modal
const addCoinToFavorites =(coinIndex)=>{
  setFavoriteCoins((prev)=>[...prev, coinIndex])
}
const removeCoinFromFavorites =(coinId)=>{
  setFavoriteCoins((prev)=>prev.filter((coin)=>coin.id !== coinId))
}
const isCoinInFavorites =(coinId)=>{
  return favoriteCoins.some((coin)=>coin.id === coinId)
}


  const getCryptoData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/list`
      )
        .then((res) => res.json())
        .then((data) => data);
      setTotalCoins(response.length);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${searchCoins}&order=${sort}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      )
        .then((res) => res.json())
        .then((data) => data);
      setCryptoData(response);
    } catch (error) {
      console.log(typeof error);
    }
  };
  const getChartDetails = async () => {
    try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${day}&interval=daily`
        ).then((res) => res.json().then((data) => data));
        setMarketChart(response);
        console.log(response);
      } catch (error) {
        console.log(typeof error);
      }
    }
    const getCoinData = async () => {
        try {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
          )
            .then((res) => res.json())
            .then((data) => data);
          setCoinData(response); // Update coinData with new data
          console.log(response);
        } catch (error) {
          console.log('Error:', error);
        }
      };
  const resetFunction = () => {
    setSearchCoins("");
    setPage(1);
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [searchCoins, currency, sort, perPage, page]);
  
  // Fetch chart data when coinId or currency changes
  useLayoutEffect(() => {
    getChartDetails();
  }, [coinId, currency, day]);
  
  // Fetch coin data when coinId or currency changes
  useLayoutEffect(() => {
    getCoinData(coinId);
  }, [coinId]);
  const getSearchedResult = async ({ query }) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((data) => data);
      setSearchedResult(response.coins);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const value = {
    cryptoData,
    setCryptoData,
    searchedResult,
    getSearchedResult,
    setSearchCoins,
    currency,
    setCurrency,
    sort,
    setSort,
    perPage,
    setPerPage,
    page,
    setPage,
    totalCoins,
    setTotalCoins,
    resetFunction,
    getCoinData,
    coinData,
    setCoinData,
    setCoinId,
    coinId,
    marketChart,
    setMarketChart,
    day,
    setDay,
    favoriteCoins,
    addCoinToFavorites,
    removeCoinFromFavorites,
    isCoinInFavorites,
    selectedCryptoId, 
    setSelectedCryptoId

  };
  return (
    <cryptoContext.Provider value={value}>{children}</cryptoContext.Provider>
  );
};
