import { Auth0Provider} from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Server from 'http-proxy';
import './App.css';
import Routes from './Routes/Routes';


function App() {
  return (
    <Auth0Provider
    domain="mercacampe.us.auth0.com"
    clientId="1O96RCo1b8D3LpbOH7nz8UQYjiUzpQKk"
    redirectUri={window.location.origin}
  >
    <Routes />
  </Auth0Provider>
  );
}

export default App;
