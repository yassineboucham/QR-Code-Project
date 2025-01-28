/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "entre you url: ",
        name: 'URL'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('QR.png'));
    fs.writeFile("url.txt", url, (err) => {
        if (err) console.log(err);
        else {
            console.log("File written successfully");
        }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
