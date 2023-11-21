import React from "react";
import {
  runWithAmplifyServerContext,
  serverClient,
} from "@/utils/amplifyServerUtils";
import { type GetServerSideProps } from "next";
import { listBlogs } from "@/ui-components/graphql/queries";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let blogs;

  try {
    blogs = await runWithAmplifyServerContext({
      nextServerContext: { request: req, response: res },
      operation: async (contextSpec) => {
        console.log("fetching blogs");
        // const blogs = await serverClient.graphql(contextSpec, {
        //   query: listBlogs,
        // });

        const blogs = await serverClient.models.Blog.list(contextSpec);

        console.log({ blogs });

        return blogs;
      },
    });
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      ...(blogs && { blogs }),
    },
  };
};

const Blogs = (props: any) => {
  console.log(props);

  return (
    <div>
      <h1>Blogs</h1>
    </div>
  );
};

export default Blogs;
