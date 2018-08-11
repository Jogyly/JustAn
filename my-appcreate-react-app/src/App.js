import React from 'react';
import './style.css';
import Character from './character.js';
import ReactDOM from 'react-dom';

class CharacterName extends React.Component {

    ViewCharacter(){
        var newWin = window.open('/character.html', 'example', 'width=600,height=400');


        /*ReactDOM.render(
            <Character/>,
            document.getElementById('name')
        );*/

       /* newWin.document.write(

            "<script>window.opener.document.body.innerHTML = 'Test'</scr" + "ipt>"
        );*/

        newWin.onload = function() {
            // создать div в документе нового окна
           // newWin.document.getElementById('root').remove();//

            newWin.document.getElementById('name').innerHTML = "Test";
           /* var div = newWin.document.createElement('div');
            var body = newWin.document.body;

            div.id = 'root2';
            body.innerHTML = 'Добро пожаловать!';

            var divName = newWin.document.createElement('div');
            var divDescription = newWin.document.createElement('div');
            var divPhoto = newWin.document.createElement('div');

            // вставить первым элементом в body нового окна
            body.insertBefore(div, body.firstChild);

            body.innerHTML = "<script>" +
                "" +
                "</script>";

           React.render(
                <Character/>,
                document.getElementById('root2')
            );

            divDescription.innerHTML = 'Description';
            body.insertBefore(divDescription, body.firstChild);

            divName.innerHTML = 'Shadow';
            body.insertBefore(divName, body.firstChild);

            divPhoto.innerHTML = 'Photo';
            body.insertBefore(divPhoto, body.firstChild);*/
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