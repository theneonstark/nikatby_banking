import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CloudDownloadIcon, RefreshCcw, SearchIcon } from "lucide-react";
import { DatePickerWithRange } from "./ui/datepickerwithrange";
import { Input } from "./ui/input";
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
function AddMoney() {
    return (
        <div>
            <div>
                <Card>
                    <CardContent className="flex justify-between py-2">
                        <CardTitle>Search</CardTitle>
                        <div className="flex gap-4">
                            <Button>
                                <SearchIcon /> SEARCH
                            </Button>
                            <Button className="bg-green-600">
                                <RefreshCcw /> REFRESH
                            </Button>
                            <Button className="bg-orange-600">
                                <CloudDownloadIcon /> REFRESH
                            </Button>
                        </div>
                    </CardContent>
                    <CardContent className="grid grid-cols-2">
                        <DatePickerWithRange />
                        <Input placeholder="Search Value" />
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
                                        <TableCell>{invoice.TxnId}</TableCell>
                                        <TableCell>{invoice.RefId}</TableCell>
                                        <TableCell>{invoice.BankRef}</TableCell>
                                        <TableCell>{invoice.Amount}</TableCell>
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

export default AddMoney;
