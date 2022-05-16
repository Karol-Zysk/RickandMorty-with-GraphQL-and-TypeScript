import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER_INFO = gql`
  query GetCharacterInfo($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacterInfo = (id: number) => {
  const { data, loading, error } = useQuery(GET_CHARACTER_INFO, {
    variables: {
      id,
    },
  });

  return {
    error,
    data,
    loading,
  };
};
