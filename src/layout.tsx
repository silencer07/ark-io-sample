import * as React from "react";

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
                <Routes/>
            </Router>
        );
    }
}

export default Layout;
