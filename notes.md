Why to learn React? 
    -Hype, trend, job, buildUI
    -Makes easy to manage and build complex frameworks. 

When should one learn React? 
    -After mastering JS
    Tip: You can master Javascript from (https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&si=8WFgjRelJXLPi2Il)
    -Only complex frontend needs React in early stages or we can say most project don't need react in 
    initial phase.

Why react was introduced ?
    React is developed by Facebook developers to solve "Phantom Message Problem" which basically means inconsistency in UI.

    State(nothing but name of variables) is managed by javascript and UI is managed by DOM. 
    In order to change state in real time we need something by which we can sync state of js and the dom.
    For solving this problem React was introduced. 
    React got too much hate in the early stage and after sometime they open sourced react. 
    Dan Abramov is a software engineer working for Meta as part of the React team.
    Khan academy and Unsplash adopted react and their developers appricated react.

    Don't learn react if:
    - You don't know how JS works internally or DOM works.
    
    React learning process:
    1. Going in-depth(Babel,fiber,virutal dom,diff algo,hydration)
    2. By making projects(Todo, calculator,etc.)

React is a library.
FrameWork V/s Library.
    In framework we have some strict rules eg. naming convenctions, strict file names, etc.
    Some popular frameworks are Next.js, django,etc.
    Where as in libraries we have more freedom, so react is a library with less strict rules.

What topics one should learn in react?
1. Core of react(state or UI manipulation, JSX)
2. Component reusability
3. Reusing of components(props,props drilling)
4. How to propagate change(hooks eg. useState, useEffect)

React creates SPA(Single Page Applications). 
What does SPA means? 
    In pre react days what happen is when you click on something or perform an operation it refreshes the page
    and redirect you to some other page in most of the cases.
    But now react handles the whole shabang of all behind the scenes and creates a single page only. 

So how can we navigate to some other page?
    For this we need to learn Router in react. Router in not a functionality of react we need to install a package to use this which is React-Router-DOM. 

