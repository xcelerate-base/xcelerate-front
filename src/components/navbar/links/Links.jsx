'use client'
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import { SlMenu } from "react-icons/sl";

const links = [
    // {
    //     title: "Homepage",
    //     path: "/",
    // },
    {
        title: "Notes",
        path: "/note",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "About Us",
        path: "/about",
    },
    {
        title: "Cart",
        path: "/cart",
    },
]

const Links = () => {
    const[open,setOpen] = useState(false)
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link=>(<NavLink item={link} key={link.title}/>)))}
        </div>
        <SlMenu className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}/>
        {
            open && <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title}/>
                ))}
            </div>
        }
    </div>
  )
}

export default Links
