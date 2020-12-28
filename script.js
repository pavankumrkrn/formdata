let userData = {
    Firstname: '',
    Lastname: '',
    Address: '',
    State: '',
    Country: '',
    Pincode: '',
    Food: '',
    Gender: ''
}


function createElement(element, className = '', id = '') {
    let ele = document.createElement(element);
    ele.setAttribute('class', className);
    ele.id = id;
    return ele
}

function getRow(obj, type) {
    let row = createElement('div', 'row');
    for (let i in obj) {
        let col = createElement('div', 'col-sm-4');
        let label = createElement('label');
        label.setAttribute('for', obj[i]);
            label.innerText = obj[i];
        if (type === 'input') {
            let input = createElement('input', 'form-control', obj[i])
            if (obj[i] === 'Pincode') {
                input.setAttribute('type', 'number')
            } else {
                input.type = 'text'
            }
            input.required = 'true'
            col.append(label, input);
        } else {
            label.setAttribute('for', obj[i].text);
            label.innerText = obj[i].text;
            let select = createElement('select', 'form-control', obj[i].text)
            select.required = 'true';
            let str = '<option value="">--Select--</option>';
            obj[i].options.forEach(option=>{
               str += `<option value='${option}'>${option}</option>`

            });
            select.innerHTML=str;
            col.append(label, select);
        }
        row.append(col)
    }
    return row
}


// html appending
let container = createElement('div', 'container');
let card1 = createElement('div', 'card mt-4');
let cardbody1 = createElement('div', 'card-body');
let cardTitle1 = createElement('div', 'card-title');
let p1 = createElement('p', 'h4');
p1.innerText = 'User Information';
cardTitle1.append(p1);
let hr1 = createElement('hr');
let cardText1 = createElement('div', 'card-text');
let form = createElement('form', 'myForm', 'myForm');
let row1 = getRow(['Firstname','Lastname','Address'],'input')
let row2 = getRow(['State','Country','Pincode'],'input')
let row3 = getRow([{text:'Food', options:['Noodles', 'Pizza', 'Frankie']},
                   {text:'Gender', options:['Male', 'Female']}],'select')

let row4 = createElement('div','row');
let col = createElement('div','col-12')
let button1 = createElement('button', 'btn btn-primary')
button1.type = 'submit';
button1.innerText = 'Submit';
let button2 = createElement('button', 'btn btn-danger ml-2');
let br = createElement('br')
button2.type = 'reset';
button2.innerText = 'Clear';
col.append(button1, button2);
row4.append(col);
form.append(row1, row2, row3, br, row4);
cardText1.append(form);
cardbody1.append(cardTitle1,hr1,cardText1);
card1.append(cardbody1);

let card2 = createElement('div', 'card mt-3');
let cardbody2 = createElement('div', 'card-body');
let cardTitle2 = createElement('div', 'card-title');
let p2 = createElement('p', 'h4');
p2.innerText = 'Registered Users';
cardTitle2.append(p2);
let hr2 = createElement('hr');
let cardText2 = createElement('div', 'card-text');
let row21 = createElement('div', 'row');
let col2 = createElement('div', 'col-sm');
col2.style = 'overflow-x:auto;'
let table = createElement('table', 'table table-striped table-bordered');
let thead = createElement('thead');
let tr =  createElement('tr');
let th1 = createElement('th');
th1.innerText = 'Slno';
tr.append(th1);
for (let i in userData){
    let th2 = createElement('th');
    th2.innerText = i;
    tr.append(th2)
}
thead.append(tr);
let tbody = createElement('tbody', 'body', 'body');
table.append(thead, tbody);
col2.append(table);
row21.append(col2);
cardText2.append(row21);
cardbody2.append(cardTitle2, hr2, cardText2);
card2.append(cardbody2);
container.append(card1,card2);
document.body.append(container);
//end of html appending



let count = 0;
document.getElementById('myForm').onsubmit = function (e) {
    console.log('hi');
    e.preventDefault();
    let formObject = document.getElementById('myForm').elements;
    count++;
    let tr = createElement('tr');
    let slnoTD = createElement('td');
    slnoTD.innerText = count;
    tr.append(slnoTD)
    for (let i in userData) {
        userData[i] = formObject[i].value;
        let td = createElement('td');
        td.innerText = formObject[i].value;
        tr.append(td);
    }
    document.getElementById('body').append(tr);

}

