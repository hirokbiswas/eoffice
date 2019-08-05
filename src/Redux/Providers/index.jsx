const AddEmployeeHelper = ({name, age, employees}) => {
    const newItem = {name, age};
    newItem.id = Math.floor(Math.random() * 1000);
    newItem.age = parseInt(newItem.age);
    const data = [...employees, newItem]
    return data
};

const DeleteEmployeeHelper = ({id, employees}) => {
    return employees.filter((employee, index) => employee.id !== id)
    
}

export {AddEmployeeHelper, DeleteEmployeeHelper};
