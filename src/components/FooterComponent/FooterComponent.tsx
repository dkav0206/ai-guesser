import "./FooterComponent.scss"
import * as React from 'react';

function FooterComponent () { 
    const [open, setOpen] = React.useState(false);
    return ( 
        <div className={`footerComponent ${open ? "activated" : ""}`} onClick={()=>{setOpen(!open)}}>
            <h1>Created by 2 gay man</h1>

            <div className="row footer-description">
                <h2 className="col-6-xs">Gay Tran</h2>
                <h2 className="col-6-xs">Khoa Nguyen</h2>
            </div>
        </div>
    )
}
export default FooterComponent
