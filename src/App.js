import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <header className="App-header"> */}
        {/* </header> */}
        <main>
          <Dictionary defultKeyword="Sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/mita4824/my_dictionary_react">
              {" "}
              Mita hsh :)
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
