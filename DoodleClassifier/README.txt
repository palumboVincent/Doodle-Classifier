INSTUCTIONS

Because of some CORS issues, this project will not run in Google Chrome so instead run it inside Firefox or Mircosoft Edge.
The purpose of this project is to train a Neural Network to classify data. 
The data was obtained from Google's web-based game "Quick Draw" link: https://quickdraw.withgoogle.com/data
Project in total was built using Java for the backend data conversion, and Javascript for literally everything else.
The backend data conversion was simply using some built in Java functions to edit the size of the pictures and convert
them from .npy files to .bin files. Javascript was used to create the front-end and all the Neural Network/Matrix calculations.
Three object categories were chosen from the data at random. Trucks, Guitars and Potatos.
These are the objects the project is going to try to guess from your drawings.


1. Open the folder and right-click the file named "index.html"
2. Select "Open with..." and choose Firefox as the browser
3. Once the webpage is opened, pres CTRL + SHIFT + I to open up the browser's console
4. Draw something inside the blank canvas
5. Click the "Guess" button and check the console for the Neural Networks guess.
6. Its probably wrong so then click the "Train" button
7. Console should display the word Epoch and a number indicating how many times you have trained that session on that drawing
8. Click the "Test" button to display the current score of the Neural Networks guess
9. Click the "Guess" button again to see if answer has improved.
10. Repeat steps 1-9 as needed.


