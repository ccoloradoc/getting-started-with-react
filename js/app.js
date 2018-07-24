class App extends React.Component {
    render() {
        return (
          <div className="row">
            <ItemList/>
            <ItemForm/>
          </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
