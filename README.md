# Contacts
## Introduction
This is a simple contacts, or address book, style of application written using Vue.js. It was created as part of a coding assessment, but has also served as a great learning experience. Below are some notes about the application such as features, hindsights and known issues. Currently there is no license associated with this program or it's source code - feel free to use it however you'd like.
## Views & Features
* Vanilla CSS
  * Bootstrap style grid-system built from the ground up using pure CSS. There are CSS media queries creating breakpoints at 768px and 1280px wide respectively. These wore chosen somewhat arbitrarily but have fit the project well.
  * Sporty dark-theme with reusable custom-themed components such as buttons, radio buttons, slider toggles, input fields and much more.
* Login View
  * The user can enter any username/password, but both fields must be filled out. Username will be saved for display in the navbar until the user logs out. Upon logging in, the application will determine if the user is using a mobile deviced based on the screen width. This is only done once on login, but can be changed later in the settings.
* Contacts View
  * The user can see contacts from this view as well as add/edit/delete contacts. On mobile devices, this view is split into separate screens for viewing the list of contacts, viewing a contact's details, editing a contact, etc. On desktops, all of these screens form one single dynamic view.
  * When using a desktop, contacts in the list will be highlighted as the user mouses over them and clicks on them. In some cases, such as after editing a contact, the previously selected contact will remain selected for the user's convenience. When no contact is selected, or if all the contacts are deleted, an indication message will appear.
* Edit Contacts View
  * A contact can have a name, address and two phone numbers - each with a type of home, work or cell. Only a name and a phone number are required on this view. When viewing a contact's details, the type of each phone number will be color-coded.
* Settings View
  * In the settings view, the user can change their username. There are no restrictions to the username other than that it musn't be blank. After saving a new username, the user is returned to the contacts view.
  * The user is also able to change between mobile and desktop views using an additional setting found on this view.
## Considerations & Next Steps
The next things that I'd like to do with this application are... 
* Convert everything to a single file component!
  * Originally intended, intentionally did not due to a misunderstanding. (See below)
  * Allows full syntax-highlighting of HTML, adds modularized support for CSS and much more. Overall completely changes and cleans up the project.
* Add build tools such as Webpack or Browserify.
  * Required for single file components. I thought I wasn't allowed to incorporate build tools, or rather got these build tools confused with Vue.js plugins. Trust me - I did not enjoy writing HTML in quotes! This is probably my biggest regret.
  * Combine and minify CSS and JS files. This will make import statements cleaner as well as optimize what (and how much) code get's sent to the client from the host. Maybe slightly less important for single-page applications.
* Rewrite all of the JavaScript code in TypeScript.
* Incorporate a CSS pre-processor such as SASS or LESS.
* Find a better home for the controller-style logic in the root-level javascript files.
  * My approach to using $root as in impromptu controller worked well - for a small application. However, using $root in this way felt wrong and I know its not a scalable design.
## Known Issues
* When editing a contact on desktop, if you click the new contact button, the edit contact form is not properly cleared.
