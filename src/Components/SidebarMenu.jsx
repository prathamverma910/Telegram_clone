import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import ForumIcon from '@mui/icons-material/Forum';
import FolderIcon from '@mui/icons-material/Folder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CampaignIcon from '@mui/icons-material/Campaign';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CallIcon from '@mui/icons-material/Call';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EditIcon from '@mui/icons-material/Edit';
import ThemeSwitchButton from './ThemeSwitchbutton';

import "./SidebarMenu.css";

function SidebarMenu() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = ({ toggleDrawer }) => (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Pratham verma'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {[
                    { text: 'New Group', icon: <GroupIcon /> },
                    { text: 'New Channel', icon: <CampaignIcon /> },
                    { text: 'Contacts', icon: <ContactPageIcon /> },
                    { text: 'Calls', icon: <CallIcon /> },
                    { text: 'Saved Messages', icon: <BookmarkIcon /> },
                    { text: 'Settings', icon: <SettingsIcon /> }
                ].map((item, index) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DarkModeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Night Mode" />
                        <ThemeSwitchButton />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div className="side_menu">
            <Stack direction="column" spacing={2}>
                <Button onClick={toggleDrawer(true)} sx={{ color: 'rgb(197, 197, 197)' }}><MenuIcon /></Button>
                <Button sx={{ display: "flex", flexDirection: "column", color: 'rgb(197, 197, 197)' }}><ForumIcon />All chats</Button>
                <Button sx={{ display: "flex", flexDirection: "column", color: 'rgb(197, 197, 197)' }}><FolderIcon />Active</Button>
                <Button sx={{ display: "flex", flexDirection: "column", color: 'rgb(197, 197, 197)' }}><EditIcon />Edit</Button>
            </Stack>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <DrawerList toggleDrawer={toggleDrawer} />
            </Drawer>
        </div>
    )
}

export default SidebarMenu;
