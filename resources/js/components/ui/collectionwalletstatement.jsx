import React from "react";
import { Card, CardTitle } from "./card";
import { CardContent } from "./card";
import {
    Table,
    TableCaption,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    TableFooter,
} from "./table";

// export const invoices = [
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
//     {
//         date: "12/12/12",
//         TxnId: "uioqweurewqr54533ewr",
//         RefId: "dsfasdf78sdf4a5sdf4",
//         BankRef: "SBI",
//         Amount: 5000,
//         status: "True",
//     },
// ];

function CollectionWalletStatement() {
    return (
        <Card>
            <CardContent className="flex justify-between py-4">
                <CardTitle>Collection Wallet Statement</CardTitle>
            </CardContent>
            <CardContent>
                <Table>
                    <TableCaption>A list of your recent Request.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Operator</TableHead>
                            <TableHead>Number</TableHead>
                            <TableHead>Api Txnid</TableHead>
                            <TableHead>Txnid</TableHead>
                            <TableHead>Reference</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Charge</TableHead>
                            <TableHead>Gst</TableHead>
                            <TableHead>Profit</TableHead>
                            <TableHead>Tds</TableHead>
                        </TableRow>
                    </TableHeader>
                    {/* <TableBody>
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
                    </TableBody> */}
                    <TableFooter>
                        {/* <TableRow>
                            <TableCell colSpan={5}>Total</TableCell>
                            <TableCell className="text-right">
                                $2,500.00
                            </TableCell>
                        </TableRow> */}
                    </TableFooter>
                </Table>
            </CardContent>
        </Card>
    );
}

export default CollectionWalletStatement;