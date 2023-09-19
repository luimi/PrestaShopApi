import axios from "axios"

export const getSchema = async (success, error) => {
    const config = getConfig()
    try {
        const result = await axios.get(`${config.server}/api`, getHeaders(config))
        const schemas = []
        const xml = new DOMParser().parseFromString(result.data, "text/xml")
        const descriptions = xml.querySelectorAll("description")
        descriptions.forEach(description => {
            const schema = description.parentElement
            schemas.push({
                name: schema.tagName,
                get: schema.getAttribute("get"),
                put: schema.getAttribute("put"),
                post: schema.getAttribute("post"),
                delete: schema.getAttribute("delete"),
            })
        })
        if (success) success(schemas)
    } catch (e) {
        if (error) error(e)
    }
}
export const _get = (type, success, error) => {
    request("get", `/api/${type}?output_format=JSON&display=full`, type, undefined, success, error)
}
export const _post = (type, data, success, error) => {
    request("post", `/api/${type}?output_format=JSON`, type, data, success, error)
}
export const _put = (type, id, data, success, error) => {
    request("put", `/api/customers/${id}?output_format=JSON`, type, data, success, error)
}
export const _delete = (type, id, success, error) => {
    request("delete", `/api/customers/${id}?output_format=JSON`, type, undefined, success, error)
}
export const listOf = (type, fields, success, error) => {
    request("get", `/api/${type}?output_format=JSON&display=${fields}`, type, undefined, success, error)
}

const request = async (method, path, type, data, success, error) => {
    const config = getConfig()
    const configRequest = {
        method: method,
        url: `${config.server}${path}`,
        headers: {
            "Authorization": `Basic ${btoa(`${config.apikey}:`)}`
        }
    }
    if (data) configRequest.data = data
    try {
        const result = await axios(configRequest)
        if (success) success(result.data[type])
    } catch (e) {
        if (error) error(e)
    }
}

const getHeaders = (config) => {
    return { headers: { "Authorization": `Basic ${btoa(`${config.apikey}:`)}` } }
}
const getConfig = () => {
    return JSON.parse(localStorage.getItem("config"))
}
