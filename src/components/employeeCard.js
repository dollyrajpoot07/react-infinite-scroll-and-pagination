import styles from './reactInfiniteScrollAndPagination.module.css';

const EmployeeCard = ({ emp }) => (
  <div className={styles.card}>
    <h3>{emp.name} <span>({emp.department})</span></h3>
    <p><b>ID:</b> {emp.employeeId}</p>
    <p><b>DOB:</b> {emp.dob}</p>
    <p><b>Address:</b> {emp.address}</p>
    <p><b>NIC:</b> {emp.nic}</p>
    <p><b>Bank #:</b> {emp.bankNumber}</p>
    <p><b>Team:</b> {emp.team}</p>
    <p><b>Nominee:</b> {emp.nominee}</p>
    <p><b>Salary:</b> ₹{emp.salary.toLocaleString()}</p>
  </div>
);

export default EmployeeCard;
