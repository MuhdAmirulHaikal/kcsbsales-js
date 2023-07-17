import React from 'react';
import AppConfig from '../layout/context/layoutcontext';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <span className="text-blue-500 font-bold text-3xl">404</span>
                    <h1 className="text-900 font-bold text-5xl mb-2">Not Found</h1>
                    <div className="text-600 mb-5">Requested resource is not available</div>

                </div>
            </div>
        </div>
    );
};



// Custom404.getLayout = function getLayout(page) {
//     return (
//         <React.Fragment>
//             {page}
//             <AppConfig />
//         </React.Fragment>
//     );
// };

export default Custom404;
