import { useEffect, useState } from "react";
import Selector from "./parts/selector";
import TheCard from "./parts/theCard";
import axios from "axios";
import Load from "../../components/ui/Load";
import Details from "./parts/details";

export default function Card() {
  let [cardData, setCardData] = useState(null);



  useEffect(() => {
    axios
      .get("https://www.bakarcompany.somee.com/api/IssueCard/get-card-data")
      .then((res) => {
        res.data.status = "Active";
        res.data.type = "Virtual";
        res.data.createdAt = "Nov 15 ,2023, 9:32 PM";
        res.data.address = "123 main st, New York, NY 10001";
        setCardData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {cardData ? (
        <div className="md:w-4/12 mb-5">
          <Selector cardData={cardData} />

          <TheCard className="mt-10" cardData={cardData} />

          <Details className="mt-10" cardData={cardData} />
        </div>
      ) : (
        <Load />
      )}
    </>
  );
}
