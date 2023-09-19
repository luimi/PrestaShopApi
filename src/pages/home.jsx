import { useEffect, useState } from "react"
import { getSchema } from "../utils/requests"

const Home = () => {

    const [config, setConfig] = useState({})
    const [schemas, setSchemas] = useState([])

    useEffect(() => {
        const localConfig = JSON.parse(localStorage.getItem("config"))
        if (localConfig) setConfig(localConfig)
    }, [])

    const inputChange = (e) => {
        const { name, value } = e.target
        const _config = { ...config, [name]: value }
        localStorage.setItem("config", JSON.stringify(_config))
        setConfig(_config)
    }

    const connect = () => {
        getSchema((data) => {
            setSchemas(data)
        }, () => {
            console.log("error")
        })
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="mb-3 col-12 col-lg-6">
                    <label htmlFor="server" className="form-label">Server</label>
                    <input type="text" className="form-control" id="server" name="server" placeholder="https://server.com" value={config.server} onChange={inputChange} />
                </div>
                <div className="mb-3  col-12 col-lg-6">
                    <label htmlFor="apikey" className="form-label">ApiKey</label>
                    <input type="text" className="form-control" id="apikey" name="apikey" placeholder="A7A5H2ZM7S4W68D2TLF7FCYG2GG...." value={config.apikey} onChange={inputChange} onPaste={inputChange} />
                </div>
            </div>
        </div>
        <nav className="navbar bg-body-tertiary mt-5">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Available API</span>
                <button className="btn btn-outline-success d-flex" type="button" onClick={connect}>Connect</button>
            </div>
        </nav>
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Class</th>
                        <th scope="col">Get</th>
                        <th scope="col">Post</th>
                        <th scope="col">Put</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {schemas.map((schema, index) => {
                        return <tr key={index}>
                            <th scope="row">{schema.name}</th>
                            <td>{schema.get}</td>
                            <td>{schema.post}</td>
                            <td>{schema.put}</td>
                            <td>{schema.delete}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>
}

export default Home