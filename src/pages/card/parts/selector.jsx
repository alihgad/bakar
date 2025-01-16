import React from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import Visa from './../../../assests/black.png';
import Master from "./../../../assests/master.png";

import { ChevronUp , ChevronDown } from 'lucide-react';

const selector = ({cardData}) => {

 

  return (
    <Card className="flex items-center border border-black rounded-none  p-4">
        <img
          src={cardData.brand === "Visa" ? Visa : Master} 
          alt="Visa"
          className="w-10 mr-2"
        />
        <span className="flex-1">{cardData.cardholderName}</span>
      <CardContent className="flex flex-col px-2 py-0 ">
          <ChevronUp className="h-4 w-4" />
          <ChevronDown className="h-4 w-4" />
      </CardContent>
    </Card>
  );
};

export default selector;