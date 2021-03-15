# mongo_ex


Please create a small API that can handle users and posts.
The endpoints available should be
  - `GET` /users
  - `POST` /users
  - `GET` /articles
  - `POST` /articles

Create your data models for users and articles to match the following examples.
All fields should be required.
And please add some timestamps


##### USER
```javascript
{
   "firstName":"Tony",
   "lastName":"Iommi",
   "bands":[
      "Black Sabbath",
      "Heaven and Hell"
   ],
   "instrument":"guitar",
   "albums":[
      {
         "title":"Vol 4",
         "year":1972
      },
      {
         "title":"Masters of Reality",
         "year":1971
      }
   ],
   "birthday":"1950-12-09"
}
```

##### ARTICLE
```javascript
{
   "title":"When was the last time you ate lasagna",
   "author":"604f3895f7c6568b0902115e",
   "keywords":[
      "food",
      "lasagna",
      "pasta"
   ],
   "category":"Fooood",
   "comments":[
      {
         "text":"Bla bla bla i like pasta",
         "user":"604f3895f7c6568b0902115e"
      },
      {
         "text":"Bapa di bupi",
         "user":"604f3895f7c6568b0902115e"
      }
   ]
}
```
