

const Favorites = ({favorites, handlerDelete}) => {

    return (
        <div className='favList'>
            <h1>Favoritos</h1>
            {favorites.length 
            ? favorites.map((favorite) =>{
                return(
                    <ShowFavorites key={favorite.id} {...favorite} handlerDelete={handlerDelete} />
                );
            })
            :<h4>No hay favoritos!</h4>}
        </div>
    );
}

export const ShowFavorites = ({id, name, img, status,  handlerDelete}) => {

    function remove (e) {
        const elementToDelete =id;
        handlerDelete(elementToDelete)
    }

    return (  
        <div className='fav-character-container'>
            <img className='img-fav' src={img}></img>   
            <h5>{name}</h5>
            <button onClick={remove} className='del-fav'>X</button>
        </ div>
    );
}
 
export default Favorites;