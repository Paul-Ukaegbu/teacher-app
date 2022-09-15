import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name: string, percentage: number, grades: string){
    return { name, percentage, grades};
}

const studentData = [
    createData('Paul Ukaegbu', 97, 'A+'),
    createData('Peter Ukaegbu', 87, 'B+'),
    createData('Susan Fryer', 81, 'B-' ),
    createData('Michael Rohan', 60, 'D' ),
    createData('John Richards', 91, 'A'),
];

export default function Students() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Student Name</TableCell>
                        <TableCell align="right">Percentage</TableCell>
                        <TableCell align="right">Grades</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.percentage}%</TableCell>
                            <TableCell align="right">{row.grades}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
