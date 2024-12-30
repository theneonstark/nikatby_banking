import React from "react";
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

function Transition() {
    return (
        <div>
            <Card className="flex gap-4 py-4 px-4">
                <Button>
                    <InertiaLink href="#">PAY-IN</InertiaLink>
                </Button>
                <Button>
                    <InertiaLink href="#">PAY-OUT</InertiaLink>
                </Button>
                <Button>
                    <InertiaLink href="#">QR-CODE</InertiaLink>
                </Button>
                <Button>
                    <InertiaLink href="#">CHARGE-BACK</InertiaLink>
                </Button>
            </Card>
            {/*  */}
            <Card className="py-4 px-4">
                <div className="flex justify-between items-center pb-2">
                    <CardTitle>Search</CardTitle>
                    <div className="flex gap-4">
                        <Button>
                            <Search />
                            Search
                        </Button>
                        <Button className="bg-blue-500">
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
                    <DatePickerWithRange />
                    <Input className="w-[200px]"/>
                    <Select>
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
                    <Select>
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
                    </Select>
                </div>
            </Card>
            <PayInstatement/>
        </div>
    );
}

export default Transition;
