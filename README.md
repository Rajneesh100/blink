<p align="center"><a href = "https://team-meet.netlify.app/"> <img src="https://team-meet.netlify.app/static/media/Logo.19626df0.svg" alt="Logo" width="200" ></a></p>


### Project Documentation
Details on the project design, components and agile sprints can be found <a href="https://drive.google.com/file/d/1JbgpAhh-zkI1aohQJ-bIg9FKZS5mEYNm/view?usp=sharing">here</a>

## Features

1. User Authentication using Email and Password
2. Google Sign In
3. Create group chats
4. Video call with screenshare and raise hand
5. Post poll questions during video calls and download results.
6. Take down meeting notes during video calls
7. Continue group chats during video call
8. Admins can mute all participants and remove participants
9. Download attendance list as CSV

## Techstack used

1. ReactJS
2. Bootstrap
3. Jitsi Meet
4. ChatEngine
5. Firebase

## Agile Methodology
- desiging the website and enlisting possible features to include. Research was done on the available options.
- Simple prototypes were made using OpenVidu, WebRTC and Jitsi Meet. Jitsi Meet external API was chosen due to easy integration and ability to handle large number of participants with lesser load on browser.
- extending the Jitsi Meet prototype to include other features. Chat Engine was integrated into the app, Firebase was used for authentication and storage and UI of the app was improved. A new feature call **Polls** was added into the video call component. This feature allows admins to post a poll question and download a CSV file with the participants' answers.
- incorporating the chat feature into the video call component. Previously, Jitsi Meet chat was used during video calls. This was changed to the group chat to allow users to continue group conversations. A new feature called **Meeting Notes** was incorporated. This feature allows all participants to take down notes during a meeting using a rich text-editor.


## Screenshots
![Login and Chat Dashboard](https://user-images.githubusercontent.com/75874394/125432582-818e433c-3f5c-446f-b730-a4ae6f68f748.gif)

![Video Call and Features](https://user-images.githubusercontent.com/75874394/125432859-61ca2289-e207-421d-98a4-41949cd7bba6.gif)

