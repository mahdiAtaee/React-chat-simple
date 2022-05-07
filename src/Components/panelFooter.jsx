import React, { Component } from 'react'

export default class panelFooter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.handleSubmit(this.state.inputValue);
        this.setState({
            inputValue: ''
        })
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (
            <div className="panel-footer">
                <form>
                    <div className="input-group">
                        <input type="text" onChange={this.handleChange} value={this.state.inputValue} className="form-control" placeholder="Say something" />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" onClick={this.handleSubmit} type="button">Send</button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}
