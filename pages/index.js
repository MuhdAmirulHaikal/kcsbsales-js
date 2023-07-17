import React, { useContext, useEffect, useRef, useState } from 'react';
import { LayoutContext } from '../layout/context/layoutcontext';
import { useRouter } from "next/router";
// ## IMPORT COMPONENT
import { getCookie } from "cookies-next";

const Dashboard = () => {
    const menu1 = useRef(null);
    const menu2 = useRef(null);
    const [lineOptions, setLineOptions] = useState(null);
    const { layoutConfig } = useContext(LayoutContext);
    // ## MAIN PROGRAM VARIABLE 
    const [isLogin, setIsLogin] = useState();
    const router = useRouter();

    const applyLightTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        // ProductService.getProductsSmall().then((data) => setProducts(data));
        const CookiesStatus = () => {
            console.log ("START LOGIN >");
            if(getCookie("ID_KCSBSALES")){
                // nothing
                setIsLogin(getCookie("ID_KCSBSALES"));
            } else {
                router.push("/kcsbsales/login");
            }

            // if(!isLogin){
            //     
            // }
        };
        CookiesStatus();
    }, [isLogin]);

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    return (
        <div className="grid">
            <div className="col-12 lg:col-12 xl:col-12">
                <div className="card mb-0">
                    KCSB
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
