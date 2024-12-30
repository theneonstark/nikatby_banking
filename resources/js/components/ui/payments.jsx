import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Separator } from "./separator";
import { Button } from "./button";

function Payments({title, head}) {
    console.log(title);
    return (
        <Card>
            <CardContent className="p-0 flex flex-col items-center gap-3 justify-center">
                <CardTitle className="bg-blue-400 p-2 w-full text-center">{title}</CardTitle>
                <div>
                    <CardHeader>{head}</CardHeader>
                    <Input placeholder="Enter Amount" />
                </div>
                <Separator />
                <Button className="mb-3">Pay Now</Button>
            </CardContent>
        </Card>
    );
}

export default Payments;
