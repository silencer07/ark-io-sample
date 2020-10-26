import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {RootStore} from "./model/root-store/root-store";
import {setupRootStore} from "./model/root-store/setup-root-store";
import {RootStoreProvider} from "./model/root-store/root-store-context";

export default function App() {
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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </RootStoreProvider>
    );
}
