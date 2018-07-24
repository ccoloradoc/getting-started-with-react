class Item extends React.Component {
    render() {
        return <li className="list-group-item">{ this.props.content}</li>;
    }
}

ReactDOM.render(
    <Item content="item #1"/>,
    document.getElementById("root")
);
