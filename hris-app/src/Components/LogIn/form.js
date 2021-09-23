import { Link } from "react-router-dom";

function Form() {
    return (
        <div>
            <label className="user">Username</label><br></br>
            <input type="text" name="Username" id="userN" className="userName"></input>

            <br></br>
            <label className="userPass">Password</label><br></br>
            <input type="Password" name="Password" id="Password" className="pass"></input>

            <br></br>
            <br></br>
            <input type="button" name="sign" id="log" value="Sign In" className="btn"></input>
        </div>
    )
}

export default Form;
