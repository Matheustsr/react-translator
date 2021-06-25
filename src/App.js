

function App() {


  return (
    <div >
      <div>
        <textarea></textarea>
        <button>Enviar</button>
      </div>
      <div>
        {this.state.comments.map(c => {
          return <div>opa!</div>
        })}
      </div>
    </div>
  );
}

export default App;
