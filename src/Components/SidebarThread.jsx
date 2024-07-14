import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Avatar, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/system';
import { ChatContext } from '../common/context';

const ChatCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(1),
  padding: "2px",
  cursor: 'pointer',
}));

const ChatDetails = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: theme.spacing(2),
}));

const ScrollableBox = styled(Box)(({ theme }) => ({
  maxHeight: '87vh',
  overflowY: 'auto',
  width: '530px',
}));

function SidebarThread() {
  const { setSelectedChat } = useContext(ChatContext);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    async function fetchChats() {
      try {
        const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        const chatsData = response.data.data.data;
        if (Array.isArray(chatsData)) {
          setChats(chatsData);
        } else {
          console.error('Data is not an array:', chatsData);
        }
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    }

    fetchChats();
  }, []);

  return (
    <ScrollableBox>
      {chats.length > 0 ? (
        chats.map(chat => (
          <ChatCard key={chat.id} onClick={() => setSelectedChat(chat)}>
            <Avatar sx={{backgroundColor: "orange"}}>{chat.creator.name ? chat.creator.name[0] : 'U'}</Avatar>
            <ChatDetails>
              <Typography variant="h6">{chat.creator.name || 'Unknown'}</Typography>
              {/* <Typography variant="body2">Last message content</Typography> */}
              <Typography variant="caption">{new Date(chat.updated_at).toLocaleString()}</Typography>
            </ChatDetails>
          </ChatCard>
        ))
      ) : (
        <CircularProgress />
      )}
    </ScrollableBox>
  );
}

export default SidebarThread;
