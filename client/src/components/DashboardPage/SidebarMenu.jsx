import { Link } from "react-router-dom";

function SidebarMenu() {
    return <div className='SidebarMenu'>
        <h1>Hello</h1>
        <Link className='SidebarMenu-Links' to='/dashboard'>Home</Link>
        <Link className='SidebarMenu-Links' to='/dashboard/profile'>Profile</Link>
        <Link className='SidebarMenu-Links' to='/dashboard/settings'>Settings</Link>
        <Link className='SidebarMenu-Links' to='/create-survey'>+  Create</Link>
    </div>
}

export default SidebarMenu;