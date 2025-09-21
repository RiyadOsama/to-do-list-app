import search from "../assets/images/404.gif";

function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", textShadow: "3px 3px 14px #000" }}
    >
      <img src={search} alt="4O4" />
      <div className="alert alert-danger display-3">Page Not Found</div>
    </div>
  );
}

export default NotFound;
