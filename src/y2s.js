export default function() {
    return (
        <div className="App">
          <header className="App-header">
          <div className="card" styles="width: 22rem;">
            <div className="card-body">
            <form styles="width: 15rem;">
              <div className="form-group col-xs-6">
                <label htmlFor="url" className="text-primary">Youtube URL</label>
                <input type="text" className="form-control" id="url" aria-describedby="emailHelp" placeholder="https://www.youtube.com/watch?v=iuJDhFRDx9M"></input>
                <small id="emailHelp" className="form-text text-muted">Enter the URL of the youtube video!</small>
              </div>
              <button type="submit" id="url" className="btn btn-primary">Submit</button>
            </form>
            </div>
          </div>
          </header>
        </div>
    );
}