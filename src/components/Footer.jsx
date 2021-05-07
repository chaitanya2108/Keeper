import React from "react";

const date = new Date();

function Footer(){
    return <div className="footer"><p>Copyright <i class="far fa-copyright"></i> {date.getFullYear()}</p></div>
};

export default Footer;