# decinary
A UI and javascript utilities for converting 8-bit binary strings to decimal and back.

<br>

## Installation
Honestly, if the installation steps below seem too much of a hassle, I can run the program on my machine and you can take control and play around with it. I hope it's not too much of a hassle.

### A. More Steps, but Lighter-Weight/Quicker Installations, with Git and VSCode
1. The source files can be cloned directly onto your computer with git, instead of downloading and unzipping manually
2. Make sure you have both git and VSCode on your machine [git download link](https://git-scm.com/downloads) and [VSCode download link](https://code.visualstudio.com/download)
3. Open a terminal and cd into your desired directory
4. Run the following command:
    * `git clone https://github.com/muhamuhamuha/decinary.git`
5. cd into the root decinary folder and run the following command to open VSCode (don't forget the "."): 
    * `code .`
6. Open the extensions tab in VSCode and type "live server" in the search bar
    * Hit Ctrl/CMD-Shift-P and type "install extensions" and hit Enter
    * Alternatively, select the extension menu from the side bar (see image link below)
    * [live-server installation guide](./images/install-live-server.png)
7. Once installed, open the file ['.decinary/src/index.html'](./src/index.html) and click on the "Go Live" icon on the footer bar (see image link below)
    * [starting up live server guide](./images/fire-live-server.png)
8. If the URL opens to "localhost:{some port number}" but you don't see anything, append this to the URL: `/src/index.html` so that the full URL reads "localhost:{some port number}/src/index.html"
9. **NOTE**: please paste the above URL into Firefox or Chrome or another modern browser, the UI may not render properly in Safari and I'm sure it won't work at all in Internet Explorer

<br>

### B. Less Steps, but Requires Heavier Installations, with Node.js
1. Download Node.js LTS with the Node Package Manager: [click here](https://nodejs.org/en/download/)
or go to https://nodejs.org/en/download/
2. Unzip the source directory or clone with git by firing up a terminal and typing:
    * `git clone https://github.com/muhamuhamuha/decinary.git`
3. From a terminal cd into the decinary root folder
4. Use NPM to download the lite-server package by running the following command:
    * `npm i lite-server -g`
5. Once installed, run the following command in your terminal:
    * `npm start`
6. If the URL opens to "localhost:{some port number}" but you don't see anything, append this to the URL: `/src/index.html` so that the full URL reads "localhost:{some port number}/src/index.html"
7. **NOTE**: please paste the above URL into Firefox or Chrome or another modern browser, the UI may not render properly in Safari and I'm sure it won't work at all in Internet Explorer

<br>

## Usage
Once you've fired up the UI, you must select one of the two radio buttons that are displayed. Select "Binary" if you wish to input a binary string. The input field will accept only an 8-bit binary string. **NOTE** if a binary string is given and is not 8-bits, it will be turned into an 8-bit string by pushing 0s to the front of the string. Selecting decimal will allow you to input any number between -127 and 255. Error messages appear if you try to give any input other than this. Once an error is thrown, your input will be reset and you'll have to start over.

<br>

## Documentation
The UI is written in HTML5 and is all in the ['./src/index.html'](./src/index.html) file. The ['./src/app.css'](./src/app.css) file is used to position the HTML elements, and hide certain elements based on certain events (e.g. if the user triggers an error, the error-paragraph element will be unhidden.). The main javascript file ['./src/app.js'](./src/app.js) handles all the events that the user sends.

The logic for converting values can be found in the utils folder: ['./src/utils/binutils.js'](./src/utils/binutils.js) for converting binary-string inputs, and ['./src/utils/decutils.js'](./src/utils/decutils.js) for converting decimals to binary strings. Both files contain functions that will transform the input into an array of 8 values. The elements in this array can be summed up to get a decimal value, or mapped to get the binary value by replace all the non-zero elements with ones and keeping the zeros. This base array is passed over to other functions that can pull the SMR, 1's- and 2's-Complements, and Excess-128 Notations. the ['./src/utils/utils.js'](./src/utils/utils.js) file contains some additional functions for manipulating the DOM.