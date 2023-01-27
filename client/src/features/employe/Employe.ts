export interface Employe {
    id: string
    nom: string
    prenom: string
    age: number
    email: string
    position: string
}

export interface InitialState {
    loading: boolean
    employe: Employe
    employes: Employe[]
    error: any
    success: boolean
}