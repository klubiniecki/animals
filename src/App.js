import React from "react";
import Animal from "./animal";

import horse from "./animalSounds/horse.mp3";
import pig from "./animalSounds/pig.mp3";
import dog from "./animalSounds/dog.mp3";
import cat from "./animalSounds/cat.mp3";
import bear from "./animalSounds/bear.mp3";
import cock from "./animalSounds/cock.mp3";
import chicken from "./animalSounds/chicken.mp3";
import cow from "./animalSounds/cow.mp3";
import dolphin from "./animalSounds/dolphin.mp3";
import donkey from "./animalSounds/donkey.mp3";
import duck from "./animalSounds/duck.mp3";
import eagle from "./animalSounds/eagle.mp3";
import elephant from "./animalSounds/elephant.mp3";
import frog from "./animalSounds/frog.mp3";
import goat from "./animalSounds/goat.mp3";
import goose from "./animalSounds/goose.mp3";
import gorilla from "./animalSounds/gorilla.mp3";
import koala from "./animalSounds/koala.mp3";
import kookabura from "./animalSounds/kookabura.mp3";
import lion from "./animalSounds/lion.mp3";
import magpie from "./animalSounds/magpie.mp3";
import monkey from "./animalSounds/monkey.mp3";
import mouse from "./animalSounds/mouse.mp3";
import owl from "./animalSounds/owl.mp3";
import pigeon from "./animalSounds/pigeon.mp3";
import sheep from "./animalSounds/sheep.mp3";

import horseImg from "./animalImages/horse.jpeg";
import pigImg from "./animalImages/pig.jpeg";
import dogImg from "./animalImages/dog.jpeg";
import catImg from "./animalImages/cat.png";
import bearImg from "./animalImages/bear.jpeg";
import cockImg from "./animalImages/cock.jpg";
import chickenImg from "./animalImages/chicken.jpg";
import cowImg from "./animalImages/cow.jpeg";
import dolphinImg from "./animalImages/dolphin.jpeg";
import donkeyImg from "./animalImages/donkey.jpeg";
import duckImg from "./animalImages/duck.jpeg";
import eagleImg from "./animalImages/eagle.jpeg";
import elephantImg from "./animalImages/elephant.jpeg";
import frogImg from "./animalImages/frog.jpg";
import goatImg from "./animalImages/goat.jpeg";
import gooseImg from "./animalImages/goose.png";
import gorillaImg from "./animalImages/gorilla.jpeg";
import koalaImg from "./animalImages/koala.jpg";
import kookaburaImg from "./animalImages/kookabura.jpeg";
import lionImg from "./animalImages/lion.jpeg";
import magpieImg from "./animalImages/magpie.jpg";
import monkeyImg from "./animalImages/monkey.jpg";
import mouseImg from "./animalImages/mouse.jpeg";
import owlImg from "./animalImages/owl.jpg";
import pigeonImg from "./animalImages/pigeon.jpeg";
import sheepImg from "./animalImages/sheep.png";

function App() {
  const animals = [
    <Animal src={horseImg} url={horse} />,
    <Animal src={pigImg} url={pig} />,
    <Animal src={dogImg} url={dog} />,
    <Animal src={catImg} url={cat} />,
    <Animal src={bearImg} url={bear} />,
    <Animal src={cockImg} url={cock} />,
    <Animal src={chickenImg} url={chicken} />,
    <Animal src={cowImg} url={cow} />,
    <Animal src={dolphinImg} url={dolphin} />,
    <Animal src={donkeyImg} url={donkey} />,
    <Animal src={duckImg} url={duck} />,
    <Animal src={eagleImg} url={eagle} />,
    <Animal src={elephantImg} url={elephant} />,
    <Animal src={frogImg} url={frog} />,
    <Animal src={goatImg} url={goat} />,
    <Animal src={gooseImg} url={goose} />,
    <Animal src={gorillaImg} url={gorilla} />,
    <Animal src={koalaImg} url={koala} />,
    <Animal src={kookaburaImg} url={kookabura} />,
    <Animal src={lionImg} url={lion} />,
    <Animal src={magpieImg} url={magpie} />,
    <Animal src={monkeyImg} url={monkey} />,
    <Animal src={mouseImg} url={mouse} />,
    <Animal src={owlImg} url={owl} />,
    <Animal src={pigeonImg} url={pigeon} />,
    <Animal src={sheepImg} url={sheep} />
  ];

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return <div className="App">{shuffle(animals).map(a => a)}</div>;
}

export default App;
