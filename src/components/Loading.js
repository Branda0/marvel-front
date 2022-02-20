import loadingLogo from "../assets/img/logo-M.png";

const Loading = () => {
  return (
    <div className="loading-screen">
      <img src={loadingLogo} alt="loading" />
      <span>LOADING</span>
    </div>
  );
};

export default Loading;
