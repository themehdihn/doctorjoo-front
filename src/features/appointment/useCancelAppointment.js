import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { cancelAppointmentAdminApi } from "../../services/appointmentService";

export default function useCancelAppointmentByAdmin(){
    const queryClient = useQueryClient()
    const {isPending: isCancelling, mutate: cancelAppointment} = useMutation({
        mutationFn: cancelAppointmentAdminApi,
        onSuccess: (data)=> {
            toast.success(data.message)

            queryClient.invalidateQueries({
                queryKey: ["appointments"]
            })
        },
        onError: (err) => toast.error(err?.response?.data?.message)
    })

    return {isCancelling, cancelAppointment}
}