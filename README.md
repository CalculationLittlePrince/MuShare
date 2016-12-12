# MuShare Server
Web service and application for the MuShare, a music share project.

#API Document

Unified Authorization Method
===

   + Attach token to the  http header `Authorization` 
   + Example: `Authorization`: `token`

1. Account
====
(1)`api/user/account/register`

   + method: POST
   + body: {"mail":" ", "name":" ", "phone:" ", "password":" "}

(2)`api/user/account/login` 

   + method: POST
   + body: {"mail/name/phone":" ", "password":" "}

2.  Friends
====
(1) `api/user/friend/request`

   + description: send a friend request
   + method: POST
   + body: {"friendId": " "}

(2) `api/user/friend/request`

   + description: agree a friend request
   + method: PUT
   + body: {"friendId": " "}


(3) `api/user/friend/request`

   + description: get the list of the friend request
   + method: GET
 
(4) `api/user/friend/list`

   + description: get the friend list
   + method: GET

(5) `api/user/friend/delete`

   + description: delete a friend
   + method: DELETE
   + body:  {"friendId": " "}


3. Search
====
(1) `api/user/search/stranger`

   + decription: search a user
   + method: GET
   + query: ?keyword=

4. Pofile
====
(1) `api/user/profile/get`

   + description: get a user profile
   + method: GET
   + query: body:  {"friendId": " "}

(2) `api/user/profile/update`

   + description: update profile
   + method: PUT
   + body: {"name"(not null):"", "avatar":"", "gender":"", "Birth":"", "Phone":"", "	Description":""} 
   
4. Sheet
====
(1) `api/music/sheet/create`

   + description: creare a sheet
   + method: POST
   + body:  {"name": " ", "privilege": " "}
   + privilege has 3 types: public, private and friend
   
(2) `api/music/sheet/delete`

   + description: delete a sheet and delete all the audios belong to the sheet
   + method: DEL
   + body:  {"name": " "}
   
(3) `api/music/sheet/update`

   + description: update the sheet name
   + method: PUT
   + body:  {"name": " "(must), "updateName":" ","privilege":" "}
   
(4) `api/music/sheet/list`

   + description: get self sheets or get other's public or friend sheets
   + method: GET
   + url + ?ToID=?

(5) `api/music/sheet/subscribe`

5. Audio
====
(1) `api/music/audio/add`

   + description: add an audio to a sheet
   + method: POST
   + body:  {"name": " ", "audioUrl": " "(unique), "imageUrl":" "(can be null), "sheetId": int, "artistId": int(need to modify)}
   + property "duration" still has some problem

(2) `api/music/audio/delete`

   + description: delete an audio
   + method: DEL
   + body:  {"audioUrl": " "(unique)}
   
(3) `api/music/audio/update`

   + description: update an audio info.
   + method: PUT
   + body:  {"name": " ", "audioUrl": " "(unique), "imageUrl":" "(can be null), "sheetId": int, "artistId": int(need to modify)}

(4) `api/music/audio/list`

   + description: get the audios of from a sheet
   + method: GET
   + url + ?SheetID=?

(5) `api/music/migration/update`

   + description: change the sheet id from a list of audioId.
   + method: PUT
   + body:  {"idList":[](int), "toSheetID":(int)}
