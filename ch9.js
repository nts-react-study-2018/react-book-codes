const Circle = React.createClass({
    render: function() {
        const circleStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100
        };

        return (
            <div style={circleStyle}></div>
        );
    }
});

const colors = ["#393e41", "#e94f37", "#1c89bf", "#a1d363", "#85ffc7", "#297373", "#ff8552", "#a40e4c"];
const renderData = [];

for(let i=0;i<colors.length;i++) {
    let color = colors[i];
    renderData.push(<Circle key={i + color} bgColor={color}/>);
}

const destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        {renderData}
    </div>,
    destination
);
