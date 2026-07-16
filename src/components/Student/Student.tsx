import type { Student } from "../../types";

interface StudentProps {
  student: Student;
}

export default function StudentItem({ student }: StudentProps) {

  return (
    <div>
      <img src={student.avatar} alt={student.name} />
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}
