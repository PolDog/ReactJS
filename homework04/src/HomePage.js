import { Link } from "react-router-dom";
function HomePage() {
    return ( 
        <div>
            <h1>Главная страница</h1>
            <p>Бла бла бла</p>
            <p>Бла бла бла</p>
            <p>Бла бла бла</p>
            <Link to={`/about`}>О нас</Link>
        </div>
     );
}

export default HomePage;