import { useQuery } from "@tanstack/react-query";
import { getUsers } from "shared/services/api/requests/users";

const useUsers = () => {
  return useQuery(["users"], getUsers);
};

export { useUsers };