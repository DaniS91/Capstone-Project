# Capstone Planning
## Review Website with React

## Project Description from initial sign-ups
<table>
  <tr>
    <th>Description</th>
    <th>Tech Stack</th>
    <th>MVP Features</th>
    <th>Stretch Goals</th>
  </tr>
  <tr>
    <td>Mobile-responsive website that allows users to create annonymous accounts and provide reviews of employers, medical establishments, businesses (like salons/barbers), and medical professionals, in regards to the competency of the organization or establishment in serving their trans clientele/employees/patients. Users should also be able to view a list of all establishments, establishments grouped by category, and establishments sorted by rating.</td>
    <td>
      <ul>
        <li>Front End JS/React</li>
        <li>Firebase</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>identity/auth/roles with Firebase?</li>
        <li>save reviews to databse</li>
        <li>grouping/sorting reviews</li>
      </ul>
    </td>
    <td>
    <ul>
        <li>definitely going to need some form of protection against site abuse</li>
        <li>styling with sass/bootstrap</li>
        <li>maybe messaging/comments?</li>
      </ul>
    </td>
  </tr>
</table>

## MVP
1. **User Registration and Login/Authorization**
  - Users can create anonymous accounts to maintain privacy
  - Authentication system for secure login
  - User roles/admin roles
2. **Business Listings/Anonymous Reviews**
  - Registered users may add Businesses and Reviews to the database
  - Business listings include details like name, location, category, description, etc
  - Reviews include rating and comments
  - Full read ability for both businesses and reivews, C-U-D ability for authorized users/roles
3. **Sorting/Filtering/Search**
  - Users can sort/filter businesses based on category, rating, location, etc, and reviews based on rating, age, etc
## MVP Stack and Tools
- Firebase?
- React
## Additional Features
1. **Responsive Web Design**
  - mobile-friendly
2. **User Engagement and Interaction**
  - Users can interact with reviews by rating helpfulness or accuracy?
  - Maybe reporting mechanism for flagging inapropriate content -> part of content moderation system
3. **Content Moderation System**
  - Honestly what I am most interested in learning about
  - Monitor and review or filter user submissions for inapropriate or dangerous content
  - investigate methods of detecting or preventing abusive or inapropriate language through automated filters or other means
## Additional Features -- Tools
  - CSS / Bootstrap
  - Firebase / React
  - API / tools for moderation -- documented in research file
