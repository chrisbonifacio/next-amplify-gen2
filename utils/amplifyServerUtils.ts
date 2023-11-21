import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingReqRes } from "@aws-amplify/adapter-nextjs/api";
import { Schema } from "@/amplify/data/resource";
import config from "@/amplifyconfiguration.json";

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});

export const serverClient = generateServerClientUsingReqRes<Schema>({
  config,
});
