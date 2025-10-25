import "./App.css";
import { Hero } from "./components/Hero/Hero.jsx";
import { ContactList } from "./components/ContactList/ContactList.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { GlobalStyle } from "./GlobalStyles.js";
import { Main } from "./App.js";

import { ContactsProvider } from "./contexts/ContactsContext.jsx";

export const App = () => {
  return (
    <Main className="App">
      <GlobalStyle />
      <ContactsProvider>
        <Hero />
        <ContactList />
        <Footer />
      </ContactsProvider>
    </Main>
  );
};

export default App;
