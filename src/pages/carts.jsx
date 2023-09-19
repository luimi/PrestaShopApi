import Crud from "./crud"

const inputs = [
    { type: 'select', name: 'id_currency', title: 'Currency', class: 'currencies', fields: '[id,name]', display: ['name'] },
    { type: 'select', name: 'id_lang', title: 'Language', class: 'languages', fields: '[id,name]', display: ['name'] },
    // notRequired
    { type: 'select', name: 'id_address_delivery', title: 'Address delivery', class: 'addresses', fields: '[id,alias]', display: ['alias'] },
    { type: 'select', name: 'id_address_invoice', title: 'Address invoice', class: 'addresses', fields: '[id,alias]', display: ['alias'] },
    { type: 'select', name: 'id_customer', title: 'Customer', class: 'addresses', fields: '[id,firstname,lastname]', display: ['firstname','lastname'] },
]
const fields = []
const missingFields = (data) => {
    data.associations = {
        cart_rows: {
            cart_row: {
                id_product: 21,
                id_product_attribute: 0,
                id_address_delivery: 8,
                quantity: 1
            }
        }
    }
    return data
}

const Carts = () => {
    return <Crud type="carts" inputs={inputs} fields={fields} missingFields={missingFields} />
}
export default Carts