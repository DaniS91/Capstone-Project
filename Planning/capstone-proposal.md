# **Capstone | Epicodus | 2023**
## Dani Steely
## **TransGuide Reviews**
_title in progress_

### Project's Purpose or Goal:
Inspired by my lifelong struggle finding a barber that doesn't misgender me, TransGuide will be a mobile-friendly website that allows a user to make an anonymous account and create reviews of businesses or medical establishments in terms of their trans-inclusivity or general trans-friendliness. All users should be able to view a list of businesses and reviews, and should be able to sort/filter/group/search businesses and reviews. Users with an account should be able to add businesses to the index and create reviews for any business.

### Minimum features:
- **User Registration/Role-based Authorization**
  - Users can create anonymous accounts within a secure authentication system
  - Possible user roles/ administrator roles
  - Account/data security is a priority
  - User agreement that covers anonymity and HIPAA related information
- **Business Index & Anonymous Reviews**
  - Registered users may add businesses and reivews to the database
  - Business listings include details like name, location, category, description, etc.
  - Reviews include rating and commentss
  - Full read ability for businesses/reviews, C-U-D ability for authorized users/roles 
- **Sorting/Filtering/Searching**
  - Users can view categories of businesses, sort/filter businesses and reviews based on their properties
  - All users can search for businesses

### MVP Stack and Tools
- **React** - frontend
- **Firebase** - backend
- **CSS** - styling
  - I have noticed a stunning number of people presenting their capstones emphasizing that learning and implementing just CSS (as opposed to Sass, Tailwinds, etc) is more important than you think, so I wanted to make it a priority to actually learn how to use more advanced CSS

### Additional Features
(Something that I am super intereseted in is automated content filtering/moderating, so I may spend some extra time researching this or trying to implement it in some form)
- **Employee/Employer Ratings and Reviews**
- **Content Moderation System**
  - Ability to monitor and review or filter user submissions for inapropriate or dangerous content
  - Ability to automate a content filter, possibly using Azure/Firebase or a content moderation api
  - Possibly other moderation features that involve user engagement
- **User Engagement and Interaction**
  - Users can interact with reviews by rating helpfulness
  - Users can flag reviews and businesses as inapropriate content
  - A major stretch goal would be that users can star businesses as favorites and add them to a Favorites list
- **Mobile-friendly, responsive design**
  - mobile-friendly
  - feels important to me that a user can easily access the website from their phone on-the-go

### Tools and Stack for Extra Features
  - OpenAi Content Filter API or similar api for content filtering (Azure uses OpenAi content filter)
  - Firebase / React
  - CSS / React-Bootstrap
  - NextJS sounds cool but I don't know enough yet to know if it's necessary or possible