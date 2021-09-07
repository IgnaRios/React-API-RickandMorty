

const Favorites = ({favorites, setFavorites}) => {

    return (
        <div className='favList'>
            <h1>Favoritos</h1>
            {favorites.map((favoriteCharacter) =>{
                return(
                    <ShowFavorites key={favoriteCharacter.id} {...favoriteCharacter} />
                );
            })}
        </div>
        
    );
}

export const ShowFavorites = ({id, name, img, status}) => {

    const remove = (id) =>{
        const viendo = id;
        console.log(viendo) 

    }

    return (  
        <div className='fav-character-container'>
            <img className='img-fav' src={img}></img>   
            <h5>{name} - {status}</h5>
            <button onClick={remove} className='del-fav'>X</button>
        </ div>
    );
}
 
export default Favorites;