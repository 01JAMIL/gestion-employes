import React, { useEffect } from 'react'
import { Container } from '@mui/system'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { CircularProgress } from '@mui/material'
import { getEmployeById } from '../features/employe/employeSlice'
import { useParams } from 'react-router-dom'
const Employe = () => {
    const { loading, employe } = useSelector((state: RootState) => state.Employe)
    const dispatch = useDispatch<AppDispatch>()
    const { id } = useParams()
    useEffect(() => {
        dispatch(getEmployeById(id))
    }, [dispatch, id])

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
        <div className='page'>
            {
                employe ?
                    <Container maxWidth="xs">
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 25, fontWeight: 'bold', marginBottom: '20px' }} align="center" color="black" gutterBottom>
                                    Employé
                                </Typography>
                                <Typography variant="h5" align='center' component="div">
                                    {employe.nom.toUpperCase() + " " + employe.prenom}
                                </Typography>
                                <Typography variant="h6" align='center' component="div">
                                    {employe.age.toString() + " ans"}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} align="center" color="text.secondary">
                                    {employe.position}
                                </Typography>
                                <Typography variant="body2" align='center'>
                                    {employe.email}
                                </Typography>

                            </CardContent>
                        </Card>
                    </Container> :
                    null}
        </div>
    )
}

export default Employe