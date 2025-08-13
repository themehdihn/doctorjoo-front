import { useQuery } from "@tanstack/react-query";
import { getUserListApi } from "../../services/authService";


export default function useUsers(){
    const {isLoading, data} = useQuery({
        queryFn: getUserListApi,
        queryKey: ["users"]
    })

    const {users} = data || {}

    return {isLoading, users}
}