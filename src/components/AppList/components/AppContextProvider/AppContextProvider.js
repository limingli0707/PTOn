import React, {useState} from 'react';

const AppsContext = React.createContext();

function useApps() {
    const context = React.useContext(AppsContext);
    return context;
}

function AppsProvider(props) {
    const [apps, setApps] = useState([]);
    const value = React.useMemo(() => [apps, setApps], [apps]);
    return <AppsContext.Provider value={value} {...props} />;
}

export {AppsProvider, useApps}