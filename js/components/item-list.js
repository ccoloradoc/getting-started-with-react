class ItemList extends React.Component {
  componentDidUpdate() {
    console.log(this.props);
  }

  renderItems() {
    return this.props.items.map(item => {
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
