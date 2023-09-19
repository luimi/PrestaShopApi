import Crud from "./crud";


const Addresses = () => {
    const inputs = [
        { type: 'select', name: 'id_customer', title: 'Customer', class:'customers', fields:'[id,firstname,lastname]', display:['firstname','lastname']},
        { type: 'text', name: 'alias', title: 'Alias' },
        { type: 'text', name: 'firstname', title: 'First Name' },
        { type: 'text', name: 'lastname', title: 'Last Name' },
        { type: 'text', name: 'address1', title: 'Address1' },
        { type: 'text', name: 'address2', title: 'Address2' },
        { type: 'number', name: 'postcode', title: 'Postcode' },
        { type: 'text', name: 'city', title: 'City' },
        
    ]
    const fields = [
        { title: 'Alias', name: 'alias' },
        { title: 'Firstname', name: 'firstname' },
        { title: 'Address1', name: 'address1' },
        { title: 'Address2', name: 'address2' },
        { title: 'City', name: 'city' },
        
    ]
    const missingFields = (data) => {
        data.id_manufacturer = 0
        data.id_supplier = 0
        data.id_warehouse = 0
        data.id_country = 69
        data.id_state = 0

        return data
    }
    return <Crud type="addresses" inputs={inputs} fields={fields} missingFields={missingFields}/>
}

export default Addresses