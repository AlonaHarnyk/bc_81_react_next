import Container from "@/components/Container/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <h3>Such page doesn&apos;t exist!</h3>
      <Link href="/">Go Home</Link>
    </Container>
  );
}
