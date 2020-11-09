# Joe's Pizza Parlor

#### This applciation uses objects & prototypes to evaluate the cost of a Pizza based on user input. 

#### By Joseph Nero 

### Description

This application will take user input through a form and generate unique responses based on that input. Checkboxes are used within the form to help gather user input. The user input is then used to create an object, and the values of the object's keys are updated with prototypes based on user input. Ultimately, this application will generate the cost of a pizza based on the user's input of toppings & pizza size. Test specs are listed in the table below. More detailed test specs can be found at the following location: tests/scripts.test.js. 

1. Code Oriented Test Specs 
| Test | Input | Output |
| :--------------------------- | :------------------------| :---------------- | 
| Pizza |||
| Should correctly create an instance of Pizza | let newPizza = new Pizza() | typeof(newPizza) = object | 
| Should correctly create an instance of Pizza with input being provided to determine the size of the Pizza | let newPizza = new Pizza("Large") | newPizza.size = "Large" | 
| toppingsArray|||
| Should populate an array with all of the checked values for toppings | toppingsVar = [] | toppingsVar = [checked value 1, checked value 2, checked value 3...]| 
| addToppings |||
| Should correctly add the toppings array to an instance of Pizza | toppingsVar | newPizza.toppings = [checked value 1, checked value 2, checked value 3.....]| 
| costCalculator |||
| Should return the cost of the Pizza | n/a | 5 | 
| Should add 5 to the cost of the Pizza if the size of the Pizza is "Large" | newPizza.size="Large" | 10 | 
| Should add 5 to the cost of the Pizza if more than 1 topping is selected | newPizza.toppings.length > 1 | 10 | 
| fadeFunction |||
| Should return a function that executes the fadeIn method on text associated with a specified selector & object. | selector, pizzaObject | ƒ () { $(selector).text(pizzaObject.cost).fadeIn(); }) |

## Setup/Installation Requirements
#### If you have difficulty following any of the steps/instructions listed below, please contact me at josephnero111@gmail.com 

#### Software requirements 

1. A web browser to view the website. I recommend Google Chrome.
2. Git Bash (or another terminal program) & Git.  
    - To clone the repository from Github using git commands in the terminal, you need a terminal program & Git. For Windows OS, I recommend the Git Bash terminal program. Installing Git Bash will also install Git. 
3. VSCode (or another code editor)
    - To view/edit this code, you need a code editor. I recommend VSCode. 
4. Detailed instructions to install Git Bash & VSCode can be found in the Setup/Installation Requirements section of the README for [this repo.](https://github.com/joey3001/first-friday-project)

#### To view this website online please use the following GH-Pages link: 

[Joe's Pizza Parlor](https://joey3001.github.io/PizzaParlor/)

#### To view this website locally, please follow these instructions to clone and open this project using git commands in the terminal. 

1. Open your terminal program and use the CD command to navigate to the directory in which you wish to clone this project. 
2. Use [this link](https://github.com/joey3001/PizzaParlor) go to this project's repository on github. Click on the green button labeled "code" towards the right side of the page's center. Click on the HTTPS option and copy the presented URL. 
3. Use the following command in your terminal program to clone the repo :

            git clone https://github.com/joey3001/PizzaParlor.git

7. Use the CD command to enter the cloned directory. Once you are within the cloned directory, enter the following command into your terminal to open the page in your default browser : 

            start index.html 

#### Follow these instructions to view the code in the VSCode editor using commands in the terminal. 

1. Navigate to the project directory with the CD command if needed. If you're following this guide step-by-step, you should already be there. 
2. Once you are within the project directory, enter the following command into your terminal program to view all of the project's code in VSCode : 

            code . 

#### To download a file containing the contents of this repository to a location of your choice, please follow these instructions. 

1. Use a web browser to go to the repository webpage at [this link.](https://github.com/joey3001/PizzaParlor)
2. Click on the green button labeled "code" towards the right side of the page's center. In the drop-down menu that opens, click on the button labeled "Download Zip."
3. Once your download is complete, open the zipped file. Click on the button labeled "Extract All" at the top of your file explorer. 
4. Choose the location in which you want to extract the files, and navigate to that location once this process is complete. 
5. Enter the directory and click on the index.html file to launch the project in your default web browser. 

## Known Bugs

There are no known bugs at this time. 

## Support and contact details

If you have an issue, reach out to me at josephnero111@gmail.com

## Technologies Used

  * HTML 
  * CSS
    - Bootstrap
  * Javascript
    - Jquery 
  * VSCode 
  * Git
  * Github 
  * Git Bash

### License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 Joseph Nero 