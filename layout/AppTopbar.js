import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef, useState, useEffect } from 'react';
import { LayoutContext } from './context/layoutcontext';
// ## IMPORT COMPONENT
import { Button } from "primereact/button";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { getCookie } from "cookies-next";
import { deleteCookie } from "cookies-next";

const AppTopbar = forwardRef((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    // ## MAIN PROGRAM VARIABLE 
    const [isLogin, setIsLogin] = useState();
    const [btnLogin, setBtnLogin] = useState(true);
    const [btnLogout, setBtnLogout] = useState(false);
    const [diagLogout, setDiagLogout] = useState(false);
    const router = useRouter();

    const acceptLogout = () => {
        //logout.
        deleteCookie("ID_KCSBSALES");
        router.push("/kcsbsales/login");
    }
    const rejectLogout = () => {
        // do nothing
    };

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    useEffect(() => {
        // ProductService.getProductsSmall().then((data) => setProducts(data));
        const CookiesStatus = () => {
            setIsLogin(getCookie("ID_KCSBSALES"));

            if (!isLogin) {
                setBtnLogin(true);
                setBtnLogout(false);
            } else {
                setBtnLogin(false);
                setBtnLogout(true);
            }
        };
        CookiesStatus();
    }, [isLogin]);

    return (
        <div className="layout-topbar">
            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>
            <Link href="/" className="layout-topbar-logo">
                <span>KCSB</span>
            </Link>
            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <Link href="/kcsbsales/login" prefetch={false} >
                    <Button label='Login' className='' icon="pi pi-lock" visible={btnLogin}></Button>
                </Link>
                <Button label='Logout' className='' icon="pi pi-user" visible={btnLogout} onClick={() => setDiagLogout(true)}></Button>
            </div>
            <ConfirmDialog
                visible={diagLogout}
                onHide={() => setDiagLogout(false)}
                message="Are you sure you want to logout?"
                header="Logout"
                icon="pi pi-exclamation-triangle"
                accept={acceptLogout}
                reject={rejectLogout}
            />
        </div>
    );
});

export default AppTopbar;
