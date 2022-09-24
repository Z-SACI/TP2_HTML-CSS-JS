//For this drag and drop script credit goes to AngularEnthusiast
//I have used the AngularEnthusiast tutorial available on ramya-bala221190.medium.com 

//Variable declarations
let dragid=0;
let dropid=0;
let clone;

//function Drag used ondragstart
function drag(e){
    e.dataTransfer.setData("text/plain",e.target.id);
}

//function drop used ondrop
function drop(e){
    e.preventDefault();
    clone=e.target.cloneNode(true);
    let data=e.dataTransfer.getData("text"); 
    //condition id the dragged item is getting dropped on another
    if(clone.id !== data) {
        let nodelist=document.getElementById("dragdrop").childNodes;
        for(let i=0;i<nodelist.length;i++){
            if(nodelist[i].id==data){
                dragid=i;
            }
        }
        document.getElementById("dragdrop").replaceChild(document.getElementById(data),e.target);
        document.getElementById("dragdrop").insertBefore(clone,document.getElementById("dragdrop").childNodes[dragid]);
    }
}

//function ondragover
function dragover(e){
    //prevent from execution while dragging over the element
    e.preventDefault();
}