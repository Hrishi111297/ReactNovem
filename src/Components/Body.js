import { useState, useEffect } from "react";
import { fetchDataUrl } from "../Utils/dataList";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import useFetchData from "../Utils/customHooks/useFetchData";


const Body = () => {
  let [restList, setRestList] = useState([]);
  let [searchData, setsearchData] = useState("");
  let [RederList, setRenderList] = useState([]);

  const  data  = useFetchData();
  useEffect(() => {
    setRenderList(data);
    setRestList(data);
  }, [data]);

  return RederList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="tool">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterList = restList.filter((r) => r.info.avgRating > 4.3);
              console.log(filterList);
              setRenderList(filterList);
            }}
          >
            Filter Rating
          </button>
        </div>
        <div className="searchBox">
          <input
            type="text"
            value={searchData}
            onChange={(e) => {
              setsearchData(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
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
      <div className="rest-container">
        {RederList.map((data) => (
          <RestCard key={data.info.id} restData={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
