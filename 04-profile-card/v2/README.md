# Profile Card - Version 2

This React project is an improved version of Version 1. It displays a profile card with a dynamic skills list that adjusts based on data from an array.

## 🌟 What's New

- Skills are now generated dynamically using `.map()` from an array of skill objects.
- Each skill has a name, proficiency level (beginner, intermediate, advanced), and a corresponding background color.
- Emojis are displayed based on the skill level for visual clarity.

## 💻 Project Structure

- **Photo**: Displays a profile image.
- **Intro**: Shows name and personal introduction.
- **Skill**: Receives props (skill, color, level) and renders a styled skill box with an emoji.
- **SkillLists**: Iterates over the `skills` array to render multiple `Skill` components.


