import GalleryItem from './GalleryItem'

function Gallery({ data }){
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