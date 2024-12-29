import React from "react";
import { DatePickerWithRange } from "./ui/datepickerwithrange";
import { Button } from "./ui/button";
import { Divide, Filter } from "lucide-react";
import NumberCard from "./ui/number-card";
import  {Chart}  from "./chart";
import DashboardCard from "./ui/dashboardcard";

const data = [
    { title: "Total Volume", amt: "2200.00" },
    { title: "Total Transaction", amt: "22000.00" },
];

const dashboardData = [
    {title: "Upi Collection", count: 0, amt: 1000, charge: 200, gst: "48%", totalcharge: 12},
    {title: "Virtual Collection", count: 0, charge: 200, gst: "48%", amt: 1000, totalcharge: 12},
    {title: "Bank Payout", count: 0, charge: 200, gst: "48%", amt: 1000, totalcharge: 12},
    {title: "Upi Payout", count: 0, charge: 200, gst: "48%", amt: 1000, totalcharge: 12},
    {title: "Recharge", count: 0,charge: 200, gst: "48%", amt: 1000, totalcharge: 12},
    {title: "Bill Payment", count: 0, charge: 200, gst: "48%", amt: 1000, totalcharge: 12},
    {title: "Aeps", count: 0, charge: 200, gst: "48%", amt: 1000, totalcharge: 12},
    {title: "Money transfer", charge: 200, gst: "48%", count: 0, amt: 1000, totalcharge: 12},
]
function PayoutPerformance() {
    return (
        <div className="px-4 py-10 rounded-md bg-gradient-to-l from-red-400 to-red-600">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="text-2xl sm:text-3xl text-center md:text-left">
                    Payout Performance Dashboard
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center">
                    <DatePickerWithRange />
                    <Button className="flex items-center justify-center">
                        <Filter className="w-4 h-4 mr-1" /> Filter
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-5">
                <div className="flex flex-col gap-4">
                {data.map((item) => (
                    <NumberCard
                        key={item.title}
                        title={item.title}
                        payout={item.amt}
                    />
                ))}
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2">
                    <Chart/>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
                {
                    dashboardData.map((item) => (
                        <DashboardCard
                            key={item.title}
                            title={item.title}
                            count={item.count}
                            amt={item.amt}
                            charge={item.charge}
                            gst={item.gst}
                            payout={item.amt}
                            totalcharge={item.totalcharge}
                        />
                    ))
                }
            </div>
            </div>
    );
}

export default PayoutPerformance;
