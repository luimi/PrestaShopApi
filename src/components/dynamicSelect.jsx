import { useEffect, useState } from "react"
import { listOf } from "../utils/requests"

const DynamicSelect = ({type,fields, display, name, id, onChange, value}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        listOf(type,fields, (data) => {
            setData(data)
        }, e => console.log(e))
    }, [])
    return <select className="form-select" aria-label="Default select example" value={value} id={id} name={name} onChange={onChange} required>
        <option value=""></option>
        {data.map((item,index) => {
            return <option value={item.id} key={index}>
                {display.map(field => item[field]).toString().replaceAll(","," ")}
            </option>
        })}
    </select>
}

export default DynamicSelect