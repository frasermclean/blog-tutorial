import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  function getRandomMessage() {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
  }

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(getRandomMessage())}>
        New Greeting
      </button>
    </div>
  );
}
