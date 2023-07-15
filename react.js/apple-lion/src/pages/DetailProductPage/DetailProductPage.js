import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clayful from "clayful/client-js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; // import Productinfos from "./Sections/Productinfos";
import ProductInfos from "./Sections/ProductInfos";

function DetailProductPage() {
  const params = useParams();
  const productId = params.productId;
  const [item, setItem] = useState({});

  useEffect(() => {
    let Product = clayful.Product;
    let options = {};

    Product.get(productId, options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }

      let data = result.data;

      setItem(data);
      
    });
  }, []);

  console.log(productId);

  return (
    <div className="pageWrapper">
      <Row>
        <Col md>
          <div>
            <img
              style={{ width: "100%" }}
              src={item.thumbnail?.url}
              alt={item.name}
            />
          </div>
        </Col>
        <Col md>
          <ProductInfos detail={item} />
        </Col>
      </Row>
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
    </div>
  );
}

export default DetailProductPage;
