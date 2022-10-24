

function guest(name) {
    // let confirm = false;
    // for (let i = 0; i < guestList.length; i++) {
    //     if (guestList[i]===name) {
    //         confirm = true;
    //     }
    // }
    // return confirm;
    return guestList.includes(name);
}

let guestList = ['Don', 'Henry', 'Zoe'];

const disp = document.getElementById('name');
const fname = document.getElementById('fname');
const btn = document.getElementById('btn');

btn.addEventListener("click", function() {
    if (guest(fname.value)) {
        disp.style.color = 'black';
        disp.innerHTML = fname.innerHTML + ' is in the list';
    } else {
        disp.innerHTML = fname.innerHTML + ' is not in the list';
        disp.style.color = 'red';
    }
    console.log(fname.value);
    
  });

