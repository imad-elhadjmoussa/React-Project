import icon from "./../Assets/search.png"

const SearchBar=(props)=>{
    return(
        <div className="searchBar" >
            <input onChange={props.getContry} type="text" placeHolder="Enter a contry " />
            <div onClick={props.search} className="icon"> <img src={icon} /> </div>
        </div>
    );
}

export default SearchBar;