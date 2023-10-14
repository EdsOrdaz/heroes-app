import React from 'react'
import { Navbar } from '../../ui/components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../pages/MarvelPage'
import { DcPage } from '../pages/DcPage'
import { HeroPage } from '../pages/HeroPage'
import { SearchProvider } from '../../ui/provider/SearchProvider'

export const HeroesRoutes = () => {
  return (
    <SearchProvider>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="./marvel" element={<MarvelPage />} />
                <Route path="./dc" element={<DcPage />} />
                
                {/* <Route path="search" element={<SearchPage />} /> */}
                <Route path="./hero/:heroId" element={<HeroPage />} />
                                

                {/* <Route path="/" element={<Navigate to="/marvel" />} /> */}

            </Routes>
        </div>
    </SearchProvider>
  )
}
