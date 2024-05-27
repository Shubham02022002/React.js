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