import React, { memo, useState, useEffect } from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function Query({ query, children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(query).then(res => res.json()).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [query])

  return children({ loading, data })
}


function PokemonExample() {
  return (
    <>
      <Heading>Pokemon Example</Heading>
      <div>
        <Query query="https://pokeapi.co/api/v2/pokemon/ditto">
          {({ loading, data }) => {
            if (loading) return "Loading..."

            const { name, weight, sprites: { front_default } } = data;
            return <div>
              <UnorderedList>
                <ListItem>Name: {name}</ListItem>
                <ListItem>Weight: {weight}</ListItem>
              </UnorderedList>
              <img src={front_default} alt={`pokemon ${name}`} style={{ height: '60px' }} />
            </div>
          }}
        </Query>
      </div>
    </>
  );
}

export default memo(PokemonExample);