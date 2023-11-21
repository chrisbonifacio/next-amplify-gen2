import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource.js";
import { data } from "./data/resource.js";
import * as cognito from "aws-cdk-lib/aws-cognito";

const backend = defineBackend({
  auth,
  data,
});

const customResourceStack = backend.createStack("AmplifyGen2CustomResources");

new cognito.CfnUserPoolGroup(customResourceStack, "AmplifyGen2AdminGroup", {
  userPoolId: backend.resources.auth.resources.userPool.userPoolId,
  groupName: "Admin",
});
