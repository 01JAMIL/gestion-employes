import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Container } from '@mui/system'
import { getEmployes } from '../features/employe/employeSlice'
import { useNavigate } from 'react-router-dom'
import { Box, CircularProgress, Typography } from '@mui/material'

const ListEmployes = () => {

    const { loading, employes } = useSelector((state: RootState) => state.Employe)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const handleClick = (id: string) => {
        navigate(`/employe/${id}`)
    }

    useEffect(() => {
        dispatch(getEmployes())
    }, [dispatch, employes.length])

    if (loading) {
        return (
            <div className='loading'>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        )
    }

    return (
        <Container maxWidth="lg">
            {
                employes.length > 0 ?
                    <React.Fragment>
                        <div className='title'>Liste des employés</div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">Nom</TableCell>
                                        <TableCell align="right">Prénom</TableCell>
                                        <TableCell align="right">Age</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Position</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {employes.map((employe, index) => (
                                        <TableRow
                                            hover
                                            style={{ cursor: 'pointer' }}
                                            key={index.toString()}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            onClick={() => handleClick(employe.id)}
                                        >
                                            <TableCell component="th" scope="row">
                                                {employe.id}
                                            </TableCell>
                                            <TableCell align="right">{employe.nom}</TableCell>
                                            <TableCell align="right">{employe.prenom}</TableCell>
                                            <TableCell align="right">{employe.age}</TableCell>
                                            <TableCell align="right">{employe.email}</TableCell>
                                            <TableCell align="right">{employe.position}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </React.Fragment> :

                    <Typography align="center" variant="h4" color="text.secondary">
                        Pas de données disponibles
                    </Typography>
            }
        </Container>
    )
}

export default ListEmployes