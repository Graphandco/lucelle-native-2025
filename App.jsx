import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Header } from 'components/header/Header';

import './global.css';

export default function App() {
  return (
    <>
      <Header />
      <ScreenContent title="Home" path="App.jsx" />
      <StatusBar style="light" backgroundColor="#1e293b" translucent={false} />
    </>
  );
}
