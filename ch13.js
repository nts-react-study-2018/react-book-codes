const {
    Router,
    Route,
    IndexRoute,
    IndexLink,
    Link
} = ReactRouter;
const destination = document.querySelector('#container');

const Home = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Hello</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    }
});

const Contact = React.createClass({
    render: function() {
        return (
            <div>
                <h2>GOT QUESTIONS?</h2>
                <p>The easiest thing to do is post on our <a href="http://forum.kirupa.com">forums</a>.</p>
                <Link to="/">Go Back</Link>
            </div>
        );
    }
});

const Stuff = React.createClass({
    render: function() {
        return (
            <div>
                <h2>STUFF</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/">Go Back</Link>
            </div>
        );
    }
});

const App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Simple SPA</h1>
                <header className="header">
                    <ul>
                        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                        <li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
                        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                    </ul>
                </header>
                <main className="content">
                    {this.props.children}
                </main>
            </div>
        );
    }
});

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="stuff" component={Stuff} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>,
    destination
);