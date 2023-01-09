import { Link } from "react-router-dom";
  
export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Menu</h1>
          <nav>
            <ul>
              <li>
                <Link to={`/game`}>PUT ME DOWN !</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }