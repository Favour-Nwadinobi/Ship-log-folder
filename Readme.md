Leftover Food Reminder

Overview

Leftover Food Reminder is a simple web application designed to help people keep track of food and leftovers stored at home before they expire.

The application allows users to add food items, choose a category, set an expiry date, and view the items they currently have in their fridge. The main goal is to make food tracking quick and simple so users are reminded to consume food before it goes to waste.

Who It Is Designed For

This project is designed for:

Individuals living alone

Families and households

Students

Busy professionals

Anyone who regularly stores leftovers or perishable food at home

It is especially useful for people who often forget what is in their fridge until the food has already expired.

The Problem It Solves

Food waste is often caused by people forgetting about food they already have.

Leftovers, cooked meals, vegetables, dairy products, and other food items can easily get pushed to the back of a fridge and forgotten. By the time the user remembers them, they may already be expired.

Leftover Food Reminder helps solve this problem by giving users a simple place to:

Record food they want to keep track of

Set when the food expires

Quickly choose common expiry periods such as Today, Tomorrow, or In 3 Days

Categorize food items

View the food currently in their fridge

Understand which food needs attention

The product focuses on making food tracking feel simple and helpful rather than like filling out an administrative form.

Key Features

Personalized Dashboard

The dashboard greets the user and gives them an immediate overview of their food.

Example:

Good evening, Favour 👋

Keep track of your food before it goes to waste.

The dashboard can also show a quick summary such as:

0 items · Nothing expires soon 🎉

Add Food to the Fridge

Users can add food by entering the name of the food item.

Examples include:

Lasagna

Jollof Rice

Half Onion

Grilled Chicken

Quick Expiry Selection

Instead of forcing users to manually select a date every time, the app provides quick options such as:

Today

Tomorrow

In 3 Days

Choose a specific date

This makes adding leftovers faster because users often know approximately when food should be consumed.

Food Categories

Users can organize food into categories such as:

🍲 Cooked Meal

🥬 Vegetables

🍗 Meat & Protein

🍎 Fruits

🥛 Dairy

🍞 Bakery

📦 Other

Fridge Overview

The application provides a central area where users can see the food currently being tracked.

As the project grows, food can be grouped by urgency:

🔴 Eat Soon — food expiring today or tomorrow

🟡 Coming Up — food expiring within the next few days

🟢 Still Fresh — food with more time remaining

Design Decisions

Making the Fridge the Main Experience

One important design decision was to avoid making the application feel like a traditional form-based dashboard.

The first version placed a large form at the top of the page, which made the interface feel more like a data-entry tool.

The design was refined to focus on:

Personal context

Food status

Adding food

Viewing food inventory

This creates a more natural experience because users can immediately understand the state of their food before taking action.

Quick Expiry Options

A standard date picker can slow users down when adding everyday leftovers.

For this reason, quick options such as Today, Tomorrow, and In 3 Days were introduced. A specific date option remains available when needed.

This balances speed with flexibility.

Clear Visual Hierarchy

The interface uses headings, supporting text, spacing, cards, and clear calls to action to guide users through the page.

The most important information should be easy to scan:

What food needs attention?

What food is currently being tracked?

How can I add another item?

Friendly Empty States

When there are no food items, the application should not simply display an empty table or blank space.

Instead, the empty state communicates what is happening and guides the user toward the next action.

Example:

Your fridge is empty

Add food and we'll help you keep track of it before it expires.

Technologies and Tools Used

This project is built using fundamental web technologies:

HTML — for structuring the content and layout of the application

CSS — for styling, spacing, responsiveness, visual hierarchy, and the overall user interface

JavaScript — for adding interactivity and handling the application's functionality

Git — for version control during development

GitHub — for hosting and managing the project repository

Figma — for exploring and refining the user interface and user experience

The project focuses on using core web technologies to build a simple, functional, and user-friendly food reminder experience.

Challenges Encountered

Challenge 1: The Original Interface Felt Too Form-Focused

The original design placed most of the attention on the food input form.

Solution

The hierarchy was redesigned so that the user's current food status and fridge inventory become more important parts of the experience.

The form was also simplified with quick expiry options.

Challenge 2: Making Expiry Selection Fast

A full date picker is flexible, but it can be unnecessary for common leftovers.

Solution

Quick actions were added for common choices:

Today

Tomorrow

In 3 Days

Users can still choose a specific date when necessary.

Challenge 3: Designing an Empty Fridge State

An empty list can make an application feel unfinished.

Solution

A friendly empty state was designed with clear messaging and an explanation of what the user should do next.

Future Improvements

Possible future features include:

Browser or push notifications before food expires

Food suggestions based on items that expire soon

Recipe recommendations for available leftovers

Editing and deleting food items

Marking food as eaten

Filtering food by category

Sorting food by expiry date

Statistics showing food saved from being wasted

Dark mode

User authentication and multiple household profiles

Project Goal

The goal of Leftover Food Reminder is not just to store expiry dates.

It is to create a simple and friendly food companion that helps people remember what they already have and encourages them to consume food before it goes to waste.