class ItemForm extends React.Component {
    render() {
        return (
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <label for="item" className="sr-only">Item</label>
              <input type="password" className="form-control" id="item" placeholder="Item"/>
            </div>
            <button type="button" className="btn btn-primary mb-2">Submit</button>
          </form>
        );
    }
}
