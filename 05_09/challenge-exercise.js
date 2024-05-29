// JavaScript code​​​​​​‌​‌‌​​‌​‌​​​‌​‌‌​‌‌‌​‌​​​ below
// Change these values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false
const showHints = false

// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

const navContainer = `
    <nav class="main-navigation">
    </nav>
`;



function createNavMenu(document) {
    // Your code goes here
    const headerElement =
          document.querySelector(".siteheader");
    const navElement =
          document.createElement("nav");
    // The instructor's solution was:
    //   navElement.classList.add("main-navigation")
    // 
    navElement.className="main-navigation";
    /* AHA!  It turns out that there is a BIG
       difference between correctly setting
       the "outer, container-ish properties" of
       an HTML element, and assigning to its
       inner-most, ENCLOSED, HTML text-body,
       by assigning to the innerHTML!

       Therefore the following assignment is incorrect,
       and we are correct instead to assign to the
       object's CSS class, as above.
    */
    // navElement.innerHTML=navContainer;

    const lstElement =
          document.createElement("ul");
    // THIS IS NOT A RECOMMENDED PRACTICE, BUT WORKS
    // FOR ILLUSTRATION PURPOSES.  THE RECOMMENDED
    // PRACTICE IS TO CREATE THE INDIVIDUAL LIST ITEMS
    // VIA THE INTERFACE PROVIDED BY document, ETC,
    // INSTEAD OF DIRECTLY "INJECTING" HTML.
    lstElement.innerHTML = navContent;

    navElement.append(lstElement);

    headerElement.append(navElement);

}

createNavMenu(document);

// This is how your code will be called.
// Your answer should be the HTML output described in the challenge text.
// You can edit this code to try different testing cases.
const result = document.querySelector(".siteheader").outerHTML;
