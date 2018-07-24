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
      <ul className="list-group">
        { this.renderItems() }
      </ul>
    );
  }
}
