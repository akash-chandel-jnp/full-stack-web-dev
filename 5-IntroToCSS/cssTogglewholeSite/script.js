
let counter = 0
function addCSS() {
  counter++
  if (counter % 2 !== 0) {
    document.getElementById("head").innerHTML = '  <title>Example HTML Website</title> \n<link rel="stylesheet" href="./styles.css" />'
  } else {

    document.getElementById("head").innerHTML = '  <title>Example HTML Website</title> '

  }
}
