var old=0
function display(val){
    if(!(old==val && typeof val=='string')){
        document.getElementById("screen").value+=val
        old=val
    }        
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function result(){
    var input=document.getElementById("screen").value
    document.getElementById('screen').value=eval(input)
}