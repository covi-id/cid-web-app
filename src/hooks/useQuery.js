import { useLocation } from "react-router-dom";
import { parse } from "qs";

export default function useQuery() {
  return parse(useLocation().search, { ignoreQueryPrefix: true });
}
