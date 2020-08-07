import axios from 'axios'

export const instance = axios.create({
    baseURL: "http://www.filltext.com/",
})

export type DataType = {
    "id": number,
    "firstName": string
    "lastName": string
    "email": string
    "phone": string
    "address": {
        "streetAddress": string
        "city": string
        "state": string
        "zip": string
    },
    "description": string
}

export const tableApi = {
    getItems(rows: number, delay: number) {
        return instance.get(`?rows=${rows}&id={number|1000}&firstName={firstName}&delay=${delay}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
            .then(res => res.data)
    },
}
