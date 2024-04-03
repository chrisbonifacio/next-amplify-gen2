"use client";

import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";

const Page = ({ user, signOut }: WithAuthenticatorProps) => {
  return (
    <div>
      <h1>Protected Page</h1>

      <h2>Welcome, {user?.username}!</h2>

      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default withAuthenticator(Page);
