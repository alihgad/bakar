import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../components/ui/card";
import visa from "./../../../assests/visa_word.png";
import Master from "./../../../assests/master.png";
import Dot from "./Dot";

export default function TheCard({ className, cardData }) {
  let draw = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(<Dot  key={i} />);
    }

    return arr;
  };

  return (
    <>
      { cardData && <Card
        className={`flex flex-col items-center border border-black rounded-none  p-4 ${className}`}
      >
        <CardHeader className={`self-end p-0 `}>
          <img
            src={cardData.brand === "Visa" ? visa : Master}
            alt="brand"
            className="w-44"
          />
        </CardHeader>
        <CardContent className=" self-start mt-20 mb-28">
          <p className="flex gap-5">
            <span className="flex gap-2 items-center justify-center ">
              {draw(4)}
            </span>
            <span className="flex gap-2 items-center justify-center ">
              {draw(4)}
            </span>
            <span className="flex gap-2 items-center justify-center ">
              {draw(4)}
            </span>
            <span className="text-xl flex items-center justify-center">
              {cardData.last4}
            </span>
          </p>
        </CardContent>
        <CardFooter className={"grid grid-cols-3 w-full text-lg font-semibold"}>
          <div className="flex flex-col  items-start">
            <p>Card holder</p>
            <p>{cardData.cardholderName}</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p>Epiry date</p>
            {cardData?.expiryYear ? (
              <p>
                {cardData?.expiryMonth} /{" "}
                {Number(cardData?.expiryYear?.toString().slice(2))}
              </p>
            ) : (
              <></>
            )}
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <p>CVC</p>
            <p className="flex gap-2">{draw(3)}</p>
          </div>
        </CardFooter>
      </Card>}
    </>
  );
}
