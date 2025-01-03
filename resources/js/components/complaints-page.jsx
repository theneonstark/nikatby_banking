import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

export default function ComplaintsPage() {
  return (
    (<div className="container mx-auto p-4 space-y-4">
        <Alert variant="destructive" className="border-red-400 bg-red-50 text-red-600 text-end">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            The Intent/QR will be Active for 5 Min only. If Payment is Successfully done after 5 min. Please do Charge
          </AlertDescription>
        </Alert>
      <div
        className="flex justify-between items-center bg-black text-white p-4 rounded-t-lg">
        <h1 className="text-xl font-semibold">Complaints</h1>
        {/* <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>My Wallet</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Suchit (AID - 2)</span>
          </div>
        </div> */}
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Transaction Details</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm">Show</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm">entries</span>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Utr</TableHead>
              <TableHead>Solution Details</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* When there's no data */}
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground">
                No Data Available in Table
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="p-4 border-t">
          <p className="text-sm text-muted-foreground">
            Showing 0 to 0 of 0 entries
          </p>
        </div>
      </div>
    </div>)
  );
}

