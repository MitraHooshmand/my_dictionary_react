import React,{useState} from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css"
export default function Dictionary(props){
 
    let [keyword,setKeyword] = useState(props.defultKeyword);
    let [result,setResult] = useState(null); 
    let [loaded,setLoaded] = useState(false);
   
    function handleResponse(response){
        console.log(response.data[0]);
        setResult(response.data[0]);
    }
function search(){
 let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
 axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event) {
      event.preventDefault();
      search();
     
    }
    function handleKeyWordChange(param) {
      setKeyword(param.target.value);
    }
    function load (){
        setLoaded(true);
        search();
    }
    if(loaded){
        return (
          <div className="Dictionary">
            <section>
              <h1>What word do you want to look up?</h1>

              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  onChange={handleKeyWordChange}
                  autoFocus={true}
                  defaultValue={props.defultKeyword}
                  placeholder="Type something to search..."
                />
              </form>
            </section>
            <Result result={result} />
          </div>
        );

    }else{
        load();
        return "Loading ... ";

    }

}