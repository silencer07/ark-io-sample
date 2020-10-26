import * as React from "react";
import SideBar from "./components/side-bar/side-bar";
import TopBar from "./components/top-bar/top-bar";
import BottomBar from "./components/bottom-bar/bottom-bar";

export interface LayoutProps {
    router: React.ComponentType;
    routes: React.ComponentType<any>;
}

class Layout extends React.Component<LayoutProps> {
    public render() {
        const Router = this.props.router;
        const Routes = this.props.routes;

        return (
            <Router>
                <div className="h-screen w-screen flex bg-indigo-700">
                    <SideBar />
                    <div className="flex flex-col w-screen">
                        <TopBar />
                        <div className="mx-2 my-4">
                            <Routes/>
                        </div>
                    </div>
                    <BottomBar />
                </div>
            </Router>
        );
    }
}

export default Layout;
