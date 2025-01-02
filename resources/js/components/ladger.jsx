import React, { useState } from "react";
import { Card, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
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
import CollectionWalletStatement from "./ui/collectionwalletstatement";
import MainWalletStatement from "./ui/mainwalletstatement";
import QrWalletStatement from "./ui/qrwalletstatement";
import RrWalletStatement from "./ui/rrwalletstatement";

function Ladger() {
    const [activeStatement, setActiveStatement] = useState('transaction')
    return (
        <div>
            <Card className="flex gap-4 py-4 px-4">
                <Button className={`${activeStatement === "collection" ? "bg-red-400" : ""}`} onClick={() => setActiveStatement("collection")}>
                    COLLECTION-WALLET
                </Button>
                <Button className={`${activeStatement === "payout" ? "bg-red-400" : ""}`} onClick={() => setActiveStatement("payout")}>
                    PAYOUT WALLET
                </Button>
                <Button className={`${activeStatement === "qrwallet" ? "bg-red-400" : ""}`} onClick={() => setActiveStatement("qrwallet")}>
                    QR WALLET
                </Button>
                <Button className={`${activeStatement === "rrwallet" ? "bg-red-400" : ""}`} onClick={() => setActiveStatement("rrwallet")}>
                    RR WALLET
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
            <div>
                {activeStatement === 'collection' && <CollectionWalletStatement/>}
                {activeStatement === 'payout' && <MainWalletStatement/>}
                {activeStatement === 'qrwallet' && <QrWalletStatement/>}
                {activeStatement === 'rrwallet' && <RrWalletStatement/>}
            </div>
        </div>
    );
}

export default Ladger;
