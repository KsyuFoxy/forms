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
    formResults.innerHTML = 'Name: ' + person.fname +"<br>"+ 'Email: ' + person.femail +"<br>"+ 'Title: ' + person.title +"<br>"+ 'Country: '+
                            person.fcountry +"<br>"+'Region: '+ person.region;
    formResults.style.color =  '#0b0962';
}

// when drop-down option is selected, how its name before submit button
var selectBox = document.getElementById('variants');

    // function chooseOption() {
    //     var element = document.createElement("p");
    //     var elContent = document.createTextNode(selectBox.options[selectBox.selectedIndex].innerHTML);
    //     element.appendChild(elContent);
    //
    //     var option = document.getElementById('optionChosen');
    //     option.style.display = 'inline';
    //      option.insertBefore(element, option.childNodes[0]);
    //     console.log(elContent)
    // }

    function chooseOption() {
        function insertAfter(referenceNode, newNode) {
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }
        var value = selectBox.options[selectBox.selectedIndex];

         if (value.chosen) {
             return true;
         }
        value.chosen ? value.style.display = 'block' : value.style.display = 'none';

        var el = document.createElement("span");
        el.innerHTML = value.innerHTML;
        var div = document.getElementById("optionChosen");
        insertAfter(div, el);
        div.style.display = 'block';

        var close = document.createElement("span");
        close.innerHTML = 'X';
        insertAfter(el, close);

        if (close.isclose) {
            return true;
        }
        close.isclose ? value.style.display = 'none' : value.style.display = 'block';

        console.log(value)
    }
