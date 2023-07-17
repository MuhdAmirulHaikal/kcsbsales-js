import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            2023 <span className="font-medium ml-2">@EDP Team (South-East Regional Head Quarter)</span>
        </div>
    );
};

export default AppFooter;
