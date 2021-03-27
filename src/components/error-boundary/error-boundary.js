import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";

class ErrorBoundary extends Component {

    state = {hasError:false};

    static getDerivedStateFromError(){
        return {hasError: true};
    }

  /*  componentDidCatch(error, errorInfo) {
        super.componentDidCatch(error, errorInfo);
    }*/

    render() {

        if (this.state.hasError){
            return <ErrorIndicator/>
        }

        return this.prop.children;
    }
}

export default ErrorBoundary;
