window.onload = function() {
    var loadTime = document.getElementById('loadTime');
    var time = new Date().getTime() - performance.timing.navigationStart;
    loadTime.innerHTML = 'Страница загружена за ' + time + ' миллисекунд';
}
var currentLocation = window.location.href;

var menuItems = document.querySelectorAll('.information a');
menuItems.forEach(function(item) {
    if (item.href === currentLocation) {
        item.classList.add('active');
    }
})

function generateTable() {
    var tableForm = document.getElementById('tableForm');
    var machineType = tableForm.elements['machineType'].value;
    var holeDiameter = tableForm.elements['holeDiameter'].value;
    var enginePower = tableForm.elements['enginePower'].value;
    var country = tableForm.elements['country'].value;
    var control = tableForm.elements['control'].value;


    var tableHTML = '<table border="1"><tr><th>Вид станка</th><th>Отверстие диаметром</th><th>Мощность двигателя</th><th>Страна производителя</th><th>Управление</th></tr>';
    tableHTML += '<tr><td>' + machineType + '</td><td>' + holeDiameter + '</td><td>' + enginePower + '</td><td>' + country + '</td><td>' + control + '</td></tr>';
    tableHTML += '</table>';


    var tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = tableHTML;
}
