import type { Student } from '../../types';
import StudentItem from '../StudentItem/StudentItem';
import css from './StudentsList.module.css';

interface StudentProps {
  students: Student[];
}

export default function StudentList({ students }: StudentProps) {
  return (
    <ul className={css.studentList}>
      {students.map(item => (
        <li className={css.studentItem} key={item.id}>
          {/* <h2>{item.name}</h2>
          <p>{item.course}</p> */}
          <StudentItem student={item} />
        </li>
      ))}
    </ul>
  );
}
