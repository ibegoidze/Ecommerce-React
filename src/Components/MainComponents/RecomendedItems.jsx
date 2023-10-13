import React from "react";
import "./RecomendedItems.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../../Store/Products/index";
import { Link } from "react-router-dom";

const RecomendedItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsData()); // 5
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);
  const RIproducts = products.slice(0, 10);
  return (
    <div className="RImain">
      <div className="RIcontainer">
        <div className="RIbox">
          {RIproducts.map((item) => {
            return (
              <li key={item.id}>
                <Link className="RIimg" to={`/Detail/${item.id}`}>
                  <img src={item.images} alt="product image" />
                  </Link>
                <div className="RIprice">${item.price}</div>
                <div className="RIdescription">
                  {item.description.slice(0, 30)}<Link to={`/Detail/${item.id}`}>...see more</Link>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecomendedItems;
