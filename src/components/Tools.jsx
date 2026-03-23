import classes from '../styles/Tools.module.css';
import {tools} from '../data/tools.js';
import {Link } from 'react-router';
function Tools({ref}){
  return(
    <div ref={ref} className={`${classes.tools_container}`}>
      {
        tools.map((tool, index)=>{
          return(
            <div className={`${classes.tool_container}`} key={index}>
              <h1>{tool.name}</h1>
              <hr />
              <p>{tool.description}</p>
              <hr />
              <Link to={tool.path} className={`${classes.tool_link}`}>Try It</Link>
            </div>
          )
        })
      }
    </div>
  )
}
export default Tools;