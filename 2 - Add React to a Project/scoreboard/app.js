const title = 'My First React Element';

const desc = 'I learn good';
const myTitleId = 'main-title';
const name = 'Joey';

const header = (
    <header>
        <h1 id={myTitleId}>{ name }'s first react element</h1>
        <p>{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);