import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model = [
        {
            label: 'Menu',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
                { label: 'Code Master', icon: 'pi pi-fw pi-globe', to: '/kcsbsales/std' },
                { label: 'Orders', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/odr' },
                { label: 'Orders Output', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/odr/report' },
                { label: 'Stock', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/srh' },
                { label: 'Stock Report', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/srh/report' },
                { label: 'SO & Invoice', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/so' },
                { label: 'Monthly Sales Plan', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/mda' },
                { label: 'Monthly Power Brand Sales Plan', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/mda/monthly' },
                { label: 'Sales Report Daily', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/sfm' },
                { label: 'Sales Report Monthly', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/sfm/monthly' },
                { label: 'Consigment', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/cst' },
                { label: 'Sale File Management', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/sfm/mgt' },
                { label: 'MIDA Stock', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/mida' },
                { label: 'NEGO', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/nego' },
                { label: 'ACP', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/sfm/acp' },
                { label: 'Closing', icon: 'pi pi-fw pi-clone', to: '/kcsbsales/std/closing' }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}


            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
