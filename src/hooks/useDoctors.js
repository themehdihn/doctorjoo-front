import { useQuery } from "@tanstack/react-query";
import { getDoctorsApi } from "../services/doctorService";

export default function useDoctors() {
  const { isLoading, data } = useQuery({
    queryFn: getDoctorsApi,
    queryKey: ["doctors"],
    retry: false,
  });

  const { doctors } = data || {};

  return { isLoading, doctors };
}
