# ***Millionaire - Portfolio Project 2***
---
# **1. Key project information**

- **Description :** This Portfolio Project 2 website called **Millionare** is an online game (quiz) that allows the user to test their general knowledge, collect points into score that is time relevant and make an entry to lederboard.
- **Key project goal :** To entertain users of this page and test their trivia knowledge attempting the **Millionaire** game.
- **Audience :** There's no age or any other limit to audience of this page. Target audience are any users searching for trivia games.
- **Live version :** Live version of **Millionaire** game can be viewed [here](https://tomik-z-cech.github.io/PP2-Millionaire/) .

![Mockup](/docs/multidevice-mockup.png)

---

# **2.Table of content**

- [1. Key project information](https://github.com/tomik-z-cech/PP2-Millionaire#1-key-project-information)
- [2. Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)
- [3. Story of creation](https://github.com/tomik-z-cech/PP2-Millionaire#3-story-of-creation)
- [4. Color palette](https://github.com/tomik-z-cech/PP2-Millionaire#4-color-palette)
- [5. Site map](https://github.com/tomik-z-cech/PP2-Millionaire#5-site-map)
- [6. Features](https://github.com/tomik-z-cech/PP2-Millionaire#4-features)
    - [6.1. Features used in every HTML document](https://github.com/tomik-z-cech/PP2-Millionaire#41-features-used-in-every-html-document)
    - [6.2. Main HTML documents](https://github.com/tomik-z-cech/PP2-Millionaire#62-main-html-documents)
    - [6.3. Existing Features summary](https://github.com/tomik-z-cech/PP2-Millionaire#63-existing-features-summary)
    - [6.4. Future Features](https://github.com/tomik-z-cech/PP2-Millionaire#64-future-features)
- [7. Wireframes](https://github.com/tomik-z-cech/PP2-Millionaire#7-wireframes)
- [8. Testing](https://github.com/tomik-z-cech/PP2-Millionaire#8-testing)
    - [8.1. Testing via Google Chrome Developer Tools](https://github.com/tomik-z-cech/PP2-Millionaire#81-testing-via-google-chrome-developer-tools)
    - [8.2. Physical testing by developer](https://github.com/tomik-z-cech/PP2-Millionaire#82-physical-testing-by-developer)
    - [8.3. Physical testing by users](https://github.com/tomik-z-cech/PP2-Millionaire#83-physical-testing-by-users)
    - [8.4. Lighthouse testing](https://github.com/tomik-z-cech/PP2-Millionaire#84-lighthouse-testing)
    - [8.5. Validators testing](https://github.com/tomik-z-cech/PP2-Millionaire#85-validators-testing)
    - [8.6. Accessibility testing (WAVE Web Accessibility Evaluation Tools)](https://github.com/tomik-z-cech/PP2-Millionaire#86-accesibility-testing-wave-web-accessibility-evaluation-tools)
    - [8.7. Bugs](https://github.com/tomik-z-cech/PP2-Millionaire#87-bugs)

---


# **3. Story of creation**

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

---


# **4. Color palette**

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

---

# **5. Site map**

![Site Map](/docs/site-map.png)

---

# **6. Features**

## **6.1. Features used in every HTML document**

### **Header**
- Header contains a Logo section *(appendix 2)* which is also used as a link to Home page `index.html` in the left top corner and Menu section *(appendix 3)* for easy navigation through both project pages. Menu is designed to change to "hamburger menu" *(appendix 4)* when the resolution changes to less than 1140 pixels in width.
- Header is designed to have fixed position on top of page `top: 0px` through all browsing.
- Header is designed to cover full width `width: 100%` of the browsing window.
- Header is semi-transparent using `background-color: rgba(65, 15, 60, 0.85);`.
- This will allow user to navigate through the `index.html` and `leaderboard.html` when clicked.
- Header appears same on all devices.

*Appendix 2 - Logo*

![Header - Logo](/docs/logo.png)

*Appendix 3 - Menu*

![Header - Menu](/docs/menu.png)

*Appendix 4 - "Hamburger menu"*

![Header - Hamburger Menu](/docs/hamburger-menu.png)

[Back to Table of content](https://github.com/tomik-z-cech/PP1-Cibo-Fresco#2table-of-content)

### **Footer**
- Footer is designed to allow user to visit profiles/pages of real "Who wants to be a millionaire" TV show of Social network platforms (Facebook, Twitter, Instagram) via links that open in new browser tabs *(appendix 5)*.
- Footer is designed to have fixed position on the bottom of page `bottom: 0px` through all browsing.
- Footer is designed to cover full width `width: 100%` of the browsing window.
- Footer is semi-transparent using `background-color: rgba(65, 15, 60, 0.85);;`.
- This will allow user to open all social networks links in new tabs.
- Footer appears same on all devices.

*Appendix 5 - Social links*

![Footer - Social links](/docs/socails.png)

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

### **Favicon**
- Both of the HTML documents in this project are equipped with Favicon. This is to ease navigation for user in case of more tabs opened. Logo of *Who wants to be a millionaire TV show* was selected as Favicon *(appendix 6)*. 

*Appendix 6 - Favicon*

![Favicon](/docs/favicon.png)

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

### **404.html**
- This project is designed to have custom `404.html` page *(appendix 7)*. In case of user clicks on broken link user isn't completely "cut off" from browsing, instead a page with header and footer appears and user is informed of the situation. 

*Appendix 7 - 404.html*

![404 page](/docs/404.png)

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

### **Scroll bar**
- This project is designed to browse without scrolling on the main HTML documents. Scrolling is used to navigate through `rules container` and `leaderboard` container *(appendix 8)*.

*Appendix 8 - Scroll bar*

![Scrollbar](/docs/scrollbar.png)

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

## 6.2. Main HTML documents

### **Rules page**

- **File :** `index.html`
- **Title :** `Millionaire ¦ Play !`
- **User :** Explains the rules of this trivia game to the user and awaits for user's name input. *(appendix 9)*.
- **Development :** User's input is read into `playerName` variable and checked against incorrect name format (name cannot be empty string and cannot containe spaces) - `function checkName()`. Page linked with `script.js` file.

*Appendix 9 - Rules page*

![Rules page - screenshot](/docs/rules.png)

[Back to Table of content](https://github.com/tomik-z-cech/PP1-Cibo-Fresco#2table-of-content)

### **Game Page**

- **File** : `index.html`
- **Title** : `Millionaire ¦ Play !`
- **User** : Once user inputs their name in requerequired format, the user is brought to game section of `index.html` *(appendix 10)*.
- **Development :**
  - After clicking "Let's play ! button" with name filled in required format, name is checked by `function checkName()` and `function prepareGameView()` is called. Page linked with `script.js` file.

*Appendix 10 - Reservation page*

![Game page - screenshot](/docs/game.png)

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

### **Leader Board Page**

- **File** : `leaderboard.html`
- **Title** : `Millionaire ¦ Leader Board`
- **User** : User is able to see the top 10 players they did finish the game. *(appendix 11)*.
- **Development :**  This page is linked with `readstorage.js` file. Leaderboard uses `localStorage` as a place to hold game data, hence the leaderboard isn't global, `function readStorage()` is called after DOM loaded.

*Appendix 11 - LeaderBoard page*

![Leader Board page - screenshot](/docs/leaderboard.png)

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

## **6.3. Existing Features summary**
- Users of this site are able to read the rules of the game, enter their game name, stitch on/off (off by default) the back ground music and/or sound effects on the rules page.
- Name is validated for incorrect format, users are prompted with set of randomly selected questions.
- Users are able to use three different lifelines.
- After answering all questions correctly, score is stored in local storage.
- Site responses to different view-port sizes.

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

## **6.4. Future Features**
- To use globally run code and global storage to save scores online.
- To add "question editor", to enable admins to create/edit/delete questions without manually editing `questions.json` file.
- To add dark/light mode setting toggle.

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

---

# **7. Wireframes**
| Name of page | Wireframe PC | Wireframe Phone
|--|--|--|
| **index.html - rules section** | *appendix 12* | *appendix 13*  |
| **index.html - game section** | *appendix 14* | *appendix 15*  |
| **leaderboard.html** | *appendix 16* | *appendix 17*  |
| **vertical mask for screens with width > height** | N/A | *appendix 18*  |

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

*Appendix 12 - Wireframe - index.html - rules section - PC*

![Appendix 12 - Wireframe - index.html - rules section - PC](docs/rules-wireframe-pc.png)

*Appendix 13 - Wireframe - index.html - rules section - Phone*

![Appendix 13 - Wireframe - index.html - rules section - Phone](docs/rules-wireframe-mobile.png)


*Appendix 14 - Wireframe - index.html - game section - PC*

![Appendix 14 - Wireframe - index.html - game section - PC](docs/game-wireframe-pc.png)


*Appendix 15 - Wireframe - index.html - game section - Phone*

![Appendix 15 - Wireframe - index.html - game section - Phone](docs/game-wireframe-mobile.png)


*Appendix 16 - Wireframe - leaderboard.html PC*

![Appendix 16 - Wireframe - leaderboard.html PC](docs/leaderboard-wireframe-pc.png)


*Appendix 17 - Wireframe - leaderboard.html Phone*

![Appendix 17 - Wireframe - leaderboard.html Phone](docs/leaderboard-wireframe-mobile.png)


*Appendix 18 - Wireframe - vertical mask - only applicable on screens with width > height*

![Appendix 18 - Wireframe - vertical mask](docs/vertical-mask-wireframe.png)

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

---

# **8. Testing**
## **8.1 Testing via Google Chrome Developer Tools**
- **Task :** To test the project for responsiveness in Google Chrome Developer Tools, to ensure correct `@media screen and (max-width: ... )` is enabled and all elements of the project are responding to changing view-port.
- **Method :** Project was displayed via Google Chrome browser, Developer tools were opened and view-port size changed to different sizes.
- **Expected result :** Project does response to three levels of view-port sizes.
- **Actual result :** Project is fully responsive in three levels, view-port width **up to 1140px** (mobile phone devices and tablets), **view-port width 1141px - 1600px** (laptops) and **view-port width over 1600px** (full HD devices). No content is distorted.
- **Overall result :** Pass

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

## **8.2. Physical testing by developer**
- **Task :** To physically test the final project responsiveness on different devices with different view-port.
- **Method :** Project was tested on following devices : 
  - IPhone 8 - mobile phone with small view-port
  - Samsung Fold Z4 - mobile phone with large view-port
  - FireHD 8 - tablet with small view-port
  - Samsung Galaxy tab S6 - tablet with large view-port
  - PC with resolution 1366px * 768px (HD)
  - PC with resolution 1920px * 1080px (Full HD)  
- **Expected result :** Project does response without distortion on all devices.
- **Actual result :**  No content is distorted on any of the listed devices.
- **Overall result :** Pass
---
- **Task :** To physically test the final project functionality and local storage in different browsing applications.
- **Method :** Project was tested in following applications : 
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge
  - Opera
  - Safari
- **Expected result :** Project does function in all web browsers.
- **Actual result :**  No content is distorted in any of the listed browsers and project keeps functionality, all navigation links are working and local storage does function without problems.
- **Overall result :** Pass
---
- **Task :** To physically test navigation through the game including lifelines, correct/incorrect answers, run out of time scenario.
- **Method :** Navigate from `index.html` to the game and play as many possible game cycles to try to simulate different game scenarios/outputs.
- **Expected result :** After answering all questions, score is recorded in local storage, otherwise reason for not being succesful is given to user.
- **Actual result :**  As expected, tested scenarios were working without problems, lifelines were used without problems. Score is beaing read, sliced and recorded every time tested.
- **Overall result :** Pass

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

---

## **8.3. Physical testing by users**
- **Task :** To test "user-friendliness" and possible bugs that weren't found by developer testing.
- **Method :** Group of users were given link to deployed project to play with and send feedback.

|User|Amy Parlon  |
|--|--|
| Feedback given | Very enjoyable and user friendly. Love trivia games and this is super easy to navigate through. Check spelling of questions. |
| Applied changes | Spell check on question.json performed. Commit [bec6d30](https://github.com/tomik-z-cech/PP2-Millionaire/commit/bec6d30315fc2c262d4c8d6c8df1670ad2d5ac32)  |
---
|User|Kyle Kennedy  |
|--|--|
| Feedback given | When the levels are all complete there isn't natural wayto start a new game. |
| Applied changes | Added "Play again button" to the bottom of leader board. Commit [2e1f750](https://github.com/tomik-z-cech/PP2-Millionaire/commit/2e1f750822edf11a13403fccb1bb6e0baf7b18c1). |
---
|User|Eamonn Ryan   |
|--|--|
| Feedback given | All looks good and working just fine. Might be no harm to add rotate your phone icon. |
| Applied changes | Added "Rotate your phone" to the vertical mask to `*.html`. Commit [e0fa355](https://github.com/tomik-z-cech/PP2-Millionaire/commit/e0fa355180211d558bbd78f96dc548812be6e003) |
---

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

---

## **8.5. Validators testing**

### Jigsaw CSS validator
- **Method :** Project (`styles.css`) was tested by  [W3C CSS Validator](https://jigsaw.w3.org/).
- **Result :** No errors were found when tested (*appendix 19*).

*Appendix 19 - Jigsaw CSS Validator testing - `styles.css`*

![Appendix 19 - Jigsaw testing - styles.css](docs/css-validator.png)

### W3C HTML validator
- **Method :** Every HTML document was tested by  [W3C Validator](https://validator.w3.org/).
- **Result :** Initial validating found 1 error (stray `</img>` tags. Stray tags were removed and there were no future errors found after this fix. Commit [f66c933](https://github.com/tomik-z-cech/PP2-Millionaire/commit/f66c933fb608ccd7affed0a8e73c3ac19ff52ce9).

[Back to Table of content](https://github.com/tomik-z-cech/PP2-Millionaire#2table-of-content)

|File|Appendix  |
|--|--|
|`index.html`  |*appendix 20*  |
|`leaderboard.html`  |*appendix 21*  |
|`404.html`  |*appendix 22*  |

*Appendix 20 - W3C Validator testing - `index.html`*

![Appendix 21 - W3C Validator testing - index.html](docs/index.png)

*Appendix 21 - W3C Validator testing - `leaderboard.html`*

![Appendix 22 - W3C Validator testing - leaderboard.html](docs/html-validator-leaderboard.png)

*Appendix 22 - W3C Validator testing - `404.html`*

![Appendix 23 - W3C Validator testing - 404.html](docs/html-validator-404.png)
