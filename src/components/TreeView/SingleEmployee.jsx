/* eslint-disable react/prop-types */
import EmployeeList from "./Employee-list.jsx";


const SingleEmployee = ({employee}) => {

   return (
      <li >

         <p>{`${employee.department} : ${employee.head}`}</p>
         {
            employee && employee.teams && employee.teams.length > 0 ?
               <EmployeeList list={employee.teams}/>
               : null
         }
      </li>);
}

export default SingleEmployee;