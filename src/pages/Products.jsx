import { Link } from "react-router-dom";
import products from "../data";
import { useState } from "react";

const Products = () => {
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>Products</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item active">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item text-secondary">Products</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container content">
          <div className="row products-row">
            {products.map((product) => {
              // console.log(product);
              const { id, image, name, details, price } = product;
              return (
                <div key={id} className="col-lg-4">
                  <div className="card">
                    <div className="img-wrap">
                      <img src={image} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{details}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          Price: <strong>{price}</strong>
                        </span>
                        <Link
                          to={`/products/${id}`}
                          className="btn btn-primary btn-sm"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
