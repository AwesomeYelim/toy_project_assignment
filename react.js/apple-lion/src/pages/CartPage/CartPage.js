import React, { useEffect, useState } from "react";
import clayful from "clayful/client-js";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import CartItem from "./Sections/CartItem";

function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  let Cart = clayful.Cart;

  let options = {
    customer: localStorage.getItem("accessToken"),
  };

  useEffect(() => {
    Cart.getForMe({}, options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }
      let data = result.data;
      console.log("data", data);
      setCart(data.cart);
    });
  }, []);

  const updateItemData = (itemId, quantity) => {
    let payload = {
      quantity,
    };

    Cart.updateItemForMe(itemId, payload, options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }
    });
  };

  const buttonHandler = (type, index) => {
    console.log('cart', {...cart})
    let newCart = { ...cart };

    if (type === "plus") {

    const price = cart.items[index].price.original.raw / cart.items[index].quantity.raw;
      // 해당 아이템 가격 변경
      newCart.items[index].price.original.raw += price;
      // 전체 아이템 가격 변경
      newCart.total.amount.raw += price;
      // 해당 아이템 갯수 변경
      newCart.items[index].quantity.raw += 1;

    } else {
      if (newCart.items[index].quantity.raw === 1) return;

      const price = cart.items[index].price.original.raw / cart.items[index].quantity.raw;
      newCart.total.amount.raw -= price ;
      newCart.items[index].price.original.raw -= price;
      newCart.items[index].quantity.raw -= 1;
    }
    updateItemData(newCart.items[index]._id, newCart.items[index].quantity.raw);
    setCart(newCart);
  };

const removeItemFromState = (itemId, price) => {
    let newCart = {...cart};
    let filteredItems = newCart.items.filter(item => item._id !== itemId);
    newCart.items = filteredItems;
    newCart.total.amount.raw = newCart.total.amount.raw - price;
    setCart(newCart);
}

  const deleteItemHandler = (itemId, price) => {
    Cart.deleteItemForMe(itemId, options, function(err, result) {

        if (err) {
            // Error case
            console.log(err.code);
            return;
        }
        removeItemFromState(itemId, price)
    
    });
  }

  const items = cart.items;
  return (
    <div className="pageWrapper">
      <div className="shopping-cart">
        <h1 className="title">장바구니</h1>

        <div className="shopping-cart-body" style={{ minHeight: 100 }}>
          {items && items.length > 0 ? (
            items.map((item, index) => {
              return (
                <CartItem
                  key={item._id}
                  item={item}
                  index={index}
                  deleteItemHandler={(itemId, price) => deleteItemHandler(itemId, price)}
                  buttonHandler={(type, index) => buttonHandler(type, index)}
                />
              );
            })
          ) : (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
              카트에 상품이 하나도 없습니다.
            </p>
          )}
        </div>

        {items && items.length > 0 && (
          <div className="bottom">
            <span className="total-price">
              총 금액: ₩ {cart.total?.amount.raw}
            </span>
            <button
              style={{ float: "right", padding: "4px 8px" }}
              onClick={() => navigate("/payment")}
            >
              결제
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
