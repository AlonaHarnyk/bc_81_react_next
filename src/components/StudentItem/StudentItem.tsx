import type { Student } from '../../types';

interface StudentProps {
  student: Student;
}

export default function StudentItem({
  student: { avatar, age, name, course, isOnline },
}: StudentProps) {
  return (
    <>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      {/* <p>Is online: isOnline ? "yes" : "no"}</p> */}
      {/* {isOnline ? <p> Online </p> : <p> Offline </p>} */}
      {isOnline && <p>User is online</p>}
    </>
  );
}
