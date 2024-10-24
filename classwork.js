function fireFun(){
    let resultDisplay = document.getElementById('result');

    let checkBtn = document.getElementById('check');

    let textChecker = document.getElementById('checkText').value;

    resultDisplay = Number;
    const age = document.getElementById('age').value;

    switch(true){
        case age < 18:
            document.getElementById('img')[0].style.display = 'block';
            document.getElementById('img')[1].style.display = 'none';
            document.getElementById('result').innerHTML = 'You are not of age yet'
            break;
        case age >= 18:  
        resultDisplay.innerHTML = 'You are eligible for alcohol';
            break; 
        case 'object':  
            console.log('data type: object');
            break;       
        default: 
            console.log('data type: object')    
    }

    document.getElementById("check").innerHTML = "Good day!";
}