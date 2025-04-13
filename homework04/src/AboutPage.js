import { Link } from "react-router-dom";
function AboutPage() {
    return ( 
        <div>
            <h1>О нас</h1>
            <p>То же фигня всякая :))</p>
            <Link to={`/`}>Домашняя страница</Link>
        </div>
     );
}

export default AboutPage;