class App extends React.Component {
    render() {
        return (
          <div className="row">
            <ItemList/>
          </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
