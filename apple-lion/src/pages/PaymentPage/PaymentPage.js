import React, { useEffect, useState } from "react";
import clayful from "clayful/client-js";
import "./PaymentPage.css";
import { useNavigate } from "react-router-dom";
import PostCodeModal from "../../components/PostCodeModal";

var options = {
  customer: localStorage.getItem("accessToken"),
};
var Cart = clayful.Cart;

function PaymentPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const [paymentMethods, setPaymentMethods] = useState([]);

  const [recvUserInfo, setRecvUserInfo] = useState({
    mobile: "",
    full: "",
  });

  const [sendUserInfo, setSendUserInfo] = useState({
    mobile: "",
    full: "",
  });

  const [address, setAddress] = useState({
    postCode: "",
    state: "",
    city: "",
    address1: "",
    address2: "",
    country: "",
  });
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    getCartData();
    getPaymentData();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getPaymentData = () => {
    let PaymentMethod = clayful.PaymentMethod;

    PaymentMethod.list({}, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }
      let data = result.data;
      setPaymentMethods(data);
    });
  };

  const getCartData = () => {
    Cart.getForMe({}, options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
      }

      let data = result.data;
      setCart(data.cart);
      console.log(data);
    });
  };

  const handleSendChange = (e) => {
    const { name, value } = e.target;
    setSendUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRecvChange = (e) => {
    const { name, value } = e.target;
    setSendUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxClick = (e) => {
    if (isChecked) {
      setIsChecked(false);
      setRecvUserInfo({
        full: "",
        mobile: "",
      });
    } else {
      setIsChecked(true);
      setRecvUserInfo({
        full: sendUserInfo.full,
        mobile: sendUserInfo.mobile,
      });
    }
  };

  const handleCompletePaymentClick = (e) => {
    var Customer = clayful.Customer;

    let body = {
      name: {
        full: sendUserInfo.full,
      },
      mobile: sendUserInfo.mobile,
    };
    Customer.updateMe(body, options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
      }
      var data = result.data;

      console.log(data);

      let items = [];
      cart.items.map((item) => {
        let itemVariable = {};
        itemVariable.bundleItems = item.bundleItems;
        itemVariable.product = item.product._id;
        itemVariable.quantity = item.quantity.raw;
        itemVariable.shippingMethod = item.shippingMethod._id;
        itemVariable.variant = item.variant._id;
        itemVariable._id = item._id;
        return items.push(itemVariable);
      });

      let payload = {
        items,
        currency: cart.currency.payment.code,
        paymentMethod,
        address: {
          shipping: {
            name: {
              full: recvUserInfo.full,
            },
            mobile: recvUserInfo.mobile,
            phone: recvUserInfo.phone,
            postcode: address.postCode,
            state: address.state,
            city: address.city,
            address1: address.address1,
            address2: address.address2,
            country: "KR",
          },
          billing: {
            name: {
              full: recvUserInfo.full,
            },
            mobile: recvUserInfo.mobile,
            phone: recvUserInfo.phone,
            postcode: address.postCode,
            state: address.state,
            city: address.city,
            address1: address.address1,
            address2: address.address2,
            country: "KR",
          },
        },
      };

      Cart.checkoutForMe("order", payload, options, function (err, result) {
        if (err) {
          // Error case
          console.log(err.code);
        }

        var data = result.data;

        console.log(data);

        Cart.emptyForMe(options, function (err, result) {
          if (err) {
            // Error case
            console.log(err.code);
          }

          var data = result.data;

          console.log(data);
          navigate("/history");
        });
      });
    });
  };

  const handleCompletePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    handleClose();
    setAddress((prevState) => ({
      ...prevState,
      postCode: data.zonecode,
      state: data.side,
      city: data.sigungu,
      address1: fullAddress,
    }));
  };

  const handleAddress2Change = (e) => {
    setAddress((prevState) => ({
      ...prevState,
      address2: e.target.value,
    }));
  };
  return (
    <div className="pageWrapper">
      <div className="payment">
        <div
          style={{
            width: "100%",
            display: "flex",
            borderBottom: "1px solid #d2d2d7",
          }}
        >
          <div style={{ width: "50%", fontSize: 24, fontWeight: 500 }}>
            결제
          </div>
          <div style={{ width: "50%", display: "flex", justifyContent: "end" }}>
            주문 총 가격: {cart.total?.amount.raw + 3000}원 (3000원 배송비)
          </div>
        </div>

        <div style={{ marginTop: 16, width: "100%", display: "flex" }}>
          <div style={{ width: "49%" }}>
            <h5>주문자 정보</h5>
            <input
              value={sendUserInfo.full}
              onChange={handleSendChange}
              type="text"
              name="full"
              placeholder="주문자명"
            />
            <input
              value={sendUserInfo.mobile}
              onChange={handleSendChange}
              type="text"
              name="mobile"
              placeholder="연락처"
            />
            <div>
              <input
                onChange={handleCheckboxClick}
                checked={isChecked}
                type="checkbox"
                id="sameInfo"
                name="sameInfo"
              />
              <label htmlFor="sameInfo">수취자 정보도 위와 동일합니다.</label>
            </div>
          </div>
          <div style={{ width: "2%" }} />
          <div style={{ width: "49%" }}>
            <h5>수취자 정보</h5>
            <input
              value={recvUserInfo.full}
              onChange={handleRecvChange}
              type="text"
              name="full"
              placeholder="수취자명"
            />
            <input
              value={recvUserInfo.mobile}
              onChange={handleRecvChange}
              type="text"
              name="mobile"
              placeholder="연락처"
            />

            <h5>배송 정보</h5>
            <input
              type="text"
              readOnly
              value={address.address1}
              placeholder="주소"
              onClick={() => setShow(true)}
            />
            <input
              type="text"
              value={address.address2}
              onChange={handleAddress2Change}
              name="address2"
              placeholder="상세주소"
            />
            <input
              type="text"
              value={address.postCode}
              readOnly
              placeholder="우편번호"
            />

            <h5>결제</h5>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option>결제수단 선택</option>
              {paymentMethods.map((method) => (
                <option key={method.slug} value={method.slug}>
                  {method.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleCompletePaymentClick}
              style={{ width: "100%", marginTop: 10 }}
            >
              주문
            </button>
            {paymentMethod === "bank-transfer" && (
              <p>계좌번호 : 1111-1111 클레이풀 은행</p>
            )}

            <PostCodeModal
              show={show}
              handleClose={handleClose}
              handleCompletePostCode={handleCompletePostCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
