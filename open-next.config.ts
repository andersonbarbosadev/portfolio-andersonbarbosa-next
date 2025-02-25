// default open-next.config.ts file created by @opennextjs/cloudflare

import cache from "@opennextjs/cloudflare/kv-cache";
import incrementalCache from "@opennextjs/cloudflare/kv-cache";
import memoryQueue from "@opennextjs/cloudflare/memory-queue";

const config = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      tagCache: "dummy",

      incrementalCache: () => incrementalCache,
      queue: () => memoryQueue,
    },
  },

  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
    },
  },
};

export default config;
