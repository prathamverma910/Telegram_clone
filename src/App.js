import Telegram from "./Components/Telegram";
import "./App.css";
import MessageArea from "./Components/MessageArea";
import SidebarMenu from "./Components/SidebarMenu";
import React from 'react';
import { ChatProvider } from "./common/context";

function App() {

  return (
    <ChatProvider>
      <div className="App">
        <SidebarMenu />
        <Telegram />
        <MessageArea />
      </div>
    </ChatProvider>
  );
}

export default App;
