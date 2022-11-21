 # EventTrackerProject

# Overview

My event tracker project will be titled "Go Outside" and offer users an ability to post a single thing they did that day.  Posts will be available only once within a 24 hour period and they should be able to see all other user posts.  Photo linking via URL will be available as well.

User class is barebones at the moment because the emphasis should be on the daily activity component.

Activities are pre-set with no user ability to add.  I may add CRUD operations for activities later but for now I will operate with a fixed list of 14ish activities that I enjoy to create the framework for the site to utilize.

# CRUD

Users should be able to conduct normal CRUD operations with their posts which on the java side means they will be able to utilize the Daily() class and Jpa Repository calls to do so.

Administrators (feature not yet added) will be able to conduct normal CRUD operations on users.  Users will have access to a createNewUser method but nothing more.  

# Calls for CURL

| CRUD Op. | HTTP Verb | URI                  | Request Body | Response Body |
|----------|-----------|----------------------|--------------|---------------|
| Read     | GET       | `/api/allusers`         |              | shows all users  |
| Read     | GET       | `/api/daily`|              | lists all posted activities |
| Read     | GET       | `/api/activities/{id}`|              | shows specific activites  |
| Read     | GET       | `/api/daily/ACTIVITYNAME`|              | will list all daily posts for activity name (i.e. walking)  |
| Create   | POST      | `/daily/newactivity`         | JSON for daily | JSON of created daily
| Create   | POST      | `/api/newuser`         | JSON for user | JSON of created user
| Update   | PUT       | `/api/updateuser/{id}` | JSON to update user | JSON of updated user |
| Delete   | DELETE    | `/api/removeuser/{id}`|              | |
| Delete   | DELETE    | `/api/daily/{id}`|              | Removes Daily entries|
| Read     | GET       | `/api/daily/{id}`|              | fetches activity by ID |

# JavaScript

I've learned quite a bit about JavaScript and how the organization that exists within Java is not necessarily there without the use of some sort of user based framework.  I made the mistake of placing most of the JS into one large file (script.js) when I should've organized it into at least 3-4 files.  This would've helped me to navigate the DOM which, for the most part, is fairly messy and not intuitive to the newcomer.  

I am particularly proud that I was able to navigate was hiding the user data (this will be eliminated later when we learn more about security) within the document itself to pass objects.

Additionally, creating objects in JSON was interesting as well as accessing different layers of the DOM to populate them.

# Angular

The addition of Angular was both pleasant and painful at times.  I can see how the addition of Angular can help with massively large projects and websites (Amazon or FB) because the amount of component organization that exists.  In another sense, it's something someone would need to wholly focus on because TypeScript also has its own set of weirdness at many turns trying to organize a largely disorganized language.

I'll need to re-work most of this project to utilize the power of routing and also establish a User interface utilizing Spring security code (which we covered for a day).

# VS Code

I am impressed with VS code as an editor but there are odd quirks and autocompletes I have yet to get used to.  I have an issue with backspacing turning into deletions as well as auto completes happening in odd ways that add a layer of frustration atop of the code.

# Lessons learned

Working with a back end server I should've simplified my access points.  As you can see up top, I have an absolute ton for a program that literally tracks a daily entry for a certain set of activities.  

JavaScript can be extremely messy so it's imperative we establish a framework to keep it easily legible and simple to navigate (on the programmer and user end.)

TypeScript & Angular are far more organized but have their own quirks.  Overall, Angular is far superior in establishing a quick boiler plate to launch off of.  The upside of this (downside) is the programmer can see there is something wrong quite quickly and I do love the fact the website auto-refreshes on every change. There are a lot of possibilities here and I plan on revisiting at least one project and make it over with Angular.  
