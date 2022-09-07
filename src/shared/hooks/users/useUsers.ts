import { useQuery } from "@tanstack/react-query";
import { getUsers } from "shared/services/api/requests/users";

const useUsers = (page: number) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5, // 5 seconds
  });
};

export { useUsers };