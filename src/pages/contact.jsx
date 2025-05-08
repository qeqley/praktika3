import { useNavigate } from "react-router-dom";

function Contact() {

    const navigate = useNavigate();
    const goBack = () => navigate("/");

    return (
        <div className="container">
            <h4>Contact Us</h4>
            <p>Email: contact@recipeapp.com</p>
            <p>Phone number: +1 (234) 567-89-00</p>
            <button className="btn red lighten-2" onClick={goBack}>
                Go Back
            </button>
        </div>
    );
}

export { Contact };