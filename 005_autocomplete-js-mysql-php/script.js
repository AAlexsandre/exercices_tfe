document.getElementById("auto-complete").addEventListener("input",function(){
    fetch('getCities.php?name='+this.value)
    .then((response) => response.json())
    .then((data) => test(data));
});


function test(data){
    // for (let index = 0; index < data.length; index++) {
    //     document.getElementById("results").appendChild(data[index]);
    // }
}