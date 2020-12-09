import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🇦🇺": "Australia",
  "🇧🇩": "Bangladesh",
  "🇨🇦": "Canada",
  "🇨🇳": "China",
  "🇩🇪": "Germany",
  "🇫🇷": "France",
  "🇮🇱": "Israel",
  "🇮🇳": "India",
  "🇰🇿": "Kazakhstan"
};

var knownFlags = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  // function for inputHandler

  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in your database";
    }
    setMeaning(meaning);
  }

  // function for emojiClick handler

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">Flag-o-pedia</h1>
      <hr></hr>
      <p className="para">
        "People have hard time recognizing the flags".So stress less,enjoy the
        rest.Wanna test you knowleadge
      </p>

      <input
        className="input-field"
        onChange={inputEmojiHandler}
        style={{ padding: "1rem", margin: "0.5rem", width: "50%" }}
      ></input>

      <div className="output-field">{meaning}</div>

      <h3 className="sec-heading">Flags we know</h3>
      {knownFlags.map(function (emoji) {
        return (
          <div className="span-tag">
            <span
              style={{
                padding: "0.5rem",
                fontSize: "1.3rem",
                margin: "1rem",
                cursor: "pointer"
              }}
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          </div>
        );
      })}
    </div>
  );
}
