import React from "react";
import {FooterItems} from "./FooterItems"
import "./footer.scss"

export default function Footer(){
    return(
        <footer className="footer">
            <ul className="footer-list"> 
            {FooterItems.map((item, index) => {
                return(
                    <li key={index}>
                        <a className={item.footerLink} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
            </ul>
        </footer>
    )
}