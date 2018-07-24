class App extends React.Component {
    render() {
        return (
          <div className="row">
            <ItemList/>
            <ItemForm onSubmit={ this.onItemSubmited.bind(this) }/>
          </div>
        );
    }

    onItemSubmited(event) {
      event.preventDefault();
      console.log(content);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
