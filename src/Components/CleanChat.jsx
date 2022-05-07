import React, { Component } from 'react'
import Header from './panelHeader'
import Body from './panelBody'
import Footer from './panelFooter'
import { GenerateMessage } from '../faker'

export default class CleanChat extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Chat',
      chatList: GenerateMessage(10),
      gravatars: {
        user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
        user2: "https://bootdey.com/img/Content/avatar/avatar2.png"
      }
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleScroll(event) {
    if (!event.target.scrollTop) {
      this.fetchMessage(10);
    }
  }

  fetchMessage(count) {
    this.setState(state => {
      return {
        chatList: [
          ...GenerateMessage(count),
          ...state.chatList
        ]
      }
    })
  }

  handleSubmit(message) {
    this.setState(state => {
      return {
        chatList: [
          ...state.chatList,
          { type: 'sent', message, time: new Date().toLocaleTimeString() }
        ]
      }
    })
  }

  render() {
    return (
      <div className="panel" id="chat">
        <Header title={this.state.title} />
        <Body
          handleScroll={this.handleScroll}
          chatList={this.state.chatList}
          avatar={this.state.gravatars} />
        <Footer handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
