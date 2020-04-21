import React, { memo, useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import useForm from '../../hooks/useForm';
import { Heading, UnorderedList, ListItem, CodePane, indentNormalizer } from 'spectacle';
import { css } from 'emotion';

const containerStyles = css`
  display: flex;
  flex-direction: row;
`;

const inputStyles = css`
  font-size: 30px;
`;

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

const code = `<Query query={\`https://pokeapi.co/api/v2/pokemon/\${pokemonName}\`}>
  {({ loading, data }) => {
    if (loading) return "Loading..."

    const { name, weight, sprites: { front_default } } = data;
    return <div>
      <UnorderedList>
        <ListItem>Name: {name}</ListItem>
        <ListItem>Weight: {weight}</ListItem>
      </UnorderedList>
      <img src={front_default} />
    </div>
  }}
</Query>`


function PokemonExample() {
  const [pokemonName, setPokemonName] = useState('charmander');

  const { formData, updateField } = useForm({
    name: 'charmander'
  });

  return (
    <>
      <Heading>Pokemon Example</Heading>
      <div className={containerStyles}>
        <CodePane language="javascript" autoFillHeight>
          {indentNormalizer(code)}
        </CodePane>
        <div>
          <form onSubmit={e => { e.preventDefault(); e.stopPropagation(); setPokemonName(formData.name) }}>
            <input className={inputStyles} name="name" value={formData.name || ''} onChange={updateField} />
          </form>
          <Query query={`https://pokeapi.co/api/v2/pokemon/${pokemonName}`}>
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
      </div>
    </>
  );
}

export default memo(PokemonExample);