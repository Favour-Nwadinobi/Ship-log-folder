Project Journal — Leftover Food Reminder

Project Introduction

I started this project with the goal of building a simple web application that helps people remember the food and leftovers they have at home before they expire.

The idea focuses on a common everyday problem: people often store leftovers, cooked meals, and other perishable food in their fridge but forget about them until the food has already gone bad.

The main question guiding this project is:

How can I make it easier for people to remember the food they already have and use it before it goes to waste?

Entry 1 — Defining the Project

What I Worked On

I defined the purpose and core functionality of the Leftover Food Reminder application.

The application is intended to help users:

Add food or leftover items

Record when the food expires

Categorize food items

View the food currently being tracked

Keep track of what is available in their fridge

Decision Made

I decided to keep the first version of the project simple and focused on the main problem: helping users remember food before it expires.

Challenge

One challenge at the beginning was deciding which features were necessary for the first version.

Solution

I focused on the main user journey:

The user has food or leftovers at home.

The user adds the food to the application.

The user selects when it expires.

The application keeps the item visible and organized.

The user can easily see what food needs attention.

Entry 2 — Creating the Initial Interface

What I Worked On

I created the first version of the user interface.

The initial design included:

A large Welcome page title

A supporting subtitle

An add something to your fridge input field

An expiry date input

A category dropdown

An Add Reminder button

A Your Fridge section

An empty state showing when no food had been added

Challenge

The design was functional but the large form at the top of the page received most of the visual attention.

It felt more like an administrative form than a helpful consumer application.

Solution

Instead of only changing colours or adding more decoration, I decided to improve the overall information hierarchy and user flow.

Entry 3 — Improving the Page Hierarchy

What I Worked On

I redesigned the top section of the page to feel more personal and useful.

Instead of leading with a large product title, the dashboard now focuses on the user.

The new header direction is:

Welcome, Favour 👋

Keep track of your food before it goes to waste.

A small summary can also be displayed below the greeting:

0 items · Nothing expires soon 🎉

Decision Made

I decided that the application should first tell the user what is happening with their food before asking them to add more information.

The new hierarchy is:

Personal greeting

Current food status

Add food

Fridge inventory

Why This Was Important

This change makes the application feel more like a personal food companion and less like a simple form for storing reminders.

Entry 4 — Refining the Add Food Section

What I Worked On

I changed the form section to feel more conversational and easier to understand.

The section heading became:

Add something to your fridge

The main input label became:

What food are you saving?

Example placeholder text:

Lasagna, Jollof Rice, Half Onion...

Decision Made

I wanted the wording to sound natural because users are adding everyday food from their homes not entering information into a database.

This creates a friendlier experience.

Entry 5 — Improving the Expiry Selection

What I Worked On

The original design relied mainly on a standard date picker.

I decided to improve this because users adding leftovers will often already know a simple timeframe, such as today or tomorrow.

The new expiry options are:

Today

Tomorrow

In 3 Days

Choose a specific date

Challenge

A full date picker gives users flexibility, but it can slow down a frequent and simple action.

Solution

I introduced quick expiry options first while keeping the option to select a specific date when necessary.

Why This Decision Matters

This reduces friction and makes the process of adding food faster.

The user can quickly select:

[ Today ] [ Tomorrow ] [ +3 Days ]

and only use the date picker when a specific date is needed.

Entry 6 — Food Categories

What I Worked On

I refined the category system for food items.

The planned categories include:

 Cooked Meal

 Produce

 Meat & Protein

Fruits

 Dairy

Other

Decision Made

I kept the categories simple and familiar.

Reason

Too many categories would make the application feel more complicated and increase the amount of time required to add food.

The goal is to organize food without adding unnecessary steps.

Entry 7 — Improving the Empty State

What I Worked On

I refined the empty state in the Your Fridge section.

Instead of simply displaying:

0 items

the application should communicate clearly with the user.

The improved message is:

Your fridge is empty

Add food and we'll help you keep track of it before it expires.

Decision Made

The empty state should tell users:

What the current situation is

Why there is no content

What they can do next

Lesson

An empty state is part of the user experience and should not feel like an unfinished screen.

Entry 9 — Technologies Used

What I Worked On

I decided to build the project using core web technologies.

The technologies used are:

HTML for structuring the application

CSS for styling and layout

JavaScript for interactivity and application functionality

I am also using:

Git for version control

GitHub for managing and hosting the project repository



Decision Made

I chose to focus on HTML, CSS and JavaScript for this project so I can build the core functionality and user experience using fundamental web development technologies.

Lessons Learned So Far

This project has helped reinforce several important design and development lessons.

1. A Functional Interface Is Not Always a Strong Experience

The first version worked but the improved hierarchy made the product feel more useful and intentional.

2. Information Hierarchy Matters

Changing the order and importance of information can significantly improve a user interface.

3. Frequent Actions Should Be Fast

Quick expiry options reduce the effort required to add food.

4. Language Affects User Experience

Simple phrases such as What food are you saving? and Add something to your fridge feel more natural than traditional form labels.

5. Empty States Matter

A good empty state can guide the user and make the application feel complete even when there is no data yet.



Current Project Vision

The goal of Leftover Food Reminder is not simply to save expiry dates.

The goal is to create a simple and helpful experience that answers one important question:

What food do I have and what should I eat before it goes to waste?