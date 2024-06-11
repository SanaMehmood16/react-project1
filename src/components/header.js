import React from "react";
import"./header.css"
import imgs from "../images/img.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'
function header() {
  return (
    <header className="app">
        <div className="mainimg">
            <img src={imgs} alt="" />
        </div>
        <div className="head">
        <div className="maintext">
          <div className="heading">
          <h1>loura Smith</h1>
           <p className="p1">Front-end Developer</p>
           <p>louraSmith.website</p>
          </div>
          <div className="btn">
            <button><span><FontAwesomeIcon icon={faEnvelope} /></span>Email</button>
          </div>
          <div className="text">
            <h3>About</h3>
            <p>Laura Smith is a British Labour Party politician who served as the Member of Parliament for Crewe 
              and Nantwich from 2017 to 2019. politician who served as the Member of Parliament for Crewe 
              and Nantwich from 2017 to 2019.</p>
          </div>
          <div className="text">
            <h3>Interest</h3>
            <p>Laura Smith is a British Labour Party politician who served as the Member of Parliament for Crewe 
              and Nantwich from 2017 to 2019. politician who served as the Member of Parliament for Crewe 
              and Nantwich from 2017 to 2019. </p>
          </div>
           


        </div>
        </div>
    </header>
    
  )
}
export default header;