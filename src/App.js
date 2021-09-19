import { useState } from "react";
import "./styles.css";
const emojiDictanory = {
  "❤️": "Red Heart",
  "😂": "Face with Tears of Joy",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😋": "Face Savoring Food",
  "😭": "Loudly Crying Face",
  "🔥": " Fire",
  "🍌": "Banana",
  "⛷️": "Skier"
};
var emojiWeKnow = Object.keys(emojiDictanory);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var inputEmoji = event.target.value;
    var meaning = emojiDictanory[inputEmoji];
    if (meaning === undefined) {
      meaning = "we don't have this in our database!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictanory[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>emoji we knows </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: ".5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
