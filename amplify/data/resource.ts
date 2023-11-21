import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      done: a.boolean().default(false),
      priority: a.enum(["low", "medium", "high"]),
    })
    .authorization([a.allow.owner(), a.allow.public().to(["read"])]),
  Blog: a
    .model({
      title: a.string().required(),
      posts: a.hasMany("Post"),
    })
    .authorization([a.allow.owner(), a.allow.public().to(["read"])]),
  Post: a
    .model({
      title: a.string().required(),
      content: a.string(),
      blog: a.belongsTo("Blog"),
      comments: a.hasMany("Comment"),
    })
    .authorization([a.allow.owner(), a.allow.public().to(["read"])]),
  Comment: a
    .model({
      content: a.string().required(),
      post: a.belongsTo("Post"),
    })
    .authorization([
      a.allow.owner(),
      a.allow.public().to(["read"]),
      a.allow.private().to(["read"]),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
