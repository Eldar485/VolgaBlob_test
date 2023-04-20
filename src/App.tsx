import './styles/App.scss';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.tsx";

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
