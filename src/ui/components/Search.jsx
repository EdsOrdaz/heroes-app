import React from 'react'
import { HeroCard } from '../../heroes/components/HeroCard'

export const Search = ( { search, heroes } ) => {
  return (
    <>
        <h1>Buscar: { search }</h1>
        <hr />
        {
            (heroes.length > 0)
            ?   heroes.map( hero => (
                    <HeroCard key={ hero.id } { ...hero } /> 
                ))
            : 
                <>
                    <div className="alert alert-danger animate__animated animate__fadeInRight">
                        No hay ningun heroe con el nombre <b>{ search }</b>
                    </div>
                </>
        }
    </>
  )
}
