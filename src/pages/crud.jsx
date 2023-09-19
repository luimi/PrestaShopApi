import { useEffect, useState } from "react"
import DynamicForm from "../components/dynamicForm"
import DynamicList from "../components/dynamicList"
import { json2xml } from "../utils/converter"
import { _delete, _post, _get, _put } from "../utils/requests"

const Crud = ({type, inputs = [], fields = [], missingFields}) => {
    const [data, setData] = useState([])
    const [selected, setSelected] = useState()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        _get(type, (data) => setData(data), (error) => console.log("error"))
    }
    const save = (data) => {
        if (!data.id && missingFields) {
            data = missingFields(data)
        }
        const xml = json2xml({ prestashop: { customer: data } })
        if (!data.id) _post(type, xml, () => {
            getData()
        }, error => console.log(error))
        else _put(type, data.id, xml, () => {
            getData()
        }, error => console.log(error))
    }
    return <>
        <DynamicForm inputs={inputs} saveAction={save} old={selected} />
        <DynamicList fields={fields} data={data} editAction={(item) => {
            setSelected(item)
        }} deleteAction={(item) => {
            _delete(type, item.id, () => {
                getData()
            }, e => console.log(e))
        }} />
    </>
}

export default Crud