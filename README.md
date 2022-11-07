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
