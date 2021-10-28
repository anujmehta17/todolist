class App extends Component {
  state = {
    todos: [
      { text: "Learn about React" },
      { text: "Meet friend for lunch" },
      { text: "Build really cool todo app" }
    ]
  }

  setTodos = todos => this.setState({ todos });

  render() {
    return <div></div>
  }
}