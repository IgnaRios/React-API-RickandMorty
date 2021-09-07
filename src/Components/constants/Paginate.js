const Pagination = ({next, prev, handlerPage}) => {

    const handlerPrevPage = () =>{
        const [, prevPage] = prev.split('?');
        handlerPage(prevPage);
    }

    const handlerNextPage = () =>{
        const [, nextPage] = next.split('?');
        handlerPage(nextPage);
    }
    return (  
        <div className='paginationdiv'>
            {!!prev && <button onClick={handlerPrevPage} className='btn-prev'>Prev</button>}
            {!!next && <button onClick={handlerNextPage} className='btn-next'>Next</button>}
        </div>
    );
}
 
export default Pagination ;