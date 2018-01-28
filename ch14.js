const destination = document.querySelector('#container');

const TodoList = React.createClass({
    getInitialState: function() {
        return {
            items: []
        };
    },
    addItem: function(e) {
        e.preventDefault();
        
        let itemArray = this.state.items;

        if (this._inputElement.value === "") {
            alert("Enter your task!");
        } else {
            itemArray.push({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });
    
            this._inputElement.value = "";
        }
    },
    render: function() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={a => this._inputElement = a} type="text" placeholder="enter task"/>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        )
    }
});

const TodoItems = React.createClass({
    createTasks: function(item) {
        return <li key={item.key}>{item.text}</li>
    },
    render: function() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        )
    }
});

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);