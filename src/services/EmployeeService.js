//import axios from 'axios';
import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://159.122.177.25:32689/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

}

export default new EmployeeService()
