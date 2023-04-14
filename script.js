  function openTab(evt, tabName) {
    // Get all the <tr> elements in the table
    var trcontent = document.getElementsByTagName("tr");
    for (var i = 0; i < trcontent.length; i++) {
      // Check if the current <tr> is one that should be hidden
      if (!trcontent[i].classList.contains("keep-visible")) {
        trcontent[i].style.display = "none";
      }
    }
    evt.currentTarget.closest('tr').style.display = "table-row";
    // Hide all the tab content elements and remove the "active" class from the tablinks
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the selected tab content element and add the "active" class to the tablink
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function goToHTML() {
    window.location.href = "HtmlCheatSheet.html";
  }

  function goToCSS() {
    window.location.href = "CSSCheatSheet.html";
  }

// CSS Cheat Sheet

// background
const checkboxes = document.querySelectorAll('input[name="background"]');
const rightPart = document.querySelector('.right-part');

function handleCheckboxClick(e) {
  const value = e.target.value;
  switch (value) {
    case 'red':
      rightPart.style.background = 'red';
      break;
    case 'blue':
      rightPart.style.background = 'blue';
      break;
    case 'tree':
      rightPart.style.background = 'url("tree.jpg")';
      break;
  }
}
  checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheckboxClick)
);

// border
const borderboxes = document.querySelectorAll('input[name="border"]');
const innerBox = document.querySelector('.inner-box');

function handleRadioClick(e) {
  const value = e.target.value;

  switch (value) {
    case 'borderRed':
      innerBox.style.borderWidth = '5px';
      innerBox.style.borderStyle = 'solid';
      innerBox.style.borderColor = 'red';
      break;
    case 'borderBlue':
      innerBox.style.borderWidth = '10px';
      innerBox.style.borderStyle = 'dotted';
      innerBox.style.borderColor = 'blue';
      break;
    default:
      innerBox.style.border = 'none';
      break;
  }
}
borderboxes.forEach((borderbox) =>
  borderbox.addEventListener('click', handleRadioClick)
);

// box-sizing
const sizeboxes = document.querySelectorAll('input[name="boxsize"]');
const innerBox1 = document.querySelector('.innerbox1');
function handleBoxSizeClick(e) {
  const value = e.target.value;
  switch (value) {
    case 'boxisize1':
      innerBox1.style.width = '300px';
      innerBox1.style.height ='200px';
      break;
    case 'boxsize2':
      innerBox1.style.width = '100px'
      innerBox1.style.height = '80px';
      break;
  }
}
sizeboxes.forEach((sizebox) =>
  sizebox.addEventListener('click', handleBoxSizeClick)
);

// Color
const colorRadios = document.querySelectorAll('input[name="Color"]');
const colorTexts = document.querySelectorAll('.innerbox1 p');

function handleColorRadioClick(e) {
  const value = e.target.value;
  switch (value) {
    case 'red':
      colorTexts.forEach((text) => (text.style.color = 'red'));
      break;
    case 'green':
      colorTexts.forEach((text) => (text.style.color = '#00ff00'));
      break;
    case 'RGB':
      colorTexts.forEach((text) => (text.style.color = 'rgb(0, 0, 255)'));
      break;
    default:
      colorTexts.forEach((text) => (text.style.color = 'black'));
      break;
  }
}
colorRadios.forEach((radio) => {
  radio.addEventListener('click', handleColorRadioClick);
});

// padding
const paddingboxes = document.querySelectorAll('input[name="padding"]');
const innerBox2 = document.querySelector('.innerbox2');

function paddingradio(e) {
  const value = e.target.value;

  switch (value) {
    case '5px':
      innerBox2.style.padding = '5px';
      break;
    case '20px':
      innerBox2.style.padding = '20px';
      break;
    default:
      innerBox2.style.padding = 'none';
      break;
  }
}
paddingboxes.forEach((paddingbox) =>
  paddingbox.addEventListener('click', paddingradio)
);

// rotate
const rotateboxes = document.querySelectorAll('input[name="rotate"]');
const innerBox3 = document.querySelector('.innerbox3');

function rotateRadioClick(e) {
  const value = e.target.value;

  switch (value) {
    case '0degree':
      innerBox3.style.rotate = `0deg`;
      break;
    case '30degree':
      innerBox3.style.rotate = `30deg`;
      break;
    case '-30degree':
      innerBox3.style.rotate = `-30deg`;
      break;
    default:
      innerBox3.style.rotate = `none`;
      break;
  }
}
rotateboxes.forEach((rotatebox) =>
  rotatebox.addEventListener('click', rotateRadioClick)
);
