<h2><b>🌍Project Overview</b></h2>

Travel Experience Marketplace is a web application that allows users to explore and share unique travel experiences around the world.Users can browse available travel listings,view detailed descriptions,and create their own experiences after logging into the platform.The goal of the application is to provide a simple marketplace where travelers can discover activities such as tours,adventures,cultural experiences and local attractions.

The platform includes authentication,listing creation and a modern user interface that allows users to easily interact with travel content.

<h2><b>🛠️Tech Stack</b></h2>
<h3>🎨Frontend</h3>
<ul>
  <ol>•Next.js (App Router) – Used to build the modern React-based user interface.</ol>
  <ol>•React-For building reusable UI components.</ol>
  <ol>•TypeScript-Adds type safety and improves code reliability.</ol>
  <ol>•Tailwind CSS-Used for responsive and modern styling.</ol>
  <ol>•Axios-For communicating with the backend API.</ol>
</ul>
<h3>🔧Backend</h3>
<ul>
  <ol>•Node.js-Runtime environment for the backend server.</ol>
  <ol>•Express.js – Web framework used to build REST APIs.</ol>
</ul>
<h3>🗄️Database</h3>
<ul>
  <ol>•MongoDB-NoSQL database used to store user accounts and travel listings.</ol>
  <ol>•Mongoose – ODM library used to interact with MongoDB.</ol>
</ul>
<h3>🔐Authentication</h3>
<ul>
  <ol>•JWT(JSON Web Tokens)-Used for secure user authentication and session management.</ol>
</ul>

<h2><b>Setup Instructions</b></h3>
<h3><b>1.Clone the repository</b></h3>
git clone<br/>
cd travel-experience-marketplace
<h3><b>2.Setup backend</b></h3>
<b>Navigate to the backend folder:</b><br/>
cd travel-backend<br/>
<b>Install dependencies:</b><br/>
npm install<br/>
<b>Create a .env file:</b><br/>
PORT=5000<br/>
MONGO_URI=your_mongodb_connection_string<br/>
JWT_SECRET=your_secret_key<br/>
<b>Run the backend server:</b><br/>
npm run dev<br/>
<b>Backend will run on:</b><br/>
http://localhost:5000
<h3><b>3.Setup frontend</b></h3>
<b>Navigate to the frontend project:</b><br/>
cd marketplace-style<br/>
<b>Install dependencies:</b><br/>
npm install<br/>
<b>Create a .env file:</b><br/>
NEXT_PUBLIC_API_URL=http://localhost:5000<br/>
<b>Run the frontend:</b><br/>
npm run dev<br/>
<b>Frontend will run on:</b><br/>
http://localhost:3000

<h2><b>Features Implemented</b></h2>
<h3>User Authentication</h3>
<ul>
  <ol>•User registration</ol>
  <ol>•User login</ol>
  <ol>•Secure authentication using JWT</ol>
  <ol>•Token stored in localStorage</ol>
</ul>
<h3>Travel Experience Listings</h3>
<ul>
  <ol>•View travel experiences</ol>
  <ol>•View detailed listing information</ol>
  <ol>•Display title, location, image, description, and price</ol>
</ul>
<h3>Create Travel Listing</h3>
Logged-in users can create a new travel experience with:
<ul>
  <ol>•Experience Title</ol>
  <ol>•Location</ol>
  <ol>•Image URL</ol>
  <ol>•Short Description</ol>
  <ol>•Price</ol>
</ul>
<h3>UI Features</h3>
<ul>
  <ol>•Modern responsive interface</ol>
  <ol>•Styled login page</ol>
  <ol>•Interactive listing cards</ol>
  <ol>•Detailed listing dialog popup</ol>
</ul>
<h3>Optional Features</h3>
<ul>
  <ol>•Admin redirection after login</ol>
  <ol>•Improved UI animations</ol>
  <ol>•Responsive mobile-friendly design</ol>  
</ul>

<h2><b>ARCHITECTURE & KEY DECISIONS</b></h2>
<h3><b>Why I Chose This Technology Stack</b></h3>
I chose Next.js with React and TypeScript for the frontend because it provides a modern development experience,good performance,and strong support for scalable applications.

Express.js and Node.js were used for the backend because they are lightweight,flexible and work well for building REST APIs.

MongoDB was selected as the database because it allows flexible schema design and easily stores JSON-like documents,which works well for travel listings.

<h3><b>How Authentication Works</b></h3>
Authentication in the application is implemented using JWT(JSON Web Tokens).
<ul>
  <ol>1.A user logs in with their email and password.</ol>
  <ol>2.The backend verifies the credentials.</ol>
  <ol>3.If valid, the backend generates a JWT token.</ol>
  <ol>4.The token is returned to the frontend.</ol>
  <ol>5.The frontend stores the token in localStorage.</ol>
  <ol>6.This token is used for authenticated requests when creating listings or accessing protected routes.</ol>
</ul>
This approach ensures secure and stateless authentication.

<h3><b>How Travel Listings Are Stored in the Database</b></h3>
Travel listings are stored in MongoDB using a collection called experiences<br/>
Each listing contains the following fields:<br/>
title<br/>
location<br/>
image<br/>
description<br/>
price<br/>
creatorId<br/>
createdAt<br/>

Example structure:<br/>
{<br/>
"title": "Sunset Boat Tour",<br/>
"location": "Bali",<br/>
"image": "https://example.com/image.jpg",<br/>
"description": "Enjoy a relaxing sunset cruise along the coastline.",<br/>
"price": 45,<br/>
"creatorId": "userId123"<br/>
}<br/>

<h3><b>One Improvement I Would Implement With More Time</b></h3>
If I had more time,I would implement image upload functionality using cloud storage(such as Cloudinary or AWS S3) instead of relying on image URLs.

This would allow users to upload their own images directly and would make the platform more realistic and user-friendly.

Other potential improvements include:<br/>
<ul>
  <ol>•Search and filtering for travel experiences</ol>
  <ol>•User profiles</ol>
  <ol>•Reviews and ratings for experiences</ol>
  <ol>•Booking functionality</ol>
  <ol>•Pagination for listings</ol>
</ul>

<h2><b>PRODUCT THINKING QUESTION</b></h2>
If the platform had 10,000 travel listings, I would implement pagination or infinite scrolling, where the app would only load a small number of listings at any given time, unlike the current situation where the app loads all the data at once. This would greatly improve the page load speed. Additionally, I would add features that enable users to search and filter their experiences based on location, price, and keywords.<br/><br/>
From the database perspective, I would add indexes in MongoDB for frequently searched fields like location, title, and price, which would improve query performance. Furthermore, I would optimize the backend API to only return the required fields, unlike the current situation where the backend returns too much data.<br/><br/>
Lastly, to optimize performance, I would implement caching strategies, where I would cache frequently accessed listings using Redis or other caching tools. Additionally, I would optimize images on the platform using lazy loading and image optimization, which would improve the page load time. These optimizations would enable the platform to handle large data sets efficiently and provide an enhanced user experience.
