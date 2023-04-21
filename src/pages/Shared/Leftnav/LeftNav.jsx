import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {

    const [categoris, setCategoris] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category').then(res => res.json()).then(data => setCategoris(data))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            {
                categoris.map(category => <p key={category.id}>
                    <Link
                        className="text-decoration-none text-secondary fw-semibold"
                        to={`/category/${category.id}`}

                    >
                        {category.name}
                    </Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;