
function App() {
  fetch("http://localhost:3001/functions/")
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
    
  return (
    <div className="App">
      <header className="App-header">
       Hi
      </header>
    </div>
  );
}

export default App;