This all comes in additional topic.
(Additional addon to React){
    1. Router(React don't have Router)
    2. State management(React don't have state management)
        - Redux, redux toolkit, zustand, context API.
        - These are also stand alone libraries. 
    3. Class based components
        - By using this legacy frontends were written for the longest time. 
    4. BAAS(Backend As a Service) apps
        - USECASES-> Social media clone, e-commerce apps, etc.
        - Some common names are firebase, superbase.   
}

What after React? 
Developers need to understand that react is not a complete solution in most cases.
    Cons of react:
    -No SEO(Search Engine Optimization)
    -Browser rendering of js (slowing down website)
    -No routing
    Solution to these{
        NextJS, Gatsby, Remix.
        NextJS allows us to write frontend as well as backend.
    }

React roadmap: https://roadmap.sh/react

/////////////////////////////////////////////////////////////////////////////////////////

For writing code different tools are available in the market. We can simply write code in 
notepad, or in any text editor. But to unlock the superpowers of any language or for the faster development we use IDEs (Integrated Development Environments). Some commmonly used IDEs are VS code, sublime text, webstrome, neo vim, etc.

Second thing that we require is Nodejs. Usually javascript runs in browser but nodejs give us the environment of javascript in our machine. 
You can download node from (https://nodejs.org/en/download/package-manager).

After installing node if you want to check the version of it{
    1. Open Command Prompt and write the below command. 
    2. node --version 
}

Documentation is very much required throughout the learning process. 
React documentation (https://react.dev/)

Lets get into the code-->
1. Create a folder and initilize a empty git repo which is very helpful to maintain the code files.
2. Go into the folder initialize a empty git repository there also by writing:
    - git init (for this you must have git in you machine and it should be configured)
    Succeeding commands are:
    - git branch -M main 
    - git remote add origin (your git repo link)
    You are done with this. 

- If you want to know more commands of git checkout (https://github.com/Shubham02022002/Learn-Git)

React documentation is not that beginners friendly.

In layman language bundlers basically bundles up files and give you one final file. 
Commonly used bundlers are -> Vite, Parcel. 

With React library we alos get some attachments some of them are React-DOM and React-native.
For Web development React-DOM is used and for mobile development React-native is used.  

React project setup->
1. What is npx? 
    - When we installed npm( generally known as node package manager but it is not the official name) allows us to install different things but sometime it can be a case that we don't want to install someting rather we need to execute something.
    That can be done with the help of npx (node package executer).

Command for creating react app:-
    npx create-react-app (your project name)
where create-react-app is a utility, problem with this is this is very bulky utility.

This command takes too much time as it is installing react, react-dom and react-scripts.

Now go to the folder which is created in the main folder.
Command for this is:
    - cd (folder name)
    - hit enter

Now to understand any react project firstly open package.json which tells us about the name of the project, version, and the most important thing which are dependencies. 
In dependencies we have something known as web-vitals looks after the performance how fast our app is running 
and we can track the performance by this.

Scripts are used to run the project or make them ready for the production{
    start-> this script is used to run the project in the devleopment environment.
    build-> handels the application when it is in production.
    test-> used to run test cases.
    eject-> by using eject we ejects react from our project. 
}

Lint handels the swiggly lines or the errors in the code. 
Browser list tells on which browser we want to allow our code to run. 

To run the project use start script:
    - You should be in the project folder which was created after npx-create-react-app.
    command:
        npm run start
        Now hopefully your project is on http://localhost:3000. 

Now run the build script:
    command:
        npm run build 
After this script you can see the build folder in the inside the project. 
Which contains all the static assets which we require (including css and js).
When our application is in production this build folder is serverd to the users. 

Now we will be creating react project using vite. 
1. Go back into the main folder if you are in the existing react project. 
    command:
    cd ..
    Now you are in the main folder. 
2. We have to look how to get started with vite(https://vitejs.dev/guide/).
   For creating react project using vite use this command:
    npm create vite@latest
    After the above command hit enter and {
        1. Give project name.
        2. Select a framework (react).
        3. Select a variant (Javascript).
        At this point your project is created.
    }

Again to get started with a react project we need to check whats inside the package.json file.
This time also it have the same infomation but in a diffent way, with different commands. 

Dev dependencies doesn't goes into production they are used in development only. 
To run this project perfom these commands:
    1. cd (project name)
    2. npm install (By this you'll get node_modules folder)
    3. npm run dev
    Now your project is on http://localhost:5173/

Let's again goes to our first folder to inspect things.
    In the first folder go to the src folder
        Here we have all the file and some files are not of our use at this point of time so feel free to delete them.
        File to delete:
        1. setupTest.js
        2. reportWebVitals.js (this files is to inspect the performance of app)
        3. logo.svg 
        4. App.test.js
        5. App.css
        6. index.css
    Now you should be left with only two files which are App.js and index.js
    Inside index.js remove all the commented code and also remove the import statments of the removed files. 
    Inside the App.js in the App function in the return create a <h1> and give it a heading. 

    Now run the project you should be getting the h1 in the browser. 

Time to go into vite project folder. 
Again delete unwanted files which are:
    1. assets
    2. App.css
    3. index.css
    Now inside main.jsx remove unwanted import statements, from App.jsx do the same also remove the code written inside the return statement and the useState line. 
    Create a <h1> and put some heading. 
    To run this project cd into the vite project and hit command:
        npm run dev

/////////////////////////////////////////////////////////////////////////////////////////////
NOTE_3

Javascript and html both are diffenent things with the help of script tags we inject our js code into the html and that is further responsible for manupulation. 

Let's look into the folder structures of both the projects one by one. 
    1. 01basicreact
        - Inside the node_modules folder we'll get all the depndencies which are inside our package.json file. 
        - .gitignore tell us which files you want to push on git    
        - package-lock.json also tells us about the dependencies but locks the versions of these dependencies.
        - README.md is a markdown file which tells about the react project
        Inside public folder we have bunch of files important one are:
        - manifest.json requires when the web app is opened in mobile phones some meta tags are taken from here. 
        - robots.txt is used for search engine. 
        - index.html (Most important)
            - this is the html page which loads when we run the project and it is a SPA(single page application).
            Remove all the comments to see actual contents of the file. 
            Now we are having a <noscript> tag which show message if javascript is not enabled in the browser. 
            Next thing in the body we have a <div> with id="root" notice not a single line of js is here. 
            In the src folder:
            Entry point of React is index.js (you can also change its name doesn't matter)
            In index.js we have something called root and we have some imports also which are:
            1. React library which is core foundational library. 
            2. ReactDOM is the implimentation of react in web.
            React creates its own DOM which is also known as VDOM(virtual DOM) and then it compares it with the main DOM and finds the diff and render only the diff(uses diff algorithms behind this).
            createRoot is a method of ReactDOM in this we pass a html element with id "root" and we store that reference in the variable root.
            Now root.render is rendering the <App/> with react strict mode, but we don't have any tag named App. 
            React gives us this power of JSX by which we can render our html elements through javascript also there is no diffrence between html tags and <App/>
            If you remove the <React.strictMode> you can, this is safe mode of react which is useful for the development purpose so that you can do some optimizations. 
            What is this App?
            - App is nothing but a function which is returning some html.
            This is actually very powerful stuff that we can write html code insde javascript and can render that as well. 
            ! Questions which comes to mind are ?
            1. In the index.html file we haven't loaded the js so how this index.js is automatically loaded ?
            - To answer this go into the package.json file here we can see in dependencies we have someting react-scripts. If you inspet the page you will find scripts are loaded in the html.

    2. 01vitereact
        - Inside package.json in the dependencies we don't have any react-scripts. But if we check index.html  we have the script tag inside the body.
        In the main.jsx we are basically doing the same thing as in index.js of 01basicreact.
        There is noting diffrent but this is light-weight as here we don't have testing libraies and other additional scripts. 
        ! Question arises..
        If App is a simple function which is returning some html and we had given this function to main.jsx to render can we do inside the app ? 
        - Yes, we can do this. 
        In the src folder create a new file let say xyz.js inside this file create a function and reutrn some html from it and do export default of function. 
        Now inside the app.jsx in the return statement use that function name as a html tag, also import that function.
        This will give a error of invalid js syntax so change the extension of the file to .jsx 
        Remember whenever you are making a component use jsx, to render a component in react it should be started with a capital letter and should be exported as same. 
        In the app.jsx if you try to write some html code inside return statement it will through an error that Adjacent JSX elements must be wrapped in an enclosing tag. 
        Solutions to this can be use a div to wrap everthing, use a empty tag <> and enclose things inside them. 
        These are called fragments in React.

    Again we move to 01basicreact
        - Inside the src folder create a new file xyz.js and create a function which returns html export it, inside the app.js import this function and insert the name of the function inside a tag in the return statement after using react fragments. 
        Don't forget to use captial letter in the function names.
        It's a good practice that file name of components are also starts with capital letter. 