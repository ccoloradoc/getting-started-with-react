// Actions
const FETCH_ITEMS = 'FETCH_ITEMS';

function fetchItems() {
  const request = axios.get('/api/v1/items');

  return {
    type: FETCH_ITEMS,
    payload: request
  }
}

//Reducer
export function ItemsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload.data, 'id');
    case UPDATE_USER:
      // TODO: Implement element update
      return state;
    case DELETE_USER:
      // TODO: Implement element deletiin
    default:
      return state;
  }
}

class App extends React.Component {
    componentDidMount() {
      this.props.fetchItems();
    }

    render() {
        return (
          <div className="row">
            <ItemList items={this.props.items}/>
            <ItemForm onSubmit={ this.onItemSubmited.bind(this) }/>
          </div>
        );
    }

    onItemSubmited(item) {
      this.props.addItem(item);
    }
}

// Wrap App with Redux allowing to access Redux Model
var ReduxApp =  connect((state) => {
  return {
    items: state.items
  };
}, { fetchItems, addItem })(App);

ReactDOM.render(
    <ReduxApp/>,
    document.getElementById("root")
);
