// fill out a form
var formResults = document.getElementById('results');
var person = {fname: '', femail: '', title: '', fcountry: '', region: ''};
var inputValue = document.getElementsByTagName("input");
  function validateForm() {
      // required 'name', 'email' and 'country'
    // for (x=0; x<inputValue.length; x++) {
    //     reqName = inputValue[x].getAttribute("name");
    //     if (reqName.indexOf("f") == 0 ) {
    //         var requiredField = inputValue[x].value;
    //         if (requiredField == '') {
    //             formResults.innerHTML = 'Name, Email and Country must be filled out';
    //             formResults.style.color =  'red';
    //             return false;
    //         }
    //     }
    //
    // }

    for (i = 0; i < inputValue.length; i++) {
        for (var i in person) {
            person[i] = inputValue[i].value;
        }
    }
// array of services that were chosen by customer
    var services = [];
    var o = document.getElementsByClassName('selected-options');
    for (j=0; j<o.length; j++) {
        services.push(o[j].textContent);
    }
    formResults.innerHTML = 'Name: ' + person.fname +"<br>"+ 'Email: ' + person.femail +"<br>"+ 'Title: ' + person.title +"<br>"+ 'Country: '+
                            person.fcountry +"<br>"+'Region: '+ person.region + "<br>"+ 'Chosen services: ' + services;
    formResults.style.color =  '#607d8b';


    console.log('person:', person);
    console.log('services:', services);
}

// when drop-down option is selected, how its name before submit button
var selectBox = document.getElementById('variants');

    function chooseOption() {
        function insertAfter(referenceNode, newNode) {
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }
var value = selectBox.options[selectBox.selectedIndex];

         if (value.chosen) {
             return true;
         }
        value.chosen ? value.style.display = 'block' : value.style.display = 'none';
// create div
        var el = document.createElement("div");
        el.innerHTML = '';
        el.className = 'set-option'
        var div = document.getElementById("optionChosen");
        div.style.display = 'block';
        insertAfter(div, el);

// create span as a click button
        var close = document.createElement("span");
        close.innerHTML = 'X';
        close.setAttribute('style', 'padding-left: 25px; color: red; cursor: pointer');
        close.className = 'close-symbol';
        insertAfter(el, close);
        close.onclick = function () {
            this.parentElement.removeChild(this);
            optionText.remove();
            el.remove();
            value.style.display = 'block';

            // if there is any chosen elements hide p =>'Chosen services:'
            if(document.getElementsByClassName('set-option').length === 0) {
                div.style.display = 'none';
            }
        };


// create span with option value
        var optionText = document.createElement("span");
        optionText.innerHTML = value.innerHTML;
        optionText.className = 'selected-options'
        insertAfter(el, optionText);
}
// option 'select' is not active
var optionSelect = selectBox.querySelector('option[value="select"]');
optionSelect.disabled = 'disabled';
optionSelect.style.color = '#c2bfbf';
