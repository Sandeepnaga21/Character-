import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import './App.css'

class App extends Component {
  state = {searchInput: '', isClicked: false, wordsList: []}

  updateSearchInput = event => this.setState({searchInput: event.target.value})

  onClickBtn = () => {
    const {searchInput} = this.state
    const newWord = {
      id: uuid4(),
      searchInput,
      charCount: searchInput.length,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newWord],
      searchInput: prevState.searchInput,
      isClicked: true,
    }))
  }

  render() {
    const {wordsList, isClicked} = this.state

    return (
      <div className="bg-container">
        <form className="container">
          <h1 className="heading">Count the characters like a Boss...</h1>
          {isClicked ? (
            <ul>
              {wordsList.map(each => (
                <li className="list" key={each.id}>
                  <p>
                    {each.searchInput} : {each.charCount}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              className="img"
              alt="no user inputs"
            />
          )}
        </form>
        <div className="another">
          <h1 className="heading1">Character Counter</h1>
          <div className="other">
            <input
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              onChange={this.updateSearchInput}
            />
            <button
              type="button"
              className="btn bg-warning button"
              onClick={this.onClickBtn}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
