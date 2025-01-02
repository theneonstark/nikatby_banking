import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DeveloperDashboard() {
  return (
    (<div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Developer Tools</h1>
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
          API DOCUMENTS
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {/* API Tokens Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-black">
            <CardTitle className="text-xl font-bold text-white">Api Tokens</CardTitle>
            <Button className="bg-red-500 hover:bg-red-600">
              + GENERATE TOKEN
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-end gap-2 mb-4">
              <span className="text-sm">Show</span>
              <Select defaultValue="10">
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm">entries</span>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Partner Id</TableHead>
                  <TableHead>Api Key</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground">
                    No Data Available In Table
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="text-sm text-muted-foreground mt-4">
              Showing 0 to 0 of 0 entries
            </div>
          </CardContent>
        </Card>

        {/* Whitelisted IP Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-black">
            <CardTitle className="text-xl font-bold text-white">Whitelisted IP</CardTitle>
            <Button className="bg-red-500 hover:bg-red-600">
              + NEW IP
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-end gap-2 mb-4">
              <span className="text-sm">Show</span>
              <Select defaultValue="10">
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm">entries</span>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>IP</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2} className="text-center text-muted-foreground">
                    No Data Available In Table
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="text-sm text-muted-foreground mt-4">
              Showing 0 to 0 of 0 entries
            </div>
          </CardContent>
        </Card>
      </div>
    </div>)
  );
}

