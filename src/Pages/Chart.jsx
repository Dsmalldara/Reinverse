import React from "react";
import { useContext } from "react";
import { cryptoContext } from "../Components/CryptoContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

function CustomTooltip({ active, payload, label }) {
  const { currency } = useContext(cryptoContext);
  if (active && payload && payload[0]) {
    return (
      <div className="custom-tooltip">
        <p className="label text-[#89c5be] text-[1rem] font-merryweather font-bold">{`${label} : ${new Intl.NumberFormat(
          "en-US",
          {
            style: "currency",
            currency: currency,
            maximumFractionDigits: 3,
          }
        ).format(payload[0]?.value)}`}</p>
      </div>
    );
  }
  return null;
}
const RenderLineChart = ({ data, dataType }) => {
  const { currency } = useContext(cryptoContext);
  return (
    <ResponsiveContainer height="80%" width="90%">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={dataType}
          stroke="#14ffec"
          strokeWidth={1}
        />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={dataType} hide domain={["auto", "auto"]} />
        <Tooltip
          content={CustomTooltip}
          cursor={false}
          currency={currency}
          wrapperStyle={{ outline: "none" }}
        />
        <CartesianGrid stroke="#4d4c4c" />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
import { useState } from "react";
const Chart = () => {
    const [dataType, setDataType] = useState('prices')
    const { marketChart, currency, day, setDay } = useContext(cryptoContext);
    const convertedData = marketChart[dataType]?.map((item) => {
        return {
          date: new Date(item[0]).toLocaleDateString("en-US"),
          [dataType]: item[1],
        };
      });
        console.log(marketChart[dataType]);
  console.log(convertedData);
  return (
  <div className=" w-full  h-[100%]">
      <div className="w-full h-[75%]">
      {RenderLineChart({ data: convertedData, currency: currency, dataType: dataType })}
    </div>
    <div className="flex  ">
    <div className="mt-[-3rem] text-sm items-center justify-center flex w-[90%] space-x-[1.2rem]">
        <div>
            <button onClick={() => setDataType('prices')} className={
                ` text-creamyWhite px-2 py-1 text-[0.7rem] rounded-md  ${dataType === 'prices' ? 'bg-[#14ffec] text-slate-900' : ' text-creamyWhite bg-charcoalGray'}`
            }
            
            >Prices</button>
        </div>
        <div>
            <button onClick={() => setDataType('market_caps')} className={
                ` text-creamyWhite px-2 py-1 text-[0.7rem] rounded-md  ${dataType === 'market_caps' ? 'bg-[#14ffec] text-slate-900' : ' text-creamyWhite bg-charcoalGray'}`
            }
            
            >Market Caps</button>
     </div>
        <div className="md:block hidden">
                <button onClick={() => setDataType('total_volumes')} className={
                    ` text-creamyWhite px-2 py-1 text-[0.7rem] rounded-md  ${dataType === 'total_volumes' ? 'bg-[#14ffec] text-slate-900': ' text-creamyWhite bg-charcoalGray' }`
                }
                
                >Total Volumes</button>
  </div>
        </div>
        <div className="h-[3px] w-[4rem] rounded bg-cyan1-1 mt-[-1.8rem] ml-2 mr-2">

        </div>
        <div className="flex   mt-[-2.6rem] gap-[0.7rem]">
            <span className="ml-[1rem]">
                <button  onClick={()=>{setDay(7)}}     className={   ` px-3 py-1 text-sm rounded-md ${day === 7 ? 'bg-[#14ffec] text-slate-900' : ' text-creamyWhite bg-charcoalGray'}`}>
                    7d
                </button>
                </span>
                <span>
                <button onClick={()=>{setDay(14)}}   className={   `  px-3 py-1 text-sm rounded-md ${day === 14 ? 'bg-[#14ffec] text-slate-900' : ' text-creamyWhite bg-charcoalGray'}`}>
                    14d
                </button>
            </span>
            <span className="md:block hidden">
                <button onClick={()=>{setDay(30)}}   className={   `px-3 py-1 text-sm rounded-md ${day === 30 ? 'bg-[#14ffec] text-slate-900' : ' text-creamyWhite bg-charcoalGray'}`}>
                    30d
                </button>
            </span>
        </div>
    </div>
    </div>
  );
};

export default Chart;
