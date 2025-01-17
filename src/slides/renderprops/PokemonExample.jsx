import React, { memo, useState, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { Heading, UnorderedList, ListItem, CodePane, indentNormalizer } from 'spectacle';
import { css } from 'emotion';

const containerStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
      <img src={front_default} />
      <ul>
        <li>Name: {name}</li>
        <li>Weight: {weight}</li>
      </ul>
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
      <CodePane language="javascript" autoFillHeight>
        {indentNormalizer(code)}
      </CodePane>
      <div className={containerStyles}>
        <form onSubmit={e => { e.preventDefault(); e.stopPropagation(); setPokemonName(formData.name) }}>
          <input className={inputStyles} name="name" value={formData.name || ''} onChange={updateField} />
        </form>
        <Query query={`https://pokeapi.co/api/v2/pokemon/${pokemonName}`}>
          {({ loading, data }) => {
            if (loading) return "Loading..."

            const { name, weight, sprites: { front_default } } = data;
            return <div>
              <img src={front_default} alt={`pokemon ${name}`} style={{ height: '60px' }} />
              <UnorderedList>
                <ListItem>Name: {name}</ListItem>
                <ListItem>Weight: {weight}</ListItem>
              </UnorderedList>
            </div>
          }}
        </Query>
      </div>
    </>
  );
}

export default memo(PokemonExample);