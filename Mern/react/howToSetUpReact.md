**\*\*\***If you DELETE the NPM files, you can reinstall it by typing npm install into terminal when inside the react folder your project is in.

To start create-react-app, type this into your terminal;
npx create-react-app your-project-name-here
--------Cannot have uppercase letters, spaces, or special characters
Once the project is created, we can simply navigate into the newly-created project folder and run;
npm start.
-Go to your src/App.js
-Delete everything inside the <div></div>
------Keep in mind that if we want to add anything to the webpage, the HTML tags must go under the return of the function App()
------Empty HTML tag, <> </> will serve as a replacement to the need for a container ID. All HTML tags would be contained inside those empty tags.
-On your App.js, on the top; // import React from 'react
-Create new folder in src folder. Call it 'components'. All components will be created this folder.
------COMPONENT names must have first letter CAPITALIZED


When building a React app, split the things you want to do into COMPONENTS!
--Remember Lifting State. You'll have your parent component that will have the information that you will want to pass into another component. 
--IMPORTANT THINGS TO HAVE:
----e.preventDefault();
----sifting operator (...example)
----For a form, be sure to have <form onSubmit=> to make sure it's being submitted. 