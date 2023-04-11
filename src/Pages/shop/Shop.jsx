import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className='container-fluid'>
      <div className='shopTitle'>
        <h1>Enjoy shophing here!!!</h1>
      </div>
      <div className='products'>
        {/* from product.js loop all item and then mapped and wrapped the data in product again it as to be return data = {product} is used... */}
        {PRODUCTS.map((product) => (
          <Product data = {product}/>
        ))}
      </div>
    </div>

    // <Container gap={1}>
    //   <Row gap={2}>
    //     <Col>
    //       <Card css={{ $$cardColor: "$colors$primary" }}>
    //         <Card.Body>
    //           <Text h6 size={15} color="white" css={{ m: 1 }}>
    //             {/* from product.js loop all item and then mapped and wrapped the data in product again it as to be return data = {product} is used... */}
    //             {PRODUCTS.map((product) => (
    //               <Product data={product} />
    //             ))}
    //           </Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
};
