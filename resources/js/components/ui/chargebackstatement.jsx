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


function ChargeBackStatement({ invoices, totalAmount }) {
    return (
        <Card>
            <CardContent className="flex justify-between py-4">
                <CardTitle>Transaction</CardTitle>
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
                            <TableHead>Charge</TableHead>
                            <TableHead>Gst</TableHead>
                            <TableHead>Profit</TableHead>
                            <TableHead>Tds</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.Date}>
                                <TableCell className="font-medium">
                                    {invoice.Date}
                                </TableCell>
                                <TableCell>{invoice.Status}</TableCell>
                                <TableCell>{invoice.Operator}</TableCell>
                                <TableCell>{invoice.Number}</TableCell>
                                <TableCell>{invoice.ApiTxnid}</TableCell>
                                <TableCell>{invoice.Txnid}</TableCell>
                                <TableCell>{invoice.Reference}</TableCell>
                                <TableCell>{invoice.Charge}</TableCell>
                                <TableCell>{invoice.Gst}</TableCell>
                                <TableCell>{invoice.Profit}</TableCell>
                                <TableCell>{invoice.Tds}</TableCell>
                                <TableCell className="text-right">
                                    {invoice.Amount}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={11}>Total</TableCell>
                            <TableCell className="text-right">
                                {totalAmount}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </CardContent>
        </Card>
    );
}

export default ChargeBackStatement;
