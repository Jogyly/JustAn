import React from 'react';
import './style.css';

class CharacterName extends React.Component {

    ViewCharacter(){
        var newWin = window.open('./character.html', 'example', 'width=600,height=400');

        newWin.onload = function() {

            // создать div в документе нового окна
            /*var div = newWin.document.createElement('div'),
                body = newWin.document.body;

            div.innerHTML = 'Добро пожаловать!'
            div.style.fontSize = '30px'

            // вставить первым элементом в body нового окна
            body.insertBefore(div, body.firstChild);*/
        }
    }

    render() {
        return (
            <div class="parent">
                <div class="child" onClick={() => this.ViewCharacter()}>
                    Hello, just another react
                </div>
            </div>
        );
    }
}

export default CharacterName;