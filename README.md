# Lotto-Number-Generator
This project is a web-based Lotto number generator with a stylish design and interactive features.

## Key Features

- Animated background
- Realistic lotto ball animations
- User input for custom number selection
- Random number generation
- Match checking between user numbers and generated numbers

## Technologies Used

- HTML5
- CSS3 (with animations)
- JavaScript
- Bootstrap 5.3.3

## Main Functions

### HTML Structure

The HTML document is structured with the following main sections:

1. Entry Modal
2. Main Content Area
3. Result Display

### CSS Styles

#### Background Animation

```css
@keyframes moveBackground {
  0% { background-position: 0% 50%; }
  25% { background-position: 50% 50%; }
  50% { background-position: 100% 50%; }
  75% { background-position: 50% 50%; }
  100% { background-position: 0% 50%; }
}
This animation is applied to each lotto ball, creating a spinning and scaling effect.
JavaScript Functions
While the JavaScript functions are not directly visible in the provided HTML, we can infer the following functionalities based on the HTML structure and IDs:
User Input Handling:
Likely uses getElementById() to get user inputs from input1 to input6.
Validates input to ensure numbers are between 1 and 49.
Number Generation:
Generates 6 random numbers between 1 and 49.
Ensures no duplicates in the generated set.
Display Update:
Updates the lottoNumbers div with the generated numbers.
Applies animations to the lotto balls.
Match Checking:
Compares user input numbers with generated numbers.
Displays the result in the matchResult div.
Result Display:
Shows appropriate message and GIF based on the number of matches.
Uses message-0 to message-6 divs to display different outcomes.
Modal Handling:
Controls the visibility of the entry modal and main content area.
Responsive Design
The CSS includes media queries to ensure the layout is responsive on smaller screens:
css
@media (max-width: 576px) {
  /* Styles for small screens */
}

Accessibility
The project uses semantic HTML and includes meta tags for improved SEO and accessibility.
Future Improvements
Implement server-side number generation for true randomness.
Add multi-language support.
Incorporate more interactive elements or game modes.
text

3. **Save the file as `README.md`** in your project directory.
4. **Upload this file to your GitHub repository**.

This will create a well-structured README file for your project! If you need further assistance, feel free to ask!
