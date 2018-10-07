class ToggleDetails extends React.Component {
    constructor(){
        super()
        this.state = {
            x: false,
            title: 'Toggle Details',
            show: 'Show Details',
            hide: 'Hide Details',
            message: 'THis is the hidden message from the page'
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
      this.setState((y) => {
          return {
              x: !y.x
          }
      })
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggle}>
                    {this.state.x ? this.state.hide : this.state.show}
                </button>
                {this.state.x && <p>this.state.message</p>}
            </div>
        )
    }
}

ReactDOM.render(<ToggleDetails />, document.querySelector('#playground'))