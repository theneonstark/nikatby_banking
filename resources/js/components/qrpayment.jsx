import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Payments from "./ui/payments";
import { RefreshCcw, SearchIcon } from "lucide-react";
import { DatePickerWithRange } from "./ui/datepickerwithrange";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";

const payCard = [
    { title: "Scan & Pay", head: "Load Amount" },
    { title: "QR Code", head: "Load Amount" },
    { title: "Move To Payout Wallet", head: "Transfer Amount" },
];

const invoices = [
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
    {
        date: "12/12/12",
        TxnId: "uioqweurewqr54533ewr",
        RefId: "dsfasdf78sdf4a5sdf4",
        BankRef: "SBI",
        Amount: 5000,
        status: "True",
    },
];
function QrPayment() {
    return (
        <div className="px-4 py-10 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {payCard.map((abc) => (
                    <Payments title={abc.title} head={abc.head} />
                ))}
            </div>
            <Separator />
            <div>
                <Card>
                    <CardContent className="flex justify-between py-2">
                        <CardTitle>Search</CardTitle>
                        <div>
                            <Button>
                                <SearchIcon /> SEARCH
                            </Button>
                            <Button className="bg-green-600">
                                <RefreshCcw /> REFRESH
                            </Button>
                        </div>
                    </CardContent>
                    <CardContent className="grid grid-cols-2">
                    <DatePickerWithRange />
                    <Input placeholder="Search Value" />
                    </CardContent>
                </Card>
            </div>
            <Separator />
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
                                    <TableHead>Amount</TableHead>
                                    <TableHead className="text-right">
                                        Status
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.date}>
                                        <TableCell className="font-medium">
                                            {invoice.date}
                                        </TableCell>
                                        <TableCell>
                                            {invoice.TxnId}
                                        </TableCell>
                                        <TableCell>
                                            {invoice.RefId}
                                        </TableCell>
                                        <TableCell>
                                            {invoice.BankRef}
                                        </TableCell>
                                        <TableCell>
                                            {invoice.Amount}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {invoice.status}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={5}>Total</TableCell>
                                    <TableCell className="text-right">
                                        $2,500.00
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

export default QrPayment;
