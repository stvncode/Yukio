import axios from "axios"
import { IFood } from "../types/maintypes"

export const createFood = (data: string) => {
    const newFood: IFood = {
        types: data
    }
    axios.post('http://localhost:4000/createFood', newFood)
}