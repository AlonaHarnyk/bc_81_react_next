import { useQuery } from "@tanstack/react-query"
import { getContacts } from "../../services/contactsApi"

export default function Contacts(){
    const {data, isError, isLoading} = useQuery({
        queryKey: ['contacts'],
        queryFn: getContacts,
    })
    console.log(data);
    
    return <p>Contacts</p>
}

