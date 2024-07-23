import {
    getAuth,
    sendSignInLinkToEmail,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../utils/firebase";

const actionCodeSettings = {
    url: "https://localhost:5173",
    handleCodeInApp: true,
};

export const Signin = () => {
    const auth = getAuth(app);
    const [email, setEmail] = useState("");

    async function onSignIn() {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem("emailForSignIn", email);
                alert("Email sent");
            })
            .catch((error) => {
                alert("EMAIL NOT SENT");
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={onSignIn}>Sign up</button>
        </div>
    );
};
