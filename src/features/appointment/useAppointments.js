import { useQuery } from "@tanstack/react-query";
import { getAppointmentsApi } from "../../services/appointmentService";


export default function useAppointments() {
  const { isLoading, data } = useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointmentsApi,
  });

  const { appointments } = data || {};

  return { isLoading, appointments };
}
