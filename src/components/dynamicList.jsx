

const DynamicList = ({fields = [], data = [], editAction, deleteAction}) => {
    return <table className="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                {fields.map((field,index) => {
                    return <th scope="col" key={index}>{field.title}</th>
                })}
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,index) => {
                return <tr key={index}>
                <td>{item.id}</td>
                {fields.map((field,index) => {
                    return <td key={index}>{item[field.name]}</td>
                })}
                <td onClick={() => {
                    if(editAction) editAction(item)
                }}>✏️</td>
                <td onClick={() => {
                    if(deleteAction) deleteAction(item)
                }}>🗑️</td>
            </tr>
            })}
        </tbody>
    </table>
}

export default DynamicList