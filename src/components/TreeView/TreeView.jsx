
import EmployeeList from "./Employee-list.jsx";


const TreeView = ({wholeCompany=[]}) => {
   return (
      <div>
         <EmployeeList list={wholeCompany}/>
      </div>
   );
};

export default TreeView;