import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Message } from 'primereact/message';

import { useRouter } from "next/router";

import { LoginKCSBSales } from '../components/index'
import { setCookie } from "cookies-next";

// import Form from "react-bootstrap/Form"
// import { useForm } from "react-hook-form";

import AppConfig from '../../../layout/AppConfig';
import Link from 'next/link';

const LoginPage = () => {
    // ####### SET VARIABLE ###########
    const router = useRouter();
    const [sUserID, setUserID] = useState('');
    const [sUserPASS, setUserPASS] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [isErrorMsg, setErrorMsg] = useState('');

    const isLoad = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const onSubmit = (data) => {
        if (sUserID.length === 0 || sUserPASS.length === 0) {
            setErrorMsg('Please Enter Your ID & Password');
            setError(true);
        } else {
            ValidateUser(41, sUserID, sUserPASS);
        }
    }

    const ValidateUser = (GroupID, UserID, UserPASS) => {
        isLoad();
        LoginKCSBSales(GroupID, UserID, UserPASS)
            .then((data) => {
                // console.log(data);
                if (data.length === 0) {
                    setErrorMsg('Login information incorrect');
                    setError(true);
                } else {
                    handleSignIn(data);
                    router.push("/");

                }
            })
            .catch((err) => console.log(err));
    }
    const handleSignIn = (UserInfo) => {
        setCookie("ID_KCSBSALES",sUserID);
        setCookie("INFO_KCSBSALES", UserInfo);
    }

    // ####### RETURN ###########
    return (
        <div className="grid p-fluid">
            <div className="col-12 md:col-12">

                <div className="card"> <h5 className="">Sales System</h5>
                    <div className="flex flex-column gap-1">
                        <label htmlFor="username">User ID</label>
                        <InputText id="username" value={sUserID} onChange={(e) => setUserID(e.target.value)} />
                        <small id="username-help"></small>
                        <label htmlFor="username">Password</label>
                        <Password value={sUserPASS} onChange={(e) => setUserPASS(e.target.value)} feedback={false} />
                        <Button label="Login" icon="pi pi-check" loading={isLoading} onClick={onSubmit} raised />
                    </div>
                </div>

                <Dialog header="Login" visible={isError} onHide={() => setError(false)} maximizable
                    style={{ width: '40vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                   <Message severity="info" text={isErrorMsg} className="border-primary w-full justify-content-start" />
                </Dialog>
            </div>
        </div>
    );
};



// LoginPage.getLayout = function getLayout(page) {
//     return (
//         <React.Fragment>
//             {page}
//             <AppConfig />
//         </React.Fragment>
//     );
// };

export default LoginPage;
