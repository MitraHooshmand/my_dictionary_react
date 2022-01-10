import React,{useState} from "react";

export default function Dictionary(){
 
    let [keyword,setKeyword]=useState('');
    function search(event){
        event.preventDefault();
        alert(`Searching for "${keyword}"`);
    }
    function handleKeyWordChange(param) {
      setKeyword(param.target.value);
    }
return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeyWordChange} autoFocus={true}/>
        </form>
    </div>
);

}