import "./App.css";
import LogoHeader from "./components/LogoHeader";
import LandingFormPage from "./components/LandingFormPage";
import FormProvider from "./store/FormProvider";

function App() {
  return (
    <FormProvider>
      <div className="app">
        <LogoHeader />
        <LandingFormPage />
      </div>
    </FormProvider>
  );
}

export default App;
