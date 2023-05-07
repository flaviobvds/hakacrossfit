# <h1 align = "center">Haka CrossFit</h1>

This is a freelance project for [Haka CrossFit](http://hakacrossfit.vercel.app/), a CrossFit box located in Boa Vista - RR - Brazil.

## Introduction
The objective of this project is to display the business for its current and potential customers, to allow them to get in touch with the business and to allow them to schedule free experimental classes directly through the website.


## Tech Used

<img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width="40" height="40">&nbsp;&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" width="40" height="40">&nbsp;&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" width="40" height="40">&nbsp;&nbsp;&nbsp;<img src="https://jlannoo.dev/skills/next.png" width="40" height="40">
<br/>

This is a front-end project created using `create next app`. I used React as the framework and it's 100% written using **Typescript**. The styles were created using **SASS**. As the whole project uses **NextJS**, it's also hosted on **Vercel** using their free hosting option.

## Features

* **Responsive Design:** The project was designed using SASS in a **mobile-first** approach and is responsive to all screen sizes from 375px up.
* **Serverless Functions:** The app makes good use of NextJS serverless functions stored on the api routes folder and calls them using **axios**. There is 1 serverless function:
  * **AddToCalendar function:** The idea of this function was to add a new calendar event to the company's Google Calendar. However, by using Google Calendar API, this would only be possible if an oAuth2 login was implemented on the page, requiring users to log in to their accounts in order to schedule a classe. To avoid this unnecessary complexity, this function fetches an [IFTTT](https://ifttt.com/) webhook that inserts a new event on Google Calendar with the information provided by the customer such as name, email, time and date of the experimental class.
- **Email Sending:** Once the event is created, a confirmation email is sent to the user using [Sendinblue](https://sendinblue.com/) free tier service.
- **Smart email templates:** The app uses simple but efficient HTML email templates to confirm the experimental classes.
- **Modal:** The app includes a Schedule modal created using the `react-modal` library.

## Production Environment

* Vercel deploy: [http://hakacrossfit.vercel.app/](http://hakacrossfit.vercel.app/)

## Screenshots

### Mobile


### Desktop


### Email Templates
