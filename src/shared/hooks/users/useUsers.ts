import { useQuery } from "@tanstack/react-query";
import { getUsers } from "shared/services/api/requests/users";

const useUsers = (page: number) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export { useUsers };