import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function RecentSales() {
  return (
    <Table>
     
      <TableHeader>
        <TableRow className="border-t">
          <TableHead className="text-gray-400">ID</TableHead>
          <TableHead className="text-gray-400">Date</TableHead>
          <TableHead className="text-gray-400">Name</TableHead>
          <TableHead className="text-gray-400">Type</TableHead>
          <TableHead className="text-gray-400">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody >
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="border-none ">
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell >{invoice.totalAmount}</TableCell>
            <TableCell >{invoice.totalAmount}</TableCell>
            <TableCell className="text-left">
              <Link to={`/enquiries/${invoice.invoice}`} className="bg-gray-200 p-1.5 rounded">View</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
