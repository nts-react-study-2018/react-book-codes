const LightningCounter = React.createClass({
  getInitialState: function() {
    return {
      strikes: 0
    };
  },
  timerTick: function() {
    this.setState({
      strikes: this.state.strikes + 100
    });
  },
  componentDidMount: function() {
    setInterval(this.timerTick, 1000);
  },
  render: function() {
    const counterStyle = {
      color: "#66ffff",
      fontSize: 50
    };
    const count = this.state.strikes.toLocaleString();
    return (
      <h1 style={counterStyle}>{this.state.strikes}</h1>
    );
  }
});

const LightningCounterDisplay = React.createClass({
  render: function() {
    const commonStyle = {
      margin: 0,
      padding: 0
    };

    const divStyle = {
      width: 250,
      textAlign: "center",
      backgroundColor: "black",
      padding: 40,
      margin: "0 auto",
      fontFamily: "sans-serif",
      color: "#999",
      borderRadius: 10
    };

    const textStyles = {
      emphasis: {
        fontSize: 38,
        ...commonStyle
      },
      smallEmphasis: {
        ...commonStyle
      },
      small: {
        fontSize: 17,
        opacity: 0.5,
        ...commonStyle
      }
    }

    return (
      <div style={divStyle}>
          <LightningCounter/>
          <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
          <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
          <p style={textStyles.small}>(since you loaded this example)</p>
      </div>
    );
  }
})

ReactDOM.render(<LightningCounterDisplay/>, document.querySelector("#container"));