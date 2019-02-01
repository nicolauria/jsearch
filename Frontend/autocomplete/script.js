const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

function autocomplete(inp, arr) {
  const autocompleteDiv = document.createElement('div');
  autocompleteDiv.setAttribute('id', 'autocomplete-list');
  inp.parentNode.appendChild(autocompleteDiv);

  inp.addEventListener("input", function(e) {
    clearList();
    if (!this.value) return false;
    const userInput = this.value;

    const autocompleteList = document.getElementById('autocomplete-list');

    for (let i = 0; i < arr.length; i++) {
      const substr = arr[i].substr(0, userInput.length);
      if (userInput.toUpperCase() == substr.toUpperCase()) {
        const countryDiv = document.createElement('div');
        countryDiv.setAttribute('class', 'country-result');

        countryDiv.innerHTML = arr[i];
        countryDiv.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

        countryDiv.addEventListener("click", function(e) {
          inp.value = arr[i];
          clearList();
        });

        autocompleteList.appendChild(countryDiv);
      }
    }
  });

  inp.addEventListener("keydown", function(e) {
    const countryList = document.getElementById('autocomplete-list');
    if (countryList) countryList = countryList.getElementsByTagName("div");

    if (e.keyCode === 40) {
      currentFocus++;
      addActive(countryList);
    } else if (keyCode === 38) {
      currentFocus--;
      addActive(countryList);
    } else if (keyCode === 13) {
      e.preventDefault();
    }
  });
}

function clearList() {
  const autocompleteList = document.getElementById('autocomplete-list');
  if (autocompleteList) {
    while (autocompleteList.firstChild) {
      autocompleteList.removeChild(autocompleteList.firstChild);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myInput = document.getElementById('myInput');
  autocomplete(myInput, countries);
})
