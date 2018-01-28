const destination = document.querySelector("#container");

const Counter = React.createClass({
    render: function() {
        const textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };

        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
});

const PlusButton = React.createClass({
    render: function() {
        const buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px",
            padding: 0
        };

        return (
            <button onClick={this.props.clickHandler} style={buttonStyle}>+</button>
        );
    }
});

const CounterParent = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },
    increase: function(e) {
        console.log(this);
        if(e.shiftKey) {
            this.state.count += 10;
        } else {
            this.state.count += 1;
        }

        this.setState({
            count: this.state.count
        });
    },
    render: function() {
        const backgroundStyle = {
            padding: 50,
            backgroundColor: "#ffc53a",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count}/>
                <PlusButton clickHandler={this.increase}/>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <CounterParent/>
    </div>,
    destination
);