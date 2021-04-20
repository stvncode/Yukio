import axios from "axios"
import { IProfile } from "../types/maintypes"

export const updateProfile = (data: IProfile) => {
    const newProfile: IProfile = {
        firstName: data.firstName,
        lastName: data.lastName
    }
    axios.post('http://localhost:4000/updateProfile', newProfile, { withCredentials: true })
}

export const profilAccepted = () => {
    axios.post('http://localhost:4000/profilAccepted', undefined, { withCredentials: true })
}