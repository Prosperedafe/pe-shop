import "./home.css";
import Image from "../../assets/Image.png";
import Time from "../../assets/time.png";
import Location from "../../assets/location.png";

const Home = () => {
  return (
    <section className="home">
      <img className="intro__image" src={Image} alt="masters" />
      <div>
        <h3 className="fade-text" title="exhibition">
          EXHIBITION
        </h3>
        <h1>
          MASTERS
          <br /> OLD AND
          <br /> NEW
        </h1>
        <time>APRIL 15 - SEPTEMBER 20</time>
        <h3>FLOOR 5</h3>
        <button>Plan Your Visit</button>
        <section className="date">
          <div>
            <img src={Location} alt="location" />

            <p>
              151 3rd St
              <br /> San Francisco, CA 94103
            </p>
          </div>
          <div>
            <img src={Time} alt="time" />

            <p>
              Open today
              <br /> 10:00am - 5:30pm
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Home;
