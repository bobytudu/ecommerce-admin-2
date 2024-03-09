import "./App.css";
import { Provider } from "react-redux";
import ThemeProvider from "src/theme";
import { HashRouter } from "react-router-dom";
import Routes from "routes/Routes";
import store from "src/redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider>
          <HashRouter>
            <Routes />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
