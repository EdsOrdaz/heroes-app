import { HeroList } from "../components"

export const MarvelPage = () => {

  // const heroes = HeroList( { publisher: 'Marvel Comics' } );

  return (
    <>
        <h1>Heroes Marvel</h1>
        <hr />

        <HeroList publisher="Marvel Comics" />
    </>
  )
}
