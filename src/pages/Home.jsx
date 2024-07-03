import Navbar from "./Navbar";


const Home = () => {
  return (
    <div>
        <Navbar/>
      <h1>Welcome to Vehicle Care Platform</h1>
      <div>
        <img
          src="https://via.placeholder.com/300x200?text=Vehicle+Care+Image+1"
          alt="Vehicle Care 1"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Vehicle+Care+Image+2"
          alt="Vehicle Care 2"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Vehicle+Care+Image+3"
          alt="Vehicle Care 3"
        />
      </div>
      <p>
        We provide top-notch services to keep your vehicle in perfect condition.
        From regular maintenance to emergency repairs, We got you covered.
      </p>
    </div>
  );
};

export default Home;
