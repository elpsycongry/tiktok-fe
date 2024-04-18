import Button from "../Button";
import "./form.scss"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginForm() {
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: '',
    });
    let handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://661df4fd98427bbbef02f153.mockapi.io/users")
            .then(res => res.json())
            .then((users) => {
                const userMatch = users.find(user => user.email === loginUser.email && user.password === loginUser.password);
                if (userMatch) {
                    window.localStorage.setItem('currentUser', JSON.stringify(userMatch));
                    window.location.reload(false)
                } else {
                    console.log(loginUser)
                    alert("Email or password is incorrect.");
                }
            })
            .catch(err => {
                if (!err)
                console.error("Error fetching users:", err);
                alert("");

            });
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-wrap">
                <label className="input-label" htmlFor="input-email">Email</label>
                <input onChange={(e) => setLoginUser({...loginUser, email: e.target.value})} id="input-email "
                       type="email" placeholder="example@gmail.com"/>
            </div>
            <div className="input-wrap">
                <label className="input-label" htmlFor="input-password">Password</label>
                <input onChange={(e) => setLoginUser({...loginUser, password: e.target.value})} id="input-password"
                       type="password"/>
            </div>
            <div className="input-wrap">
                <Button className="submit-button" primary type={"submit"}>Submit</Button>
            </div>
        </form>
    )
}

export default LoginForm;