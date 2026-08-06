"use client";

import Container from "@/components/Container/Container";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Loading from "@/components/Loading/Loading";
import { getContactById } from "@/lib/services/contactsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function ContactDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: contact,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
    refetchOnMount: false,
  });

  return (
    <Container>
      {isLoading && <Loading />}
      {isError && <ErrorMessage />}
      {contact && (
        <>
          <h3>{contact.name}</h3>
          <p>City: {contact.city}</p>
          <p>Job: {contact.job}</p>
          <p>Number: {contact.number}</p>
          <p>Email: {contact.email}</p>
          <p>Has work: {contact.hasWork ? "yes" : "no"} </p>
          <p>Sex: {contact.sex}</p>
          <p>Hobbies: {contact.hobbies.join(", ")}</p>
          <p>Description: {contact.description}</p>
        </>
      )}
    </Container>
  );
}
