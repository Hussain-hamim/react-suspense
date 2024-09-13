// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// 🐨 you'll also need to get the fetchPokemon function from ../pokemon:
import {PokemonDataView} from '../pokemon'

// function Comp(data) {
//   const [state, setState] = React.useState({})

//   React.useEffect(() => {
//     let current = true
//     setState({status: 'pending'})

//     doAsyncThing().then(p => {
//       if (current)
//         setState({pokemon: p, status: 'success'}, e => {
//           if (current) setState({error: e, status: 'error'})
//         })
//       return () => (current = false)
//     })
//   }, [pokemon])

//   if (data) {
//     return <div>{data.message}</div>
//   }
//   throw Promise
// }

// function App2() {
//   return (
//     <React.Suspense fallback={<div>Loading...</div>}>
//       <Comp />
//     </React.Suspense>
//   )
// }
/**
 *      promise:
 * "I promise a result"
 * producing code: that can take some time
 * consuming code: that must for the result
 * A promise is a JavaScript object that links the producing code and consuming code
 *
 *      async:
 * "async and await make the promise easier to write"
 *   async makes a function return a promise
 *   await makes a function wait for a promise
 *
 */

// 💰 use it like this: fetchPokemon(pokemonName).then(handleSuccess, handleFailure)

// 🐨 create a variable called "pokemon" (using let)

// 💣 delete this now...
const pokemon = {
  name: 'TODO',
  number: 'TODO',
  attacks: {
    special: [{name: 'TODO', type: 'TODO', damage: 'TODO'}],
  },
  fetchedAt: 'TODO',
}

// We don't need the app to be mounted to know that we want to fetch the pokemon
// named "pikachu" so we can go ahead and do that right here.
// 🐨 assign a pokemonPromise variable to a call to fetchPokemon('pikachu')

// 🐨 when the promise resolves, assign the "pokemon" variable to the resolved value
// 💰 For example: somePromise.then(resolvedValue => (someValue = resolvedValue))

function PokemonInfo() {
  // 🐨 if there's no pokemon yet, then throw the pokemonPromise
  // 💰 (no, for real. Like: `throw pokemonPromise`)

  // if the code gets it this far, then the pokemon variable is defined and
  // rendering can continue!
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        {/* 🐨 Wrap the PokemonInfo component with a React.Suspense component with a fallback */}
        <PokemonInfo />
      </div>
    </div>
  )
}

export default App
