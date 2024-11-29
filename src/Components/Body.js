import { useState, useEffect } from "react";
import { fetchDataUrl } from "../Utils/dataList";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import useFetchData from "../Utils/customHooks/useFetchData";

const Body = () => {
  let [restList, setRestList] = useState([]);
  let [searchData, setsearchData] = useState("");
  let [RederList, setRenderList] = useState([]);

  const data = useFetchData();
  useEffect(() => {
    setRenderList(data);
    setRestList(data);
  }, [data]);

  return RederList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-20">
      <div className="flex justify-between py-2">
        <div className="flex ">
          <button
            className="bg-gray-200 w-40 h-10 rounded-lg  "
            onClick={() => {
              const filterList = restList.filter((r) => r.info.avgRating > 4.3);
              console.log(filterList);
              setRenderList(filterList);
            }}
          >
            Filter Rating
          </button>
        </div>
        <div className="">
          <input
            type="text"
            className="mx-1 border-2 border-lime-950 w-40 h-8 rounded-lg "
            value={searchData}
            onChange={(e) => {
              setsearchData(e.target.value);
            }}
          ></input>
          <button
            className="bg-gray-200 w-40 h-8 rounded-lg  "
            onClick={() => {
              let SerchedList = restList.filter((res) =>
                res.info.name.toLowerCase().includes(searchData.toLowerCase())
              );
              setRenderList(SerchedList);
            }}
          >
            Search
          </button>
        </div>{" "}
      </div>
      <div className=" flex flex-wrap">
        {RederList.map((data) => (
          <RestCard key={data.info.id} restData={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
