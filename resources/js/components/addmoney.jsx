import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CloudDownloadIcon, IndianRupee, RefreshCcw, SearchIcon } from "lucide-react";
import { DatePickerWithRange } from "./ui/datepickerwithrange";
import { Input } from "./ui/input";
import { format } from "date-fns"; // Import the format function
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

export const invoices = [
    {
        date: "2023-11-12",
        TxnId: "txn9876qwert",
        RefId: "ref1234abcd",
        BankRef: "HDFC",
        Amount: 7500,
        status: "True",
    },
    {
        date: "2023-08-15",
        TxnId: "txn1234abcd",
        RefId: "ref5678efgh",
        BankRef: "ICICI",
        Amount: 5400,
        status: "False",
    },
    {
        date: "2023-10-22",
        TxnId: "txn3456ghij",
        RefId: "ref9012ijkl",
        BankRef: "SBI",
        Amount: 12000,
        status: "True",
    },
    {
        date: "2023-07-30",
        TxnId: "txn4567klmn",
        RefId: "ref3456mnop",
        BankRef: "Axis Bank",
        Amount: 9800,
        status: "True",
    },
    {
        date: "2023-09-09",
        TxnId: "txn5678opqr",
        RefId: "ref6789qrst",
        BankRef: "Kotak Mahindra",
        Amount: 11500,
        status: "False",
    },
    {
        date: "2023-06-25",
        TxnId: "txn6789stuv",
        RefId: "ref7890uvwx",
        BankRef: "RBL",
        Amount: 4500,
        status: "True",
    },
    {
        date: "2023-05-19",
        TxnId: "txn7890wxyz",
        RefId: "ref8901yzab",
        BankRef: "Yes Bank",
        Amount: 6700,
        status: "True",
    },
    {
        date: "2023-04-10",
        TxnId: "txn8901abcd",
        RefId: "ref9012bcde",
        BankRef: "IndusInd Bank",
        Amount: 13200,
        status: "False",
    },
    {
        date: "2023-03-18",
        TxnId: "txn9012efgh",
        RefId: "ref0123defg",
        BankRef: "Punjab National Bank",
        Amount: 8100,
        status: "True",
    },
    {
        date: "2023-02-05",
        TxnId: "txn1235ijkl",
        RefId: "ref4567hijk",
        BankRef: "Bank of Baroda",
        Amount: 10400,
        status: "True",
    },
];


function AddMoney() {
    const [dateRange, setDateRange] = useState({ from: null, to: null });
const [searchValue, setSearchValue] = useState("");
const [filteredInvoices, setFilteredInvoices] = useState(invoices);
const [totalAmount, setTotalAmount] = useState(() =>
    invoices.reduce((sum, invoice) => sum + invoice.Amount, 0)
);

// Invoice data fdiltered function

const handleDateChange = (newDateRange) => {
  // Format the start and end dates
  const formattedStartDate = newDateRange.from
    ? format(newDateRange.from, "yyyy-MM-dd")
    : null;
  const formattedEndDate = newDateRange.to
    ? format(newDateRange.to, "yyyy-MM-dd")
    : null;

  // Update the state with formatted date values
  setDateRange({ from: formattedStartDate, to: formattedEndDate });

  // Log the formatted dates
  console.log("Start Date: ", formattedStartDate);
  console.log("End Date: ", formattedEndDate);
};

const handleSearchClick = () => {
  if (dateRange.from && dateRange.to) {
    console.log("Searching with date range: ", dateRange);
    const filteredData = invoices.filter((invoice) => {
      return invoice.date >= dateRange.from && invoice.date <= dateRange.to; // Compare dates
    });

    setFilteredInvoices(filteredData);
    const newTotal = filteredData.reduce((sum, invoice) => sum + invoice.Amount, 0);
    setTotalAmount(newTotal);
    console.log("Filtered Invoices: ", filteredData);
  } else {
    console.log("Invalid date range. Please select valid from and to dates.");
  }
};

// data refresh function

const handleRefreshClick = () => {
    setFilteredInvoices(invoices); // Reset to original data
    setDateRange({ from: null, to: null }); // Clear the date range
    setSearchValue(""); // Clear the search input
    console.log("refresh");
    
};


    return (
        <div>
            <div>
                <Card>
                    <CardContent className="flex justify-between py-2">
                        <CardTitle>Search</CardTitle>
                        <div className="flex gap-4">
                            {/* Fix: Move onClick to Button instead of SearchIcon */}
                            <Button onClick={handleSearchClick}>
                                <SearchIcon /> SEARCH
                            </Button>
                            <Button className="bg-green-600" onClick={handleRefreshClick} >
                                <RefreshCcw /> REFRESH
                            </Button>
                            <Button className="bg-orange-600">
                                <CloudDownloadIcon /> DOWNLOAD
                            </Button>
                        </div>
                    </CardContent>
                    <CardContent className="grid grid-cols-2">
                        <DatePickerWithRange onDateChange={handleDateChange} />
                        <Input
                            placeholder="Search Value"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card>
                    <CardContent className="flex justify-between py-4">
                        <CardTitle>Instant Load Request</CardTitle>
                    </CardContent>
                    <CardContent>
                        <Table>
                            <TableCaption>
                                A list of your recent Request.
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">
                                        Date
                                    </TableHead>
                                    <TableHead>Txn Id</TableHead>
                                    <TableHead>Ref Id</TableHead>
                                    <TableHead>Bank Ref</TableHead>
                                    <TableHead >
                                        Status
                                    </TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredInvoices.map((invoice) => (
                                    <TableRow key={invoice.date}>
                                        <TableCell className="font-medium">
                                            {invoice.date}
                                        </TableCell>
                                        <TableCell>{invoice.TxnId}</TableCell>
                                        <TableCell>{invoice.RefId}</TableCell>
                                        <TableCell>{invoice.BankRef}</TableCell>
                                        <TableCell>{invoice.status}</TableCell>
                                        <TableCell className='text-right'>{invoice.Amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={5}>Total</TableCell>
                                    <TableCell className=" flex justify-end">
                                       <IndianRupee/>
                                       {totalAmount}
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default AddMoney;
