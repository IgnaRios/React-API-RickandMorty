

const Favorites = ({favorites, handlerDelete}) => {

    return (
        <div className='favList'>
            <h1>Favoritos</h1>
            {favorites.map((favorite) =>{
                return(
                    <ShowFavorites key={favorite.id} {...favorite} favorites={favorites} handlerDelete={handlerDelete} />
                );
            })}
        </div>
        
    );
}

export const ShowFavorites = ({id, name, img, status, handlerDelete}) => {

    function remove (id) {
        handlerDelete(id)
    }

    return (  
        <div className='fav-character-container'>
            <img className='img-fav' src={img}></img>   
            <h5> {id} - {name} - {status}</h5>
            <button onClick={remove} className='del-fav'>X</button>
        </ div>
    );
}
 
export default Favorites;