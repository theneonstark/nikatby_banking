import React, { useState } from "react";
import { Card, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { CloudDownload, RefreshCcw, Search, SearchIcon } from "lucide-react";
import { DatePickerWithRange } from "./ui/datepickerwithrange";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import PayInstatement from "./ui/payinstatement";
import Payoutstatement from "./ui/payoutstatement";
import QrStatement from "./ui/qrstatement";
import ChargeBackStatement from "./ui/chargebackstatement";
import TransactionStatement from "./ui/transaction";

export const invoices = [
    {
        Date: "2023-11-12",
        Status: "Success",
        Operator: "Airtel",
        Number: "9876543210",
        ApiTxnid: "api12345abcd",
        Txnid: "txn9876qwert",
        Reference: "ref1234abcd",
        Amount: 7500,
        Charge: 50,
        Gst: 18,
        Profit: 200,
        Tds: 2,
    },
    {
        Date: "2023-08-15",
        Status: "Failed",
        Operator: "Vodafone",
        Number: "9876543211",
        ApiTxnid: "api12346efgh",
        Txnid: "txn1234abcd",
        Reference: "ref5678efgh",
        Amount: 5400,
        Charge: 40,
        Gst: 12,
        Profit: 150,
        Tds: 1,
    },
    {
        Date: "2023-10-22",
        Status: "Success",
        Operator: "Jio",
        Number: "9876543212",
        ApiTxnid: "api12347ijkl",
        Txnid: "txn3456ghij",
        Reference: "ref9012ijkl",
        Amount: 12000,
        Charge: 60,
        Gst: 20,
        Profit: 300,
        Tds: 3,
    },
    {
        Date: "2023-07-30",
        Status: "Success",
        Operator: "BSNL",
        Number: "9876543213",
        ApiTxnid: "api12348mnop",
        Txnid: "txn4567klmn",
        Reference: "ref3456mnop",
        Amount: 9800,
        Charge: 45,
        Gst: 16,
        Profit: 250,
        Tds: 2,
    },
    {
        Date: "2023-09-09",
        Status: "Failed",
        Operator: "MTNL",
        Number: "9876543214",
        ApiTxnid: "api12349qrst",
        Txnid: "txn5678opqr",
        Reference: "ref6789qrst",
        Amount: 11500,
        Charge: 55,
        Gst: 22,
        Profit: 280,
        Tds: 2,
    },
    {
        Date: "2023-06-25",
        Status: "Success",
        Operator: "Airtel",
        Number: "9876543215",
        ApiTxnid: "api12350uvwx",
        Txnid: "txn6789stuv",
        Reference: "ref7890uvwx",
        Amount: 4500,
        Charge: 35,
        Gst: 8,
        Profit: 100,
        Tds: 1,
    },
    {
        Date: "2023-05-19",
        Status: "Success",
        Operator: "Vodafone",
        Number: "9876543216",
        ApiTxnid: "api12351yzab",
        Txnid: "txn7890wxyz",
        Reference: "ref8901yzab",
        Amount: 6700,
        Charge: 38,
        Gst: 10,
        Profit: 120,
        Tds: 1,
    },
    {
        Date: "2023-04-10",
        Status: "Failed",
        Operator: "Jio",
        Number: "9876543217",
        ApiTxnid: "api12352bcde",
        Txnid: "txn8901abcd",
        Reference: "ref9012bcde",
        Amount: 13200,
        Charge: 65,
        Gst: 24,
        Profit: 320,
        Tds: 3,
    },
    {
        Date: "2023-03-18",
        Status: "Success",
        Operator: "BSNL",
        Number: "9876543218",
        ApiTxnid: "api12353defg",
        Txnid: "txn9012efgh",
        Reference: "ref0123defg",
        Amount: 8100,
        Charge: 42,
        Gst: 15,
        Profit: 200,
        Tds: 2,
    },
    {
        Date: "2023-02-05",
        Status: "Success",
        Operator: "MTNL",
        Number: "9876543219",
        ApiTxnid: "api12354hijk",
        Txnid: "txn1235ijkl",
        Reference: "ref4567hijk",
        Amount: 10400,
        Charge: 48,
        Gst: 18,
        Profit: 260,
        Tds: 2,
    },
];
function Transition() {
    const [activeStatement, setActiveStatement] = useState('transaction')
    const [dateRange, setDateRange] = useState({ from: null, to: null });
    const [searchValue, setSearchValue] = useState("");
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedReport, setSelectedReport] = useState('');   
    const [filteredInvoices, setFilteredInvoices] = useState(invoices);
    const [totalAmount, setTotalAmount] = useState(() =>
        invoices.reduce((sum, invoice) => sum + invoice.Amount, 0)
    );
    

    const handleDateChange = (newDateRange) => {
        const formattedStartDate = newDateRange.from
          ? format(newDateRange.from, 'yyyy-MM-dd')
          : null;
        const formattedEndDate = newDateRange.to
          ? format(newDateRange.to, 'yyyy-MM-dd')
          : null;
      
        setDateRange({ from: formattedStartDate, to: formattedEndDate });
      };
      
      const filterInvoices = () => {
        const filteredData = invoices.filter((invoice) => {
          const matchesDate =
            (!dateRange.from || invoice.Date >= dateRange.from) &&
            (!dateRange.to || invoice.Date <= dateRange.to);
          const matchesSearch = !searchValue || invoice.name.toLowerCase().includes(searchValue.toLowerCase());
          const matchesStatus = !selectedStatus || invoice.Status === selectedStatus;
          const matchesReport = !selectedReport || invoice.Operator === selectedReport;
      
          return matchesDate && matchesSearch && matchesStatus && matchesReport;
        });
      
        setFilteredInvoices(filteredData);
        const newTotal = filteredData.reduce((sum, invoice) => sum + invoice.Amount, 0);
        setTotalAmount(newTotal);
      };
      
      const handleSearchClick = () => {
        filterInvoices();
      };
    // data refresh function
    
    const handleRefreshClick = () => {
        setFilteredInvoices(invoices);
        setDateRange({ from: null, to: null });
        setSearchValue('');
        setSelectedStatus('');
        setSelectedReport('');
      };
    return (
        <div>
            <Card className="flex gap-4 py-4 px-4">
                <Button className={`${activeStatement === "payin" ? "bg-red-400" : ""}`} onClick={() => setActiveStatement("payin")}>
                    PAY-IN
                </Button>
                <Button className={`${activeStatement === "payout" ? "bg-red-400" : ""}`} onClick={() => setActiveStatement("payout")}>
                    PAY-OUT
                </Button>
                <Button className={`${activeStatement === "qrcode" ? "bg-red-400" : ""}`} onClick={() => setActiveStatement("qrcode")}>
                    QR-CODE
                </Button>
                <Button className={`${activeStatement === "chargeback" ? "bg-red-400" : ""}`} onClick={() => setActiveStatement("chargeback")}>
                    CHARGE-BACK
                </Button>
            </Card>
            {/*  */}
            <Card className="py-4 px-4">
                <div className="flex justify-between items-center pb-2">
                    <CardTitle>Search</CardTitle>
                    <div className="flex gap-4">
                        <Button onClick={handleSearchClick}>
                            <Search />
                            Search
                        </Button>
                        <Button className="bg-blue-500"  onClick={handleRefreshClick} >
                            <RefreshCcw />
                            REFRESH
                        </Button>
                        <Button className="bg-orange-500">
                            <CloudDownload />
                            EXPORT
                        </Button>
                    </div>
                </div>
                <div className="flex gap-5">
                    <DatePickerWithRange onDateChange={handleDateChange} />
                       {/* <Input
                           placeholder="Search Value"
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                           className="w-[200px]"
                      /> */}
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Report Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Initiated</SelectLabel>
                                <SelectItem value="Success">Success</SelectItem>
                                <SelectItem value="Banana">Banana</SelectItem>
                                <SelectItem value="Pending">
                                    Pending
                                </SelectItem>
                                <SelectItem value="Failed">Failed</SelectItem>
                                <SelectItem value="Reversed">
                                    Reversed
                                </SelectItem>
                                <SelectItem value="Refunded">
                                    Refunded
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {/* <Select value={selectedReport} onValueChange={setSelectedReport}>
                        <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Report Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className="flex items-center">
                                <SearchIcon/>
                                <Input/>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectItem value="SelectProduct">Select Product</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select> */}
                     <Select value={selectedReport} onValueChange={setSelectedReport}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Report Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Initiated</SelectLabel>
                                <SelectItem value="Airtel">Airtel</SelectItem>
                                <SelectItem value="Vodafone">Vodafone</SelectItem>
                                <SelectItem value="Jio">Jio</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </Card>
            <div>
                {activeStatement === 'transaction' && <TransactionStatement invoices={filteredInvoices} totalAmount={totalAmount}/>}
                {activeStatement === 'payin' && <PayInstatement invoices={filteredInvoices} totalAmount={totalAmount}/>}
                {activeStatement === 'payout' && <Payoutstatement invoices={filteredInvoices} totalAmount={totalAmount}/>}
                {activeStatement === 'qrcode' && <QrStatement invoices={filteredInvoices} totalAmount={totalAmount}/>}
                {activeStatement === 'chargeback' && <ChargeBackStatement invoices={filteredInvoices} totalAmount={totalAmount}/>}
            </div>
        </div>
    );
}

export default Transition;
