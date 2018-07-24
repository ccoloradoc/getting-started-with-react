class ItemList extends React.Component {
  constructor() {
      super();
      this.state = {
        items: [{ content: 'Item #1'}, {content: 'Item #2'}]
      }
  }

  componentDidUpdate() {
    console.log(this.props);
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
