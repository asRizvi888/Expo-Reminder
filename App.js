import { Provider as SettingsProvider } from "./Context/SettingsContext";
import { Provider as ReminderProvider } from "./Context/ReminderDataContext";

import React from "react";
import Main from "./Screens/main";

export default function App() {
  return (
    <SettingsProvider>
      <ReminderProvider>
        <Main />
      </ReminderProvider>
    </SettingsProvider>
  );
}
