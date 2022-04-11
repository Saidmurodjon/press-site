// import HeaderCard from "../components/cards/headerCard/headerCard";
import Navbar from "../components/navbar/navbar";
import Maincard from "../components/cards/mainCard/MainCard";
// import react from "react";
function Home() {
  return (
    <>
      <div className="container">
        <Navbar />

        <h1>Home page</h1>
        {/* <HeaderCard /> */}
        <div className="row justify-content-between">
          <Maincard />
        </div>
      </div>
    </>
  );
}
export default Home;
