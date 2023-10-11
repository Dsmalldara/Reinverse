import { createContext, useLayoutEffect } from "react";
import { useState } from "react";
export const TrendingContext = createContext({});
const CreateTrendContext =({children})=>{
    const [trendingCoins, setTrendingCoins] = useState(null);
    const getTrendingCoins =async()=>{
        try {
            const response = await fetch(
              `https://api.coingecko.com/api/v3/search/trending`
            ).then((res) => res.json().then((data) => data));
            const trendingCoins = response.coins || [];
           
            setTrendingCoins(trendingCoins);
            console.log(trendingCoins);
          } catch (error) {
            console.log(typeof error);
          }
        }
        useLayoutEffect(() => {
            getTrendingCoins();
          }, [])
       const value={
                trendingCoins,
                setTrendingCoins
            }
        return(
            <TrendingContext.Provider value={value}>
                {children}
            </TrendingContext.Provider>
        )
        
    }
export default CreateTrendContext;