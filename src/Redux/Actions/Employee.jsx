import { ActionList } from 'Redux/Constants/ActionList';
import {AddEmployeeHelper, DeleteEmployeeHelper} from "Redux/Providers";

export const addEmployee = (payload) => {
    return {
        type: ActionList.AddEmployee,
        data: AddEmployeeHelper(payload)
    }
};

export const deleteEmployee = (data) => {
    return {
        type: ActionList.DeleteEmployee,
        data: DeleteEmployeeHelper(data)
    }
}