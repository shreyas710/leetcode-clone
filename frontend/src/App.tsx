import { useEffect } from "react";
import "./App.css";
import { Signin } from "./components/SignIn";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

function App() {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("this is the user", user);
            } else {
                console.log("no user signed in");
            }
        });
    }, []);

    return (
        <>
            <div>
                <Signin />
            </div>
        </>
    );
}

export default App;
