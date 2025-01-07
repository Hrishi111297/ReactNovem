import React from "react";
import ReactModal from "react-modal";
import Lottie from "lottie-react";
import PropTypes from "prop-types";
import LoaderLottie from "../Utils/customHooks/CommonLotties/hrmsLoader.json";

const Loader = ({ loading }) => {
  const loaderStyle = {
    width: "400px", // Adjust size of the loader
    margin: "0 auto",
  };

  return (
    <ReactModal
      isOpen={loading}
      contentLabel="Loading"
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center bg-transparent"
      overlayClassName="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
      shouldCloseOnOverlayClick={false}
    >
      <Lottie
        animationData={LoaderLottie}
        style={loaderStyle}
      />
    </ReactModal>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
