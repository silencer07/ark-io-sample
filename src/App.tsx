import React, {useEffect, useState} from 'react';
import './tailwind.output.css';
import {RootStore} from "./model/root-store/root-store";
import {setupRootStore} from "./model/root-store/setup-root-store";
import {RootStoreProvider} from "./model/root-store/root-store-context";
import Layout from "./layout";

export interface AppProps {
    router: React.ComponentType;
    routes: React.ComponentType<any>;
}

export const App: React.FC<AppProps> = ({ router, routes }) => {
    const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)
    useEffect(() => {
        (async () =>
                setupRootStore().then(setRootStore)
        )()
    }, [])

    if (!rootStore) {
        return null
    }

    return (
        <RootStoreProvider value={rootStore}>
            <Layout router={router} routes={routes}/>
        </RootStoreProvider>
    );
}

export default App
