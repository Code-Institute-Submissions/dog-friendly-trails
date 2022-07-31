![CI logo](assets/images/dogs-allowed-small.jpg)

# Dog Friendly Trails

Dog Friendly Trails is a site that looks to keep up to date with the most recent rules and regulations with regard to dogs on Irish walking trails.

The site will be targetted at people who like to hike Irish walking trails encouraging them to bring their dogs with them on hikes. 

Dog Friendly Trails will be useful for these hikers by allowing them to plan for hikes by picking out trails that are most suitable for dogs.

Hikers are invited to subscribe to get access to all the verified dog friendly trails.

These verifications will be gathered by hikers submitting their experience with regard to dogs on trails they have hiked.

Note to me: Add images of app on various screen sizes

------

## Features

------


------

## UX/UI

## Development Transition

July 12th I introduce a fancy multiline button with a pacman hover effect on Footer. See Credits for keenanpayne.com.

July 14th I decide to remove the Login Form as I deem it confusing to include it at this point when I do not have a fully working login framework.
So all login references become subscribe references.

July 17th I am introduced to the world of flexbox. I decide to implement it on the site.
This is an important development as it will have an impact on all my responsive development work yet to come.

July 18th Use Javascript for Submit button and form validation. This is required because the button is not a regular submit button.

July 21st I decide that Project1 should be free of Javascript.
So all javascript coding for the subscribe form are removed. 
The Subscribe button which leans on javascript for its fancy multiline pacman styyle is now a regular submit button.
This also applies to the Button in the footer.

July 21st I decide to introduce a CSS only hamburger. I introduce this and it works fine. But this implementation fails the w3 html validator.
I try a few others and same result. I naively decide to rollback to pre hamburger implementation attempts. 
This does not go well but after some nervous work and assistance from Tutor support I get back to a good place.
Lesson learned and an unexpected crash course in github.

July 22nd I implement a CSS only hamburger. See Credits for alvarotrigo. This works well and does pass w3 html validator.

July 24th I introduce CSS only lightbox. See Credits for veritygriscti

------

### Site Goals

### Design Choices

### User Stories

### Initial Wireframe Concept

index.html                 |  trails.html
:-------------------------:|:-------------------------:
![](docs/wireframes/index.png)  |  ![](docs/wireframes/trailspage.png)

gallery.html               |  login.html
:-------------------------:|:-------------------------:
![](docs/wireframes/gallerypage.png)  |  ![](docs/wireframes/loginpage.png)

------


------

## Testing

------


------

## Deployment

------


------

## Bug Fixes

July 12th Discovered a problem with the Readme file in that I could not get Wireframes in PDF format to work.
Fix 914854d So changed to images instead.

July 13th Due to a type at the top of style.css I had various formatting problems that needed a tidy up.
Fix 00cfa73 Some css reformatting required.

July 14th Due to mistakes with relative path the site when viewed on github looked wrong with the hero image missing.
Fix 58ba9b4 Fixed relative path.





------

 
------

## Credits

Flex Box Tuition thanks to w3schools and CSS Tricks

Multi Line CTA Button https://keenanpayne.com/css-multi-line-buttons/

Credit to w3schools for javascript tuition on submit and form validation on subscribe form

Credit to Jess Hines for Flexbox Radio ideas https://codepen.io/thekrkn/pen/KzLXLw

Credit to w3schools for Flexbox Repsonsive Gallery https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp

Credit to Alvaro for css only hamburger https://codepen.io/alvarotrigo/pen/XWejzjR

Credit to Verity for css only lightbox https://codepen.io/veritygriscti/pen/ExgjrOK
------


------ 

## Future Features
-ms flex for IE10 and ensure compatibility with older browsers
Login Form and Password Reset
Streamline HTML structure
Improve css to be more efficient
I would consider learning and using Flex grid for complete site layout
Improve use of flexbox
Setup a CMS like structure for Trails complete with Search and Filter options
A popup subscribe instead of a subscribe page

------


------