import { useState } from 'react'

function GalleryItem({ item }){
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'lightBlue'
    }

     const simpleView = () => {
         return(
             <div style={simpleStyle}>
                 <h3>{item.trackName}</h3>
                 <h4>{item.collectionName}</h4>
             </div>
         )
     }

     const detailedView = () =>{
         return(
             <div style={detailStyle}>
                 <h2>{item.trackName}</h2>
                 <h3>{item.collectionName}</h3>
                 <h4>{item.primaryGenreNAme}</h4>
                 <h4>{item.releaseDate}</h4>
             </div>
         )
     }


    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            { view ? detailedView() : simpleView()}
        </div>
    )
}

export default GalleryItem