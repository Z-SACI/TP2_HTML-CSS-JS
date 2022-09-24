//Changing background color function
function bgcolor(){
    //get all divs in a list
    let divs = document.getElementsByTagName('div');
    //looping divs in divs variable and applying backgroundcolor
    for (let i=0 ; i<divs.length; i++){
        if (i%2)
            divs[i].style.backgroundColor = '#ffc06ed5';
        else if (i%3)
            divs[i].style.backgroundColor = '#f37e7ec2';
        else
            divs[i].style.backgroundColor = '#6a9494be';
   }
}
    