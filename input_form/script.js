// fill out a form
var formResults = document.getElementById('results');
var person = {name: '', email: '', title: '', country: '', region: ''};
var inputValue = document.getElementsByTagName("input");
var warningMsgNameExist = false;
var warningMsgEmailExist = false;
var warningMsgTextExist = false;

  function validateForm() {
// required name field
var requiredName  = document.getElementsByName('name')[0];
    if(requiredName.value === ''  && warningMsgNameExist === false) {
        var warningMsgName = document.createElement('p');
        warningMsgName.setAttribute('style', 'margin: 0; color: red;');
        warningMsgName.id = 'warningName';
        warningMsgName.innerHTML = 'Name must be filled out';
        insertAfter(requiredName, warningMsgName);
        requiredName.style.borderColor = 'red';
        warningMsgNameExist = true;
       }
       else if (requiredName.value === ''  && warningMsgNameExist === true) {
           requiredName.style.borderColor = 'red';
       }
       else if (requiredName.value !== '' && warningMsgNameExist === true) {
           requiredName.style.borderColor = '#a9a9a9'; // grey border name
           document.getElementById('warningName').remove();
           warningMsgNameExist = false;
       } else {
           requiredName.style.borderColor = '#a9a9a9'; // grey border name
       }

// validate email address
    function validateEmail(email) {
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
    }
// required email field
var requiredEmail  = document.getElementsByName('email')[0];
var warningMsgEmail = document.createElement('p');
warningMsgEmail.setAttribute('style', 'margin: 0; color: red;');
warningMsgEmail.id = 'warningEmail';

    if ( requiredEmail.value === '' && warningMsgEmailExist === false) {
       warningMsgEmail.innerHTML = 'Email must be filled out';
       insertAfter(requiredEmail, warningMsgEmail);
       requiredEmail.style.borderColor = 'red';
       warningMsgEmailExist = true;
      }
      else if (requiredEmail.value === ''  && warningMsgEmailExist === true) {
          requiredEmail.style.borderColor = 'red';
      }
      else if (requiredEmail.value !== '' && warningMsgEmailExist === true) {
          requiredEmail.style.borderColor = '#a9a9a9'; // grey border email
          document.getElementById('warningEmail').remove();
           warningMsgEmailExist = false;
           if ( validateEmail(requiredEmail.value) == false && warningMsgEmailExist === false) {
               warningMsgEmail.innerHTML = 'Email is not correct';
               warningMsgEmail.style.color = '#ff22d6'; // violet text
               insertAfter(requiredEmail, warningMsgEmail);
               requiredEmail.style.borderColor = '#ff22d6'; // violet border
               warningMsgEmailExist = true;
           } else if ( validateEmail(requiredEmail.value) == false &&  warningMsgEmailExist === true) {
               document.getElementById('warningEmail').remove();
               warningMsgEmailExist = false;
           }
      } else {
          requiredEmail.style.borderColor = '#a9a9a9'; // grey border email
          if ( validateEmail(requiredEmail.value) == false && warningMsgEmailExist === false) {
              warningMsgEmail.innerHTML = 'Email is not correct';
              warningMsgEmail.style.color = '#ff22d6'; // violet text
              insertAfter(requiredEmail, warningMsgEmail);
              requiredEmail.style.borderColor = '#ff22d6'; // violet border
              warningMsgEmailExist = true;
          } else if ( validateEmail(requiredEmail.value) == false &&  warningMsgEmailExist === true) {
              document.getElementById('warningEmail').remove();
              warningMsgEmailExist = false;
          }
      }
// required textarea field
    var customerText = document.querySelector('textarea');
         if ( customerText.value === '' && warningMsgTextExist === false) {
             var warningMsgText = document.createElement('p');
             warningMsgText.setAttribute('style', 'margin: 0; color: red;');
             warningMsgText.id = 'warningText';
             warningMsgText.innerHTML = 'Text must be filled out';
             insertAfter(customerText, warningMsgText);
             customerText.style.borderColor = 'red';
             warningMsgTextExist = true;
            }
            else if (customerText.value === ''  && warningMsgTextExist === true) {
                customerText.style.borderColor = 'red';
            }
            else if (warningMsgTextExist === true && customerText.value !== '') {
               customerText.style.borderColor = '#a9a9a9'; // grey border textarea
               document.getElementById('warningText').remove();
               warningMsgTextExist = false;
           } else {
               customerText.style.borderColor = '#a9a9a9'; // grey border name
           }

// if (warningMsgNameExist=== true && warningMsgEmailExist===true && warningMsgTextExist===true) {
//    requiredName.style.borderColor = 'yellow';
//    requiredEmail.style.borderColor = 'yellow';
//    requiredText.style.borderColor = 'yellow';
// }

// array of services that were chosen by customer
    var services = [];
    var o = document.getElementsByClassName('selected-options');
    for (j=0; j<o.length; j++) {
        services.push(o[j].textContent);
    }
    for (i = 0; i < inputValue.length; i++) {
        for (var i in person) {
            person[i] = inputValue[i].value;
            };
        }
    formResults.innerHTML = 'Name: ' + person.name +"<br>"+ 'Email: ' + person.email +"<br>"+ 'Title: ' + person.title +"<br>"+ 'Country: '+
                            person.country +"<br>"+'Region: ' + person.region + "<br>"+ 'Your text: ' + customerText.value + "<br>"+ 'Chosen services: ' + services;
    formResults.style.color =  '#0e3f1a';
    changeformBGHeight();

    // console.log('person:', person);
    // console.log('customerText.value:', customerText.value);
    // console.log('services:', services);
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
