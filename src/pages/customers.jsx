import Crud from "./crud"

const inputs = [
    { type: 'text', name: 'firstname', title: 'First Name' },
    { type: 'text', name: 'lastname', title: 'Last Name' },
    { type: 'email', name: 'email', title: 'Email' },
    { type: 'password', name: 'passwd', title: 'Password' },
]
const fields = [
    { title: 'First Name', name: 'firstname' },
    { title: 'Last Name', name: 'lastname' },
    { title: 'Email', name: 'email' }
]
const missingFields = (data) => {
    data.id_default_group = 2
    data.id_lang = 2
    data.deleted = 0
    data.id_gender = 1
    data.newsletter = 0
    data.optin = 0
    data.outstanding_allow_amount = 0
    data.show_public_prices = 0
    data.id_risk = 0
    data.max_payment_days = 0
    data.active = 1
    data.is_guest = 1
    data.id_shop = 1
    data.id_shop_group = 1
    data.associations = { groups: { group: { id: 2 } } }
    return data
}
const Customers = () => {
    return <Crud type="customers" inputs={inputs} fields={fields} missingFields={missingFields}/>
}

export default Customers