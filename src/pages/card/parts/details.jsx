import Dot from "./Dot";
import visa from "./../../../assests/black.png";
import master from "./../../../assests/master.png";

export default function Details({ cardData }) {
  let draw = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(<Dot size={2} key={i} />);
    }

    return arr;
  };

  return (
    <>
      <div className="grid grid-cols-2 mt-10">
        <div className="flex flex-col gap-2">
          <p>Card number</p>
          <p>CVV</p>
          <p>Expiration</p>
          <p className="h-8 flex items-center">Brand</p>
          <p>Status</p>
          <p>Cardholder</p>
          <p>Card type</p>
          <p>Created at</p>
          <p>Billing address</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex gap-3 items-center h-6 ">
            <span className="flex gap-1">{draw(3)}</span>
            <span className="flex gap-1">{draw(3)}</span>
            <span className="flex gap-1">{draw(3)}</span>
            <span className="flex gap-1">{cardData.last4}</span>
          </p>
          <p className="flex gap-3 items-center h-6">
            <span className="flex gap-1">{draw(3)}</span>
          </p>
          <p>{cardData.expiryMonth}/{cardData.expiryYear}</p>
          <p className="flex gap-2 items-center">{cardData.brand} <span><img src={cardData.brand === "Visa" ? visa : master } alt="visa" className="w-8"/></span></p>
          <p><span className="border-2 border-black py-1 px-2">{cardData.status}</span></p>
          <p>{cardData.cardholderName}</p>
          <p>{cardData.type}</p>
          <p>{cardData.createdAt}</p>
          <p>{cardData.address}</p>
        </div>
      </div>
    </>
  );
}
