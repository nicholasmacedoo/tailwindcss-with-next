import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const payments = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  // ...
]
export default function Leads() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Leads</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.email}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
