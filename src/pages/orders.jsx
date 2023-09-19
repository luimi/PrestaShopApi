import Crud from "./crud"

const inputs = [
    { type: 'select', name: 'id_address_delivery', title: 'Address delivery', class: 'addresses', fields: '[id,alias]', display: ['alias'] },
    { type: 'select', name: 'id_address_invoice', title: 'Address invoice', class: 'addresses', fields: '[id,alias]', display: ['alias'] },
    { type: 'select', name: 'id_cart', title: 'Cart', class: 'carts', fields: '[id]', display: ['id'] },
    { type: 'select', name: 'id_currency', title: 'Currency', class: 'currencies', fields: '[id,name]', display: ['name'] },
    { type: 'select', name: 'id_lang', title: 'Language', class: 'languages', fields: '[id,name]', display: ['name'] },
    { type: 'select', name: 'id_customer', title: 'Customer', class: 'addresses', fields: '[id,firstname,lastname]', display: ['firstname','lastname'] },
    { type: 'select', name: 'id_carrier', title: 'Carrier', class: 'carriers', fields: '[id,name]', display: ['name'] },
    { type: 'text', name: 'payment', title: 'Payment'},
    { type: 'number', name: 'total_paid', title: 'Total Paid'},
    { type: 'number', name: 'total_paid_real', title: 'Total Paid Real'},
    { type: 'number', name: 'total_products', title: 'Total products'},
    { type: 'number', name: 'total_products_wt', title: 'Total products wt'},
    { type: 'number', name: 'conversion_rate', title: 'Conversion rate'},
    // notRequired
    
    
    
]
const fields = [
    { title: 'Date Add', name: 'date_add' },
    { title: 'CustomerId', name: 'id_customer' },
]
const missingFields = (data) => {
    data.associations = {
        order_rows: {
            order_row: {
                product_id: 21,
                product_attribute_id: 0,
                product_quantity: 1,
            }
        }
    }
    return data
}

const Orders = () => {
    return <Crud type="orders" inputs={inputs} fields={fields} missingFields={missingFields} />
}
export default Orders