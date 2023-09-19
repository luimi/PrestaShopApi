import { useEffect, useState } from "react"
import DynamicSelect from "./dynamicSelect"

const DynamicForm = ({ inputs = [], old , saveAction}) => {
    const [data, setData] = useState(old?old:{})

    useEffect(()=>{
        if(old) setData(old)
    },[old])
    const inputChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }
    const save = (event) => {
        event.preventDefault()
        if(saveAction) saveAction(data)
        clear()
    }
    const clear = () => {
        const empty = {}
        inputs.forEach(input => {
            empty[input.name] = ''
        })
        setData(empty)
    }
    const getInput = (input) => {
        switch(input.type) {
            case 'password':
            case 'email':
            case 'number':
            case 'text':
                return <input type={input.type} className="form-control" name={input.name} id={input.name} value={data[input.name]} onChange={inputChange} required />
            case 'select':
                return <DynamicSelect type={input.class} fields={input.fields} display={input.display} id={input.name} name={input.name} onChange={inputChange} value={data[input.name]}/>
            default:
                return <></>
        }
    }
    return <div className="card">
        <div className="card-header">
            <div className="row">
                <div className="col">
                    <h3>{data.id?"Edit":"New"}</h3>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary me-md-2" type="button" onClick={clear}>New</button>
                </div>
            </div>
            
        </div>
        <div className="card-body">
            <form onSubmit={save}>
                <div className="container">
                    <div className="row">
                        {inputs.map((input, index) => {
                            return <div className={`mb-3 col-sm-6 col-md-${input.size ? input.size : '3'}`} key={index}>
                                <label htmlFor={input.name} className="form-label">{input.title}</label>
                                {getInput(input)}
                            </div>
                        })}
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary me-md-2" type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

}

export default DynamicForm