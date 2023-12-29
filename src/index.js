import { React } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

function MyApp() {
  //display strings
  const nameArray = [
    "Heater 1",
    "Heater 2",
    "Heater 3",
    "Heater 4",
    "Clap",
    "Open-HH",
    "Kick-n'-Hat",
    "Kick",
    "Closed-HH",
  ];

  const [text, setText] = useState("");

  //function that will look for the keyword and then print it in display

  function show(char) {
    if (char === "Q") {
      setText(nameArray[0]);
    } else if (char === "W") {
      setText(nameArray[1]);
    } else if (char === "E") {
      setText(nameArray[2]);
    } else if (char === "A") {
      setText(nameArray[3]);
    } else if (char === "S") {
      setText(nameArray[4]);
    } else if (char === "D") {
      setText(nameArray[5]);
    } else if (char === "Z") {
      setText(nameArray[6]);
    } else if (char === "X") {
      setText(nameArray[7]);
    } else {
      setText(nameArray[8]);
    }
  }

  //functions that will be triggered whenevr the button is pressed
  function playQ() {
    let char = "Q";
    var audio = document.getElementById(char);
    show(char);
    audio.play();
  }

  function playW() {
    let char = "W";
    var audio = document.getElementById(char);
    show(char);
    audio.play();
  }

  function playE() {
    let char = "E";
    var audio = document.getElementById(char);
    show(char);
    audio.play();
  }

  function playA() {
    let char = "A";
    var audio = document.getElementById(char);
    show(char);
    audio.play();
  }

  function playS() {
    let char = "S";
    var audio = document.getElementById(char);
    show(char);
    audio.play();
  }

  function playD() {
    let char = "D";
    var audio = document.getElementById(char);
    show(char);
    audio.play();
  }

  function playZ() {
    let char = "Z";
    var audio = document.getElementById(char);
    show(char);
    audio.play();
  }

  function playX() {
    let char = "X";
    var audio = document.getElementById(char);
    show(char);
    audio.play();
  }

  function playC() {
    let char = "C";
    var audio = document.getElementById(char);
    show(char);
    audio.play();
  }

  //event listenrs will trigger audio whenever the keyboard button is pressed

  document.addEventListener("keydown", function (e) {
    if (e.key === "q" || e.key === "Q") {
      playQ();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "w" || e.key === "W") {
      playW();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "e" || e.key === "E") {
      playE();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "a" || e.key === "A") {
      playA();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "s" || e.key === "S") {
      playS();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "d" || e.key === "D") {
      playD();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "z" || e.key === "Z") {
      playZ();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "x" || e.key === "X") {
      playX();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "c" || e.key === "C") {
      playC();
    }
  });

  //main return element
  return (
    <>
      <div id="drum-machine">
        <div id="display">
          <em>{text}</em>
        </div>
        <button className="drum-pad" id="Qbutton" onClick={playQ}>
          Q
          <audio
            className="clip"
            id="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            type="audio/mp3"
          ></audio>
        </button>
        <button className="drum-pad" id="Wbutton" onClick={playW}>
          W
          <audio
            className="clip"
            id="W"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            type="audio/mp3"
          ></audio>
        </button>
        <button className="drum-pad" id="Ebutton" onClick={playE}>
          E
          <audio
            className="clip"
            id="E"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            type="audio/mp3"
          ></audio>
        </button>
        <br />
        <button className="drum-pad" id="Abutton" onClick={playA}>
          A
          <audio
            className="clip"
            id="A"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            type="audio/mp3"
          ></audio>
        </button>
        <button className="drum-pad" id="Sbutton" onClick={playS}>
          S
          <audio
            className="clip"
            id="S"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            type="audio/mp3"
          ></audio>
        </button>
        <button className="drum-pad" id="Dbutton" onClick={playD}>
          D
          <audio
            className="clip"
            id="D"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            type="audio/mp3"
          ></audio>
        </button>
        <br />
        <button className="drum-pad" id="Zbutton" onClick={playZ}>
          Z
          <audio
            className="clip"
            id="Z"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            type="audio/mp3"
          ></audio>
        </button>
        <button className="drum-pad" id="Xbutton" onClick={playX}>
          X
          <audio
            className="clip"
            id="X"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            type="audio/mp3"
          ></audio>
        </button>
        <button className="drum-pad" id="Cbutton" onClick={playC}>
          C
          <audio
            className="clip"
            id="C"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            type="audio/mp3"
          ></audio>
        </button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
