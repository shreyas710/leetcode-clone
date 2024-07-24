import { useEffect } from "react";
import "./App.css";
import { Signin } from "./components/SignIn";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { RecoilRoot, useRecoilState } from "recoil";
import { userAtom } from "./store/atoms/user";

function App() {
    return <RecoilRoot>
        <StoreApp />
    </RecoilRoot>
}

function StoreApp() {
    const [user, setUser] = useRecoilState(userAtom);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user && user.email) {
                setUser({
                    loading: false,
                    user: {
                        email: user.email,
                    },
                });
            } else {
                setUser({
                    loading: false,
                });
                console.log("no user signed in");
            }
        });
    }, []);

    if (user.loading) {
        return <div>Loading...</div>;
    }

    if (!user.user) {
        return <Signin />;
    }

    return <>You are logged in as {user.user?.email}</>;
}

export default App;
