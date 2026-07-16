import { students } from '../../data/data';
import Student from '../Student/Student';
const student = students[0];
export default function App() {
  return <Student student={student} />;
}
console.log(students);
