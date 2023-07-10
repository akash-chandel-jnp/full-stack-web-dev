import React from "react";

var date = new Date;
var year = date.getFullYear();

function Footer(){
    return <footer>
        <p>Copyright © {year}</p>
    </footer>
}

export default Footer;