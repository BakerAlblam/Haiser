"use client"
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, getKeyValue} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Admin = () => {

    interface Data {
        _id: string
        email: string
        marke: string
        modell: string
        erstzulassung: number
        treibstoff: string
        getriebe: string
        kilometerstand: number
        antrieb: string
        fahrzeugzustand: string
        ps: number
        plz: string
        price: number
        telefon: number,
        postort: number
      }

    const { data } = useQuery({
        queryKey: ['contact'],
        queryFn: async () => {
          const res = await axios.get('http://localhost:3000/api/all')
          console.log(res.data.contacts);
          return res.data.contacts
        }  
      })

      

  return (
    <Table aria-label="Example static collection table" layout="auto" color="danger" isStriped >
      <TableHeader>
        <TableColumn>Marke</TableColumn>
        <TableColumn>Modell</TableColumn>
        <TableColumn>erstz</TableColumn>
        <TableColumn>KM</TableColumn>
        <TableColumn>ant</TableColumn>
        <TableColumn>fahrz</TableColumn>
        <TableColumn>PS</TableColumn>
        <TableColumn>Trei</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Tf</TableColumn>
        <TableColumn>Get.</TableColumn>
      </TableHeader>
      <TableBody>
        {data?.map((d: Data) => (
            <TableRow key={d._id}>
            <TableCell>{d.marke}</TableCell>
            <TableCell>{d.modell}</TableCell>
            <TableCell>{d.erstzulassung}</TableCell>
            <TableCell>{d.kilometerstand}</TableCell>
            <TableCell>{d.antrieb}</TableCell>
            <TableCell>{d.fahrzeugzustand}</TableCell>
            <TableCell>{d.ps}</TableCell>
            <TableCell>{d.treibstoff}</TableCell>
            <TableCell>{d.email}</TableCell>
            <TableCell>{d.telefon}</TableCell>
            <TableCell>{d.getriebe}</TableCell>
          </TableRow>
          
        ))}
        
      </TableBody>
    </Table>
  )
}

export default Admin
