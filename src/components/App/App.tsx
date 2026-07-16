import { students } from '../../data/data';
// import StudentItem from "../Student/Student";
import StudentList from '../StudentsList/StudentsList';
// const student = students[0];
export default function App() {
  // return <StudentItem student={student} />;
  return <StudentList students={students} />;
}
