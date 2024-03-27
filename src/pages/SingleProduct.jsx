import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { BiPurchaseTagAlt } from "react-icons/bi";
import products from "../data";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productID } = useParams();
  // console.log(productID)

  const singleProduct = products.find(
    (product) => product.id === parseInt(productID)
  );
  console.log(singleProduct);

  const { id, name, price, image, details } = singleProduct;
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>Product Title</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item active">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={"/products"}>Products</Link>
                  </li>
                  <li className="breadcrumb-item text-secondary">Product</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container content">
          <div className="row">
            <div className="col-lg-7">
              <img src={image} />
            </div>
            <div className="col-lg-5">
              <h2>{name}</h2>
              <p className="price">
                <strong>{price}</strong>
              </p>
              <p>{details}</p>
              <br />
              <div className="single-products-buttons d-flex gap-1">
                <Link
                  className="btn btn-danger btn-sm rounded-0 d-flex align-items-center gap-1"
                  onClick={() => navigate(-1)}
                >
                  <IoMdArrowBack /> Back
                </Link>
                <Link
                  className="btn btn-primary btn-sm rounded-0 d-flex align-items-center gap-1"
                  onClick={() => navigate(-1)}
                >
                  <IoIosSearch /> Navigate to Products
                </Link>
                <Link className="btn btn-success btn-sm rounded-0 d-flex align-items-center gap-1">
                  <BiPurchaseTagAlt /> Purchase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
