import SingleEmployee from "./SingleEmployee.jsx";

const EmployeeList = ({list=[]}) => {
   console.log("list value is: " ,list)
   return (
      <ul className="text-2xl">
         {list && list?.length  ?
            list.map((currEmp,i)=> <SingleEmployee key={i} employee={currEmp}/>)
            : null}
      </ul>
   );
};

export default EmployeeList;