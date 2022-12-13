import React from "react";
import s from './Header.module.css'

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <img src={"https://media-exp1.licdn.com/" +
                "dms/image/C560BAQHMnA03XDdf3w/" +
                "company-logo_200_200/0/1519855918965?e" +
                "=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9S" +
                "a9K59fimgJf-s_okU3zs"}/>
        </header>
    )
}
export default Header