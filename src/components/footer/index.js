import "./index.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
        <h4 className="mobilefooter">&#169; 
         2023 by Bitnine Global Inc. All Rights Reserved.
         </h4>
            <div className="container">
    
              <ul>
                <h4>Products</h4>
                <li><a href="/agenssql">Relational Database</a></li>
                <li><a href="/graph-database">Graph Database</a></li>
                <li><a href="/graph-database-2">Graph-based Solution</a></li>
              </ul>
              <ul>
              <li><a href="/graph-database-use-case">USE CASES</a></li>
              </ul>
              <ul>
              <li><a href="/services">service</a></li>
              </ul>
              <ul>
              <li><h4>resources</h4></li>
              <li><a href="/documentation">document</a></li>
              <li><a href="/ko/learn">that content</a></li>
              </ul>
              <ul>
              <li><a href="/blog"><h4>blog</h4></a></li>
              </ul>
              <ul>
              <li><h4>Company</h4></li>
              <li><a href="/ko/company">About Us</a></li>
              <li><a href="/ko/contact">Contact</a></li>
              </ul>
          
       
      
    </div>
    </footer>
    )
}

export default Footer;