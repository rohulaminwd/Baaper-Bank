
// login page java script code
document.getElementById('login-btn').addEventListener('click', function(){
    const inputEmail = document.getElementById('input-email');
    const inputPassword = document.getElementById('input-password');

    if(inputEmail.value == 'rohulamin@gmail.com' && inputPassword.value == 'rohul'){

        window.location.href = 'bank.html';
    }
    else{
        console.log('login failed')
    }
   
})

// blance maintain java script code

function myFunction(id1, id2, id3){

    let dInput = document.getElementById(id1);
    let dInputT = parseFloat(dInput.value);

    let dTotal= document.getElementById(id2);
    let dTotalT = parseFloat(dTotal.innerText);

    let totalBlance = document.getElementById('total-blance');
    let totalBlanceT = parseFloat(totalBlance.innerText);

    if(dInputT != '' && dInputT > 0){

        if(id3 == 'true'){
            totalBlance.innerText = totalBlanceT + dInputT;
            dTotal.innerText = dTotalT + dInputT ;
        }
        else if(id3 == 'false' && totalBlanceT >= dInputT){
            totalBlance.innerText = totalBlanceT - dInputT;
            dTotal.innerText = dTotalT + dInputT ;
        }else{
            alert('Baaper taka ses...!!!')
        }
    }else{
        alert('please Enter your valid Amount...!!')
    }
    dInput.value = '';
}

// function diposit(id1, id2, id3){
//     let WInput = document.getElementById(id1);
//     let WInputT = parseFloat(WInput.value);

//     let WTotal= document.getElementById(id2);
//     let WTotalT = parseFloat(WTotal.innerText);

//     let totalBlance = document.getElementById(id3);
//     let totalBlanceT = parseFloat(totalBlance.innerText);

//     if(WInputT != '' && WInputT > 0 && totalBlanceT >= WInputT){
        
//         WTotal.innerText = WTotalT + WInputT ;
//         totalBlance.innerText = totalBlanceT - WInputT;
//     }

//     WInput.value = '';
// }