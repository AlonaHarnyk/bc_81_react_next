import Image from 'next/image';
// import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Image src="/cat.jpg" alt="Cat image" width={300} height={300} />
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg"
        alt="Cat image"
        width={400}
        height={300}
      />
    </div>
  );
}
