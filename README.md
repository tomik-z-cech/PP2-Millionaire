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
