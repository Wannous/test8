fetch('https://test8-20220714.herokuapp.com/data')
    .then(response => response.json())
    .then(json => {
        var Students = document.getElementById("Students");
        json.Sheet1.forEach(element => {
            var option = document.createElement("option");
            option.innerHTML=element["A"] + ' ' + element.B;
            Students.appendChild(option);
        });
    })