import { HeroList } from "../components"

export const MarvelPage = () => {

  // const heroes = HeroList( { publisher: 'Marvel Comics' } );

  return (
    <>
        <h1>Marvel Page</h1>
        <hr />

        <HeroList publisher="Marvel Comics" />
    </>
  )
}
