import Body from "./Body";
import RestCard from "./RestCard";
const Shimmer = () => {
    console.log("shimmer") 
  return (
    <div>
      <div className="filter">
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
      </div>
    </div>
  );
};
export default Shimmer;
