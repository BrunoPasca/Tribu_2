import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Typography } from '@mui/material';
import BorrarHoraModal from './borrarHoraModal';
import Edit from '@mui/icons-material/Edit';
import EditarHoraModal from './editarHoraModal';
import styles from '../../styles/recursos.module.css'

export default function MuiTable(props: any) {
    // Pop up para editar las horas de una tarea
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const legajo = props.legajo

    const inicio = props.fechaInicio
    const fin = props.fechaFin

    /* HAY QUE USAR UN ENDPOINT */
    const reportes = [
        // Formato fecha dd/MM/yyyy
        {
            id: "1",
            legajo_empleado: "1",
            id_tarea: "3",
            tarea: 'Fix',
            cant_horas: "5",
            fecha: "7/12/2022",
            estado: "abierto",
        },
        {
            id: "2",
            legajo_empleado: "3",
            id_tarea: "4",
            tarea: 'Testing',
            cant_horas: "2",
            fecha: "10/10/2022",
            estado: "abierto",
        },
        {
            id: "4",
            legajo_empleado: "22",
            id_tarea: "5",
            tarea: 'Prototipado',
            cant_horas: "2",
            fecha: "9/12/2022",
            estado: "abierto",
        }
    ]

    const [horas, setHoras] = React.useState([])

    useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/horas")
            .then((res) => res.json())
            .then((data) => {
                setHoras(data)
            })
    }, [])


    // Formatea 'dd/mm/yyyy' a 'yyyy-mm-dd' (formato reconocido por Date)
    function modificarFormatoFecha(date: string) {
        const [day, month, year] = date.split('/');
        // @ts-ignore
        return new Date(+year, month - 1, +day);
    }

    function DateBetweenTwoDates(fromDate: string, toDate: string, givenDate: string) {
        const start = modificarFormatoFecha(fromDate);
        const end = modificarFormatoFecha(toDate);
        const date = modificarFormatoFecha(givenDate);

        return (start <= date && date <= end);
    }

    return (
        <TableContainer component={Paper} sx={{ borderRadius: "2rem" }}>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
                align="center"
            >
                Tareas Cargadas <br></br> {props.fechaInicio} - {props.fechaFin}
            </Typography>
            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">ID Tarea</TableCell>
                        <TableCell align="center">Tarea</TableCell>
                        <TableCell align="center">Fecha</TableCell>
                        <TableCell align="center">Horas</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {horas.map((hora) => (
                        <TableRow
                            key={hora["id"]}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{hora["id"]}</TableCell>
                            <TableCell align="center">{hora["id_tarea"]}</TableCell>
                            <TableCell align="center">{hora["tarea"]}</TableCell>
                            <TableCell align="center">{hora["fecha"]}</TableCell>
                            <TableCell align="center">{hora["cant_horas"]}</TableCell>
                            <TableCell padding="none" align="right">
                                <IconButton onClick={handleOpenDelete}><DeleteIcon /></IconButton>
                                <BorrarHoraModal isOpen={openDelete} setOpen={setOpenDelete} reporteId={hora["id"]}></BorrarHoraModal>
                            </TableCell>
                            <TableCell padding="none">
                                <IconButton onClick={handleOpenEdit}><EditIcon /></IconButton>
                                <EditarHoraModal isOpen={openEdit} setOpen={setOpenEdit} reporteId={hora["id"]}
                                    tareaId={hora["id_tarea"]} cantHoras={hora["cant_horas"]} fecha={hora["fecha"]}>
                                </EditarHoraModal>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}