class App extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    render() {
        return (
          <div className="row">
            <ItemList items={this.state.items}/>
            <ItemForm onSubmit={ this.onItemSubmited.bind(this) }/>
          </div>
        );
    }

    onItemSubmited(item) {
      this.setState({
        items: this.state.items.concat(item)
      });
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
