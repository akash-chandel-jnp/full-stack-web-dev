/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
    {message:"Enter your text !",
    name: "URL"
    }
  ])
  .then((answer) => {
     console.log(answer);

     var qr_svg = qr.image(answer.URL );
     qr_svg.pipe(fs.createWriteStream('qr-Code.png'));

     const content = 'Some content!';

    fs.writeFile('./url.txt', answer.URL, err => {
        if (err) {
        console.error(err);
        }
        // file written successfully
        });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });