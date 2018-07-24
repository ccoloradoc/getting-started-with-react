class ItemForm extends React.Component {
    constructor() {
        super();
        this.state = { input: ''};
    }

    render() {
        return (
          <form className="form-inline" onSubmit={this.handleSubmit.bind(this)} >
            <div className="form-group mx-sm-3 mb-2">
              <label for="item" className="sr-only">Item</label>
              <input type="text" className="form-control"
                value={ this.state.input }
                onChange={ this.handleChange.bind(this) } />
            </div>
            <button type="submit" className="btn btn-primary mb-2" >Submit</button>
          </form>
        );
    }

    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit({
        content: this.state.input
      });
    }
}
