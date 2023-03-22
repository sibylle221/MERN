import React, { useState, useEffect } from "react";

function Reminder() {
  const [reminderText, setReminderText] = useState("");
  const [reminderTime, setReminderTime] = useState(null);

  function handleReminder() {
    const currentTime = new Date().getTime();
    const fiveMinutesLater = new Date(currentTime + 5 * 60 * 1000);
    setReminderTime(fiveMinutesLater);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (reminderTime && new Date() >= reminderTime) {
        alert(reminderText);
        setReminderText("");
        setReminderTime(null);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [reminderTime]);

  return (
    <div>
      <input
        type="text"
        value={reminderText}
        onChange={(e) => setReminderText(e.target.value)}
      />
      <button onClick={handleReminder}>Set Reminder</button>
    </div>
  );
}
