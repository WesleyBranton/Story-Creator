/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function create() {
    // Getting User Input
    var mname = document.getElementsByName('mname')[0].value;
    var adj1 = document.getElementsByName('adj1')[0].value;
    var animal = document.getElementsByName('animal')[0].value;
    var adj2 = document.getElementsByName('adj2')[0].value;
    var verb = document.getElementsByName('verb')[0].value;
    var noun = document.getElementsByName('noun')[0].value;

    // Modifying User Input
    mname = mname.toLowerCase();
    mname = mname.charAt(0).toUpperCase() + mname.slice(1);
    adj1 = adj1.toLowerCase();
    animal = animal.toLowerCase();
    adj2 = adj2.toLowerCase();
    verb = verb.toLowerCase();
    noun = noun.toLowerCase();

    // Getting Output
    var mnameOut = document.getElementsByClassName('mname');
    var adj1Out = document.getElementsByClassName('adj1');
    var animalOut = document.getElementsByClassName('animal');
    var adj2Out = document.getElementsByClassName('adj2');
    var verbOut = document.getElementsByClassName('verb');
    var nounOut = document.getElementsByClassName('noun');

    // Create Story
    for (i = 0; mnameOut.length > i; i++) {
        mnameOut[i].textContent = mname;
    }
    for (i = 0; adj1Out.length > i; i++) {
        adj1Out[i].textContent = adj1;
    }
    for (i = 0; animalOut.length > i; i++) {
        animalOut[i].textContent = animal;
    }
    for (i = 0; adj2Out.length > i; i++) {
        adj2Out[i].textContent = adj2;
    }
    for (i = 0; verbOut.length > i; i++) {
        verbOut[i].textContent = verb;
    }
    for (i = 0; nounOut.length > i; i++) {
        nounOut[i].textContent = noun;
    }

    // Change Display
    document.getElementsByTagName('form')[0].style.display = 'none';
    document.getElementById('story').style.display = 'block';
}