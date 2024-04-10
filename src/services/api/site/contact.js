import { useMutation } from "@tanstack/react-query";
import { createApi } from "../api";
import { siteUrls } from "./urls";

export function useMutationSendContact() {
  return useMutation({
    mutationFn: (contact) => createApi(siteUrls.send.contact, contact),
  });
}
