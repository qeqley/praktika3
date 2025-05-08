import { useNavigate } from "react-router-dom";

function About() {

    const navigate = useNavigate();
    const goBack = () => navigate("/");

    return (
        <div className="container">
            <h4>About our Recipe App</h4>
            <p>Discover thousands of delicious recipes from around the world.</p>
            <p>Version: 1.0.0</p>
            <button className="btn red lighten-2" onClick={goBack}>
                Go Back
            </button>
        </div>
    );
}

export { About };