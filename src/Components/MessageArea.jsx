import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './MessageArea.css';
import { ChatContext } from '../common/context';
import { Avatar, TextField, Button, Grid } from '@mui/material';

function MessageArea() {
  const { selectedChat } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    async function fetchMessages(chatId) {
      if (chatId) {
        try {
          const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
          const messagesData = response.data.data;
          setMessages(messagesData);
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      }
    }

    if (selectedChat) {
      fetchMessages(selectedChat.id);
    }
  }, [selectedChat]);

  const isCurrentUser = (message) => {
    // Example: Replace with actual logic to determine if message sender is current user
    return message.chat_id === selectedChat.id;
  };


  return (
    <div className="message_Area">
      <div className="main">
        {selectedChat ? (
          <div className='message_box'>
            <div>
              <div className="messagesHeader">
                <Avatar sx={{ backgroundColor: "orange", marginTop: "8px", marginRight: "8px" }}>
                  {selectedChat.creator.name ? selectedChat.creator.name[0] : 'U'}
                </Avatar>
                <h2>{selectedChat.creator.name}</h2>
              </div>
              <div className="messages">
                {messages.length > 0 ? (
                  messages.map(message => (
                    <div
                      key={message.id}
                      className={isCurrentUser(message) ? 'message_right' : 'message_left'}
                    >
                      <Avatar>{message.sender.name ? message.sender.name[0] : 'U'}</Avatar>
                      <p>{message.message}</p>
                      <small>{new Date(message.created_at).toLocaleString()}</small>
                    </div>
                  ))
                ) : (
                  <p>No messages yet.</p>
                )}
              </div>
            </div>
            <div className="input_message_area">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={9}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        ) : (
          <p>Please select a chat.</p>
        )}
      </div>
    </div>
  );
}

export default MessageArea;
