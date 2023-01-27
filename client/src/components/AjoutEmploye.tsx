import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { Container } from '@mui/system'
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { resetState, saveEmploye } from '../features/employe/employeSlice'
interface Form {
    id: string
    nom: string
    prenom: string
    age: number
    email: string
    position: string
}

const AjoutEmploye = () => {

    const { loading, error, success } = useSelector((state: RootState) => state.Employe)

    const [form, setForm] = useState<Form>({
        id: '',
        nom: '',
        prenom: '',
        age: null,
        email: '',
        position: ''
    })

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(saveEmploye(form))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.name === "age" ? parseInt(e.target.value) : e.target.value
        })
    }

    useEffect(() => {
        if (success) {
            dispatch(resetState())
            navigate('/', { replace: true })
        }
    }, [success, navigate, dispatch])

    return (
        <Container maxWidth="xs">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%', backgroundColor: 'blue' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <FormControl error={(error && error.idError) ? true : false} variant="standard" fullWidth style={{ marginBottom: '15px' }}>
                    <InputLabel htmlFor="identifiant">ID</InputLabel>
                    <Input
                        id="identifiant"
                        name="id"
                        type="text"
                        defaultValue={form.id}
                        aria-describedby="identifiant-text"
                        onChange={handleChange}
                    />
                    {
                        error && error.idError ?
                            <FormHelperText id="identifiant-text"> {error.idError} </FormHelperText> :
                            null
                    }
                </FormControl>

                <FormControl error={(error && error.nomError) ? true : false} variant="standard" fullWidth style={{ marginBottom: '15px' }}>
                    <InputLabel htmlFor="nom">Nom</InputLabel>
                    <Input
                        id="nom"
                        name="nom"
                        type="text"
                        defaultValue={form.nom}
                        aria-describedby="nom-text"
                        onChange={handleChange}
                    />
                    {
                        error && error.nomError ?
                            <FormHelperText id="nom-text"> {error.nomError} </FormHelperText> :
                            null
                    }
                </FormControl>

                <FormControl error={(error && error.prenomError) ? true : false} variant="standard" fullWidth style={{ marginBottom: '15px' }}>
                    <InputLabel htmlFor="prenom">Prénom</InputLabel>
                    <Input
                        id="prenom"
                        name="prenom"
                        type="text"
                        defaultValue={form.prenom}
                        aria-describedby="prenom-text"
                        onChange={handleChange}
                    />
                    {
                        error && error.prenomError ?
                            <FormHelperText id="prenom-text"> {error.prenomError} </FormHelperText> :
                            null
                    }
                </FormControl>

                <FormControl error={(error && error.ageError) ? true : false} variant="standard" fullWidth style={{ marginBottom: '15px' }}>
                    <InputLabel htmlFor="age">Age</InputLabel>
                    <Input
                        id="age"
                        name="age"
                        type="number"
                        minRows={0}
                        defaultValue={form.age}
                        aria-describedby="age-text"
                        onChange={handleChange}
                    />
                    {
                        error && error.ageError ?
                            <FormHelperText id="age-text"> {error.ageError} </FormHelperText> :
                            null
                    }
                </FormControl>

                <FormControl error={(error && error.emailError) ? true : false} variant="standard" fullWidth style={{ marginBottom: '15px' }}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        defaultValue={form.email}
                        aria-describedby="email-text"
                        onChange={handleChange}
                    />
                    {
                        error && error.emailError ?
                            <FormHelperText id="email-text"> {error.emailError} </FormHelperText> :
                            null
                    }
                </FormControl>

                <FormControl error={(error && error.positionError) ? true : false} variant="standard" fullWidth style={{ marginBottom: '15px' }}>
                    <InputLabel htmlFor="position">Position</InputLabel>
                    <Input
                        id="position"
                        name="position"
                        type="text"
                        defaultValue={form.position}
                        aria-describedby="position-text"
                        onChange={handleChange}
                    />
                    {
                        error && error.positionError ?
                            <FormHelperText id="position-text"> {error.positionError} </FormHelperText> :
                            null
                    }
                </FormControl>


                <Box
                    component="div"
                    display="flex"
                    marginTop="20px"
                >
                    <Button variant="contained" disabled={loading} color="primary" type='submit' fullWidth>
                        Ajouter
                    </Button>
                </Box>
            </Box>
        </Container >
    )
}

export default AjoutEmploye