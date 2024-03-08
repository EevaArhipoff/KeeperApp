import React, {useState} from "react";

function Header() {

  // //CLOCK
  setInterval(newTime, 1000);
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function newTime() {
    const timeNow = new Date().toLocaleTimeString();
    setTime(timeNow);
  }


    return  <header>
        <h1>Keeper</h1>
        <img src = "https://img.freepik.com/free-poto/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?t=st=1702812868~exp=1702816468~hmac=192b46eed03de7fa62e837e5713d7c1b3daf137ce5207595053fa0a7c9ea6a43&w=740" width = "70px" height = "70px" alt="little profile pic of a girl"/>
        <p id="clock">{time}</p>
    </header>
}

export default Header;

