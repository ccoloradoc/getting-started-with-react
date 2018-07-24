class Item extends React.Component {
    render() {
        return <li className="list-group-item">{ this.props.content}</li>;
    }
}

class ItemList extends React.Component {
  constructor() {
      super();
      this.state = {
        items: [{ content: 'Item #1'}, {content: 'Item #2'}]
      }
  }

  renderItems() {
    return this.state.items.map(item => {
      return <Item content={item.content} />
    });
  }

  render() {
    return (
      <ul class="list-group">
        { this.renderItems() }
      </ul>
    );
  }
}


ReactDOM.render(
    <ItemList content="item #1"/>,
    document.getElementById("root")
);
