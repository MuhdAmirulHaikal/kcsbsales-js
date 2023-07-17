import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AppConfig from '../../../layout/AppConfig';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { classNames } from 'primereact/utils';

const OrderPage = () => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);

    const router = useRouter();
    const containerClassName = classNames(' grid overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (

        <div className={containerClassName}>
            <div className="col-12 lg:col-12 xl:col-12">
                <div className="card mb-0">
                    ORDER
                </div>
            </div>

        </div>

      
    );
};

// OrderPage.getLayout = function getLayout(page) {
//     return (
//         <React.Fragment>
//             {page}
//             <AppConfig />
//         </React.Fragment>
//     );
// };

export default OrderPage;
