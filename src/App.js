import './App.css'
import { useEffect, useState, useRef, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'
import { createResource as fetchData} from './helper'
import LoadingSpinner from './components/LoadingSpinner'

// lazy Import

function App(){
    let [searchTerm, setSearchTerm] = useState('')
    let [data, setData] = useState(null)
    let searchInput = useRef('')

    useEffect(() => {
      if (searchTerm) {
        setData(fetchData(searchTerm))
        }
    }, [searchTerm])

    const handleSearch = (e, term) => {
      e.preventDefault()
      setSearchTerm(term)
    }

    const renderGallery = () => {
      if(data) {
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <DataContext.Provider value={data}>
              <Gallery />
            </DataContext.Provider>
            </Suspense>
        )
      }
    }

    return (
        <div className='App'>

             <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
             <SearchBar/>
           </SearchContext.Provider>
            {message}
            {renderGallery()}
            
        </div>
    )
}

export default App
