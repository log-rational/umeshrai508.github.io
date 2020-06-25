updateTotal();

var calcSliders = document.querySelectorAll('.calc-slider');
for (var i = 0; i < calcSliders.length; i++) {
    calcSliders[i].addEventListener('input', function (event) {
        if (event.target.id === 'amoutPerclass') {
            document.querySelector('#valAmountPerClass').innerText = "$" + parseInt(event.target.value).toFixed(2);
        } else if (event.target.id === 'numAttendees') {
            document.querySelector('#valNumAttendees').innerText = event.target.value;
            
        } else if (event.target.id === 'numClassesPerWeek') {
            document.querySelector('#valNumClasses').innerText = event.target.value;
        }
        updateColor(event.target)
        updateTotal();
    });
    updateColor(calcSliders[i])

}

function updateTotal(){
    var amountPerClass =parseInt(document.querySelector('#valAmountPerClass').innerText.replace("$", ""))
    var numAttendees = parseInt(document.querySelector('#valNumAttendees').innerText)
    var numOfClasses = parseInt(document.querySelector('#valNumClasses').innerText)

    var calcSum = amountPerClass * numAttendees * numOfClasses;
    document.querySelector('#calcSum').innerText ="$"+ calcSum.toLocaleString()
}

function updateColor(range_input){
    var MAX_VALUE = range_input.max;
    var percentage = 100 - (MAX_VALUE-parseInt(range_input.value))/MAX_VALUE*100;
    var sliderStyleWebkit = "#"+range_input.id+"::-webkit-slider-runnable-track { background : linear-gradient(90deg, #f6cc6c "+percentage+"%, #f9eccd "+percentage+"%);}"
    var sliderStyle = document.querySelector('#sliderStyle');
    sliderStyle.innerText = sliderStyle.innerText +  sliderStyleWebkit; 
}