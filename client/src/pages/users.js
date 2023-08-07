import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from "@apollo/client";
import UserCard from '../containers/user-card';
import QueryResult from "../components/query-result";

const USERS = gql`
  query ListUsers {
    users {
      name
      age
      id
      thumbnail
      office
      photo
      taks {
        name
        description
      }
    }
}
`;

const Users = () => {
  const { loading, error, data } = useQuery(USERS);

  return(
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.users?.map((user) => (
          <UserCard key={user.id} user={user} />
          ))}
      </QueryResult>
    </Layout>
  );
};

export default Users;
