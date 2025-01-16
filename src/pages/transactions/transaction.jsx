import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./../../components/ui/table";
import { Button } from "./../../components/ui/button";
import data from "./transactionData.json";

let dataParse = JSON.parse(JSON.stringify(data));



export default function Tra() {
  let [page, setPage] = useState(1);
  let limit = 10;
  let start = (page - 1) * limit;
  let end = page * limit;

  let transactions = dataParse.slice(start, end);

  let next = () => {
    if (page === Math.ceil(dataParse.length / limit)) return;
    setPage(page + 1);
  };

  let prev = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  return (
    <div className="p-6">
      <div className="flex  justify-between">
        <div className="space-x-2 border-x">
        <a href="./transactionData.json" download><Button variant="ghost" >Download</Button></a>
        <Button variant="ghost">Filter</Button>
        </div>
        <div className="space-x-2">
          <Button variant="outline">Download</Button>
          <Button variant="outline">Filter</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Cardholder</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.currency}</TableCell>
              <TableCell>{transaction.cardholder}</TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 text-sm font-medium border border-black`}
                >
                  {transaction.status}
                </span>
              </TableCell>
              <TableCell>{transaction.created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Viewing {page}-{Math.ceil(dataParse.length / limit)} of{" "}
          {dataParse.length} results
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => prev()}>
            Previous
          </Button>
          <Button variant="outline" onClick={() => next()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
