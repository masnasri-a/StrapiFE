import Image from "next/image";
import Logo from '../../public/logo.png'
import { IoCreateOutline } from 'react-icons/io5';
import { BiShow } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { useState } from "react";

const Sidebar = (props:any) => {
    const [active, setActive] = useState()
    return (
        <>
            <div className="sidebar">
                <div className="container">
                    <div className="logo" onClick={()=> props.onCLick('home')}>
                        <Image src={Logo} width={50} height={50} alt="Logo" />
                        <span>CMS Dashboard</span>
                    </div>
                </div>
                <hr />
                <div className="menuSidebar" onClick={()=> props.onCLick('create')}>
                    <IoCreateOutline size={25} />
                    <span>Create Post</span>
                </div>
                <div className="menuSidebar" onClick={()=> props.onCLick('show')}>
                    <BiShow size={25} />
                    <span>Content Manager</span>
                </div>
                <div className="menuSidebar" onClick={()=> props.onCLick('setting')}>
                    <FiSettings size={25} />
                    <span>Settings</span>
                </div>
            </div>
        </>
    )
}

export default Sidebar;