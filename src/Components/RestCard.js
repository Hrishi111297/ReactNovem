const RestCard = (props) => {
    console.log("RestCard") 
    const {restData}=props;
    const {name,sla,cuisines,avgRating,costForTwo,cloudinaryImageId}=restData?.info;
  return (
 
    <div className="rest-card">
      <img
        className="restLogo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      />
       <h3>{name}</h3>
     <h4>{cuisines.join(",")}</h4>
     <h4>{avgRating+" Rating"}</h4>
     <h4>{sla.deliveryTime+" Minutes"}</h4>
     <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestCard;
