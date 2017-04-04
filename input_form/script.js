// fill out a form
var formResults = document.getElementById('results');
var person = {fname: '', femail: '', title: '', country: '', region: ''};
var inputValue = document.getElementsByTagName("input");
  function validateForm() {
      // create element for warning message
    // var warningMsg = document.createElement('p');
    // warningMsg.setAttribute('style', 'margin: 0; color: red;');
    // warningMsg.id = 'warningP';
    // var warningMsgExist = false;

    // required textarea field
       var customerText = document.querySelector('textarea');
 //       if( customerText.value === '') {
 //           warningMsg.innerHTML = 'Text must be filled out';
 //           insertAfter(customerText, warningMsg);
 //           customerText.style.borderColor = 'red';
 //           warningMsgExist = true;
 //              return false;
 //          }
 //          else if (warningMsgExist === true) {
 //             customerText.style.borderColor = '#a9a9a9'; // grey border textarea
 //             document.getElementById('warningP').remove();
 //             return false;
 //         }
 //         else {
 //             customerText.style.borderColor = '#a9a9a9'; // grey border textarea
 //         }
 //
 // console.log('warningMsgExist', warningMsgExist)

     // required name field
var requiredName  = document.getElementsByName('fname')[0];
//     if( requiredName.value === '') {
//         warningMsg.innerHTML = 'Name must be filled out';
//         insertAfter(requiredName, warningMsg);
//         requiredName.style.borderColor = 'red';
//         warningMsgExist = true;
//            return false;
//        }
//        else {
//            requiredName.style.borderColor = '#a9a9a9'; // grey border textarea
//            document.getElementById('warningP').remove();
//        }
    // required email field
var requiredEmail  = document.getElementsByName('femail')[0];
//     if( requiredEmail.value === '') {
//        warningMsg.innerHTML = 'Email must be filled out';
//        insertAfter(requiredEmail, warningMsg);
//        requiredEmail.style.borderColor = 'red';
//        warningMsgExist = true;
//           return false;
//       }
//       else {
//           requiredEmail.style.borderColor = '#a9a9a9'; // grey border textarea
//           document.getElementById('warningP').remove();
//       }


//   required 'name', 'email' and 'text'
// for (x = 0; x < inputValue.length; x++) {
//     reqName = inputValue[x].getAttribute("name");
//     if (reqName.indexOf("f") == 0) {
//         var requiredField = inputValue[x].value;
//         if (requiredField == '' || customerText.value === '') {
//             formResults.innerHTML = 'Name and Email, Text must be filled out';
//             formResults.style.color =  'red';
//             return false;
//         }
//       }
//    }

    if (requiredName.value ==='' || requiredEmail.value === '' || customerText.value === '') {
        formResults.innerHTML = 'Name, Email and Text must be filled out';
        formResults.style.color =  'red';
        requiredName.style.borderColor =  'red';
        requiredEmail.style.borderColor =  'red';
        customerText.style.borderColor =  'red';
        return false;
    }

    for (i = 0; i < inputValue.length; i++) {
        for (var i in person) {
            person[i] = inputValue[i].value;
            person[i].onkeypress = function(){
                person[i].style.borderColor =  'blue';
            };

        }
    }

// array of services that were chosen by customer
    var services = [];
    var o = document.getElementsByClassName('selected-options');
    for (j=0; j<o.length; j++) {
        services.push(o[j].textContent);
    }
    formResults.innerHTML = 'Name: ' + person.fname +"<br>"+ 'Email: ' + person.femail +"<br>"+ 'Title: ' + person.title +"<br>"+ 'Country: '+
                            person.country +"<br>"+'Region: ' + person.region + "<br>"+ 'Your text: ' + customerText.value + "<br>"+ 'Chosen services: ' + services;
    formResults.style.color =  '#0e3f1a';
    changeformBGHeight();

    console.log('person:', person);
    console.log('customerText.value:', customerText.value);
    console.log('services:', services);
}

// when drop-down option is selected, how its name before submit button
var selectBox = document.getElementById('variants');
function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

function chooseOption() {
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

changeformBGHeight();

// create span as a click button
        var close = document.createElement("span");
        close.innerHTML = 'X';
        close.setAttribute('style', 'padding-left: 25px; color: #d41a0d; cursor: pointer');
        close.className = 'close-symbol';
        insertAfter(el, close);
        close.onclick = function () {
            this.parentElement.removeChild(this);
            optionText.parentElement.removeChild(optionText);
            el.parentElement.removeChild(el);
            value.style.display = 'block';

            // if there is any chosen elements hide p =>'Chosen services:'
            if(document.getElementsByClassName('set-option').length === 0) {
                div.style.display = 'none';
            }
            changeformBGHeight();
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

// make background container the same height as the form;
function changeformBGHeight() {
    var formHeight = document.getElementById('formContent').offsetHeight;
    document.getElementById('formBG').style.height = formHeight + 10 + 'px';
}
