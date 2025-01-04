const RestCard = (props) => {
  console.log("RestCard");
  const { restData } = props;
  const { name, sla, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restData?.info;
  return (
    <div className="bg-slate-100 w-48  m-1 rounded px-5 py-1 shadow-lg group ">
      <div className="overflow-hidden rounded shadow-lg p-2">
        <img
          className="w-40 h-30 rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <h3 className="font-bold">{name}</h3>
      <h4 className="break-words ">{cuisines.join(",")}</h4>
      <h4>{avgRating + " Rating"}</h4>
      <h4>{sla.deliveryTime + " Minutes"}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestCard;
