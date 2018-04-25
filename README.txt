Main idea: using material UI(very similiar to boostrap but for react) and React to interact with PixaBay API. Basically gives images based
off search results.

https://www.youtube.com/watch?v=dzOrUmK4Qyw&index=19&list=PLooZnZ6PNxnaZROJhrDezdI5XvC1uK8Ng&t=0s

API Key: 8773953-28221ef8eb4fb64073962e7bd

Initial setup commands run:
"sudo npm i -g create-react-app"       //create-react-app install globally had to be run from super user
"create-react-app pixabay_img_finder"  //initial setup for the app
"npm i axios material-ui"              // dependencies installed: axios and material-ui

start server:
"npm start"


current problems to fix:

1. everytime you have a space or you delete your search entry
it still has content when really it should have none refer to minute
39-41

2. the close button on the dialog box isint implemented correcly, details about this towards the end of the video
