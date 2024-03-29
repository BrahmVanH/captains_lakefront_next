import React from "react";
import { graphqlClient } from "@/lib/graphql";
import { GET}

export const getServerSideProps = async () => {
  const client = graphqlClient();
  const data = client.query({GET_})
}