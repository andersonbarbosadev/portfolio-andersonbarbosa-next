import { useMutation } from "@tanstack/react-query"
import { siteUrls } from "./urls"
import { createApi } from "../api"

export function useMutationSendContact() {
  return useMutation({
    mutationFn: (contact) => createApi(siteUrls.send.contact, contact),
  })
}
