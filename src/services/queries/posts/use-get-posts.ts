import { useQuery } from "@tanstack/react-query";
import api from "../../api/index";
import { type AxiosError } from "axios";
import { type Post, type QueryParams } from "../../types";
import { postsRoutes } from "../../api-routes/posts";

import { buildQueryString } from "../../formats";

export const useGetPosts = ({
  filter,
  search,
  pageNumber,
  pageSize,
}: QueryParams = {}) => {
  const queryParams: QueryParams = { filter, search, pageNumber, pageSize };
  const queryString = buildQueryString(queryParams);
  const { isLoading, data, error, refetch } = useQuery<
    { data: Post[]; totalPages: number; totalItems: number },
    AxiosError
  >({
    queryKey: ["posts", queryParams],
    queryFn: async () =>
      await api.get({
        url: `${postsRoutes.getPosts.path.replace("/:id", "")}${queryString}`,
        token: true,
        paginate: true,
      }),
    refetchOnWindowFocus: false,
  });
  return {
    isLoading,
    data: data?.data ?? [],
    totalPages: data?.totalPages ?? 1,
    totalItems: data?.totalItems ?? 0,
    error,
    refetch,
  };
};
