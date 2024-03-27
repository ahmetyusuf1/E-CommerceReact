import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="about">
      <div className="pg-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
            <h1>About</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                <li className="breadcrumb-item active">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item text-secondary">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-4">
            <h2>What We Do?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores officia praesentium ipsam in nisi facilis, error eius
              neque aut itaque aspernatur repellat odio ipsum cupiditate soluta?
              Provident neque amet dolorum perspiciatis perferendis natus
              asperiores veritatis? Et porro ut voluptate aliquid iusto fugit
              est placeat praesentium rem soluta dolor maiores natus repudiandae
              at atque temporibus cum, quo cumque commodi reprehenderit
              officiis. Voluptate, error praesentium.
            </p>
          </div>
          <div className="col-lg-4">
            <h2>Our Mission</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores officia praesentium ipsam in nisi facilis, error eius
              neque aut itaque aspernatur repellat odio ipsum cupiditate soluta?
              Provident neque amet dolorum perspiciatis perferendis natus
              asperiores veritatis? Et porro ut voluptate aliquid iusto fugit
              est placeat praesentium rem soluta dolor maiores natus repudiandae
              at atque temporibus cum, quo cumque commodi reprehenderit
              officiis. Voluptate, error praesentium.
            </p>
          </div>
          <div className="col-lg-4">
            <h2>Why Choose Us?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores officia praesentium ipsam in nisi facilis, error eius
              neque aut itaque aspernatur repellat odio ipsum cupiditate soluta?
              Provident neque amet dolorum perspiciatis perferendis natus
              asperiores veritatis? Et porro ut voluptate aliquid iusto fugit
              est placeat praesentium rem soluta dolor maiores natus repudiandae
              at atque temporibus cum, quo cumque commodi reprehenderit
              officiis. Voluptate, error praesentium.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
