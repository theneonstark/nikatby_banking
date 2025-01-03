import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Separator } from "./separator";
import { Button } from "./button";

function Payments({ title, head }) {
    const [amount, setAmount] = useState(""); // State to hold input value
    const [error, setError] = useState(false); // State to manage error

    const handlePayNow = () => {
        if (amount.trim() === "") {
            setError(true); // Show error if input is empty
        } else {
            setError(false);
            alert(`Payment of ₹${amount} is being processed!`);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            // Allow only numbers
            setAmount(value);
            if (error) {
                setError(false); // Remove error as user starts typing
            }
        }
    };

    return (
        <Card>
            <CardContent className="p-0 flex flex-col items-center gap-3 justify-center">
                <CardTitle className="bg-blue-400 p-2 w-full text-center">{title}</CardTitle>
                <div>
                    <CardHeader>{head}</CardHeader>
                    <Input
                        type="text" // Use text to prevent default spinner
                        placeholder="Enter Amount"
                        value={amount}
                        onChange={handleInputChange}
                        className={`border ${error ? "border-red-500" : "border-gray-300"} p-2 rounded`}
                    />
                    {error && <p className="text-red-500 mt-1">Please enter a valid amount!</p>}
                </div>
                <Separator />
                <Button onClick={handlePayNow} className="mb-3">
                    Pay Now
                </Button>
            </CardContent>
        </Card>
    );
}

export default Payments;
