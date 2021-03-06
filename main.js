const addButton = document.querySelector('#addButton');
const divList = document.querySelector('.listHolder');

//let counterID = 0;

function AddNew(){
    //add elements
    var isChecked=document.getElementById("switchValue").checked;
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');

    li.textContent = 0;
    li.setAttribute("id", "counterID"); //counterID++
    ul.appendChild(li);

    const down = document.createElement('button');
    down.className = 'btn-down';
    down.innerHTML = "-";

    const up = document.createElement('button');
    up.className = 'btn-up';
    up.innerHTML = "+";

    //increment down
    if(!isChecked){
        console.log(isChecked);
        down.addEventListener('click', () => {
            if(parseInt(li.textContent) <= 0){
                return;
            }
            li.textContent = parseInt(li.textContent) - 1;

            li.appendChild(down);
            li.appendChild(up);
        }); 
    }
    else{
        console.log(isChecked);
        down.addEventListener('click', () => {
            li.textContent = parseInt(li.textContent) - 1;

            li.appendChild(down);
            li.appendChild(up);
        }); 
    }

    //increment up
    up.addEventListener('click', () => {
        li.textContent = parseInt(li.textContent) + 1;

        li.appendChild(down);
        li.appendChild(up);
    }); 
    
    li.appendChild(down);
    li.appendChild(up);
}

addButton.addEventListener('click', () => {
    AddNew();
});
