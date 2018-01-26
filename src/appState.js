import authState from './modules/auth/authState';

export default function getAppState () {
  const appState = {
    auth: new authState()
  }
  return appState;
}