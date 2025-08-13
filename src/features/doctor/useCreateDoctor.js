import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createDoctorApi } from "../../services/doctorService";

export default function useCreateDoctor(){
    const queryClient = useQueryClient()
    const {isPending: isCreating, mutate:createDoctor } = useMutation({
        mutationFn: createDoctorApi,
        onSuccess: (data)=> {
            toast.success(data.message)
            queryClient.invalidateQueries({ 
                queryKey: ["doctors"] 
            })
        },
        onError: (err)=> toast.error(err?.response?.data?.message)
    })

    return {isCreating, createDoctor}
}