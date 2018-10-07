// JSX JavaScripts XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option)
    }
    render();
    e.target.elements.option.value = '';
}

const onRemoveAll = (e) => {
    if(app.options.length > 0) {
        app.options.splice(0, app.options.length);
    }
    render();        
};

const onMakeDecision = () => {
    const randonNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randonNum];
    alert(option);
};

const appRoot = document.querySelector('#app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
           <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
           <button disabled={app.options.length === 0} onClick ={onMakeDecision}>What should I do?</button>
           <button onClick={onRemoveAll}>Remove All</button>
            <ol>
               {
                   app.options.map((option) => <li key={option}>{option}</li>)
               }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}
render()
