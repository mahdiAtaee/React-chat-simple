import React, { Component } from 'react'
import Chat from './Chat'

export default class panelBody extends Component {

    wrapperChatList = React.createRef()


    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.chatList.length !== this.props.chatList.length) {
            return this.wrapperChatList.current.scrollHeight;
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (null !== snapshot) {
            const wrapper = this.wrapperChatList.current;
            return wrapper.scrollTop = wrapper.scrollHeight - snapshot
        }
    }

    render() {

        const Chats = this.props.chatList ? this.props.chatList.map((chat, index) => {
            const isLeft = 'recive' === chat.type
            return <Chat
                key={index}
                time={chat.time}
                message={chat.message}
                gravatar={isLeft ? this.props.avatar.user1 : this.props.avatar.user2}
                isLeft={isLeft}
            />

        }) : null

        return (
            <div
                ref={this.wrapperChatList}
                onScroll={this.props.handleScroll}
                className="panel-body">
                <div className="chats">
                    {Chats}
                </div>
            </div>
        )
    }
}
