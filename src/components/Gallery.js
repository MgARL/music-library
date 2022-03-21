import GalleryItem from './GalleryItem'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

function Gallery(){
    const dataC = useContext(DataContext)
    let data = dataC.result.read()

    const display = data.map((item, index) => {
        return(
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery