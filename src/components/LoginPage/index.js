import React, {useState} from "react";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import ForgotDataPage from "./ForgotDataPage";

function determinePage(page, updatePage) {
    switch (page) {
        case "sign in" : {
            return <SignInPage updatePage={updatePage}/>;
        }
        case "sign up" : {
            return <SignUpPage updatePage={updatePage}/>;
        }
        case "forgot data" : {
            return <ForgotDataPage updatePage={updatePage}/>
        }
        default: alert("there is no such a page")
    }
}

export default function LoginPage() {
    const [page, updatePage] = useState("sign in");
    return <div>
        {determinePage(page, updatePage)}
    </div>;
}