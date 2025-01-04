import Body from "./Body";
import RestCard from "./RestCard";
const Shimmer = () => {
  console.log("shimmer");
  return (
    <div>
      {/* <div className="filter">
        <button className="filter-btn"></button>
      </div>
      <div className="rest-container">
        <div className="rest-card">
          <div className="restLogo"></div>
        </div>
        <div className="rest-card">
          <div className="restLogo"></div>
        </div>
        <div className="rest-card">
          <div className="restLogo"></div>
        </div>
        <div className="rest-card">
          <div className="restLogo"></div>
        </div>
        <div className="rest-card">
          <div className="restLogo"></div>
        </div>
      </div> */}

      <div className="bg-slate-100 w-48  m-1 rounded px-5 py-1 shadow-lg group ">
        <div className="overflow-hidden rounded shadow-lg p-2">
          <img className="w-40 h-30 rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110" />
        </div>
      </div>
    </div>
  );
};
export default Shimmer;
