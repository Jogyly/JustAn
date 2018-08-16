import React from 'react';
import './style.css';
import Character from './character.js';
import ReactDOM from 'react-dom';

class CharacterName extends React.Component {

    ViewCharacter(){

        function readTextFile(file, callback) {
            var rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function() {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    callback(rawFile.responseText);
                }
            }
            rawFile.send(null);
        }

        let data = null;
        let win = this.window;

        let newWin = window.open('./character.html', 'example', 'width=600,height=400');

        readTextFile("./characterInfo.json", function(text){
            data = JSON.parse(text);

            let charName = "Wolf";

            let char = data.characters.filter( function(item) {return item.name == charName}  )//data[charName].description;

            if (char != null)
            {
                let charDescr = char[0].description;
                let charImg = char[0].img;

                CreateNewWindow(charName, charDescr, charImg);
            }

            //let charDescr = (data) => data.filter(item == charName);
            //console.log(charDescr);
            let charImg = null;


            console.log(data);
        });

        function CreateNewWindow(charName, charDescr, charImg) {

            newWin.onload = function () {

                newWin.document.getElementById('name').innerText = charName;
                newWin.document.getElementById('description').innerText = charDescr;
                newWin.document.getElementById('photo').innerText = charImg;
                //char.innerText = "charName";

            }
        }
    }

    render() {
        return (
            <div className="parent">
                <div className="child" onClick={() => this.ViewCharacter()}>
                    Hello, just another react
                </div>
            </div>
        );
    }
}

export default CharacterName;