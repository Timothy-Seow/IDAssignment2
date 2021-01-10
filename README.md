# IDAssignment2

## Project's Name:
ID Assignment 2 - League of Legends

## Overview:
The website that I have made is based on this Multiplayer Online Battle Arena game, or MOBA for short, called League Of Legends. It is a 5 versus 5 team-based game that as a player, pick a champion, which stands for character in the game, and fight against the other team and destroy their base, allowing you to win.

The main purpose of this website is to allow anyone to get information on League Of Legends Champions and Items. Due to each champion having different abilities and each item having different bonuses, it is crucial for players to know which champion counter which champion, and which items suit each champion.

## Design Process
The primary target audience of this website is people who play League Of Legends. With the current Champion Pool of 153 Champions and more than 175 items available for purchase in a match, players need to understand each champion's abilities and each item's bonus in order to gain an advantage against their opponents and increasing their chances of winning the game. 

With so many different champion abilities and item bonuses,existing players can use this website to figure out which items suit their champions, and which are effective against the opponent.While new players can learn about different types of champions and their abilities, as well as the various items for their champions.

**User Stories:**
1. As a player, I want to know what are the statistics and abilities of a specific champion so that I know how to play against that champion.

1. As a player, I want to know what bonus does a specific item give so that I can tell whether I should buy it or not.

1. As a player, I want to learn more about different champions and its abilities so I can find out who I like to play the most.

1. As a player, I want to know more about a specific champion's story, so I can learn more about the game in general.

## Features

### Existing Features

### Champion Info

It contains all champions currently available in the game. Each champion when clicked, will display more information about that particular champion, including its name, tags, lore, base stats and abilities.

### Item Info

It contains all the items currently available in the game, whether its purchasable or not from the shop. Each item when clicked, will display information about the item, such as the bonuses it give,Active or Passive skills the item provide,description of the item,its cost and selling price (if any).

### Features Left to Implement

**Mastery** - Each Champion has a 7 mastery levels, which a player can achieve by playing and showing good performance in-game. This page will display the requirements of each mastery level.

**Runes** - The game has a rune system which allows players to use during the gameplay. Different runes have different bonuses which can affect the game. This page will allow players to know more about each rune.

**Recommended Runes** - With the Runes Page showing all the rune's information, the Recommended Runes will be displayed along with the individual champion information, so that new players will know what runes to bring for which champion.

**Recommended Items** - Almost the same as Recommended Runes but it is with Items instead. New players can refer to this to know what are the items that are recommended for this particular champion.

## Technologies Used:
* [HTML](https://html.spec.whatwg.org/multipage/)
    * The project uses HTML to create content for the website.
* [CSS](https://www.w3.org/Style/CSS/)
    * The project uses CSS to style the content on the website.
* [JavaScript](https://www.javascript.com/)
    * The project uses Javascript to make the website interactive.
* [JQuery](https://jquery.com/)
    * The project uses JQuery to fetch data from APIs and simplify DOM manipulation.

## Testing

1. Champion Buttons:
    1. Go to the "Champion" Page
    1. Try to click on any of the champion button and verify that the page refreshes into a new page containing relevant information about that particular champion
1. Champion Page Search Bar:
    1. Go to the "Champion" Page
    1. Try to search any of the champion's name in the search bar and verify that only the champion with the name that you search appears on the website
    1. Try to search with just a few letter and verify that champions containing those few words are the only ones appearing on the website
    1. Verify that after searching, the champion button is clickable and refreshes into a new page containing relevant information about that particular champion
1. Item Buttons:
    1. Go to the "Item" Page
    1. Try to click on any item button and verify that a modal box appears in the middle of the screen with the information of that particular item
    1. Try to dismiss the modal box by clicking anywhere on the page or press escape and verify that the modal box got dismissed
1. Item Page Search Bar:
    1. Go to the "Item" Page
    1. Try to search any of the item's name, effect or description in the search bar and verify that only the item with the name that you search appears on the website
    1. Try to search with just a few letter and verify that items containing those few words are the only ones appearing on the website
    1. Verify that after searching, the item buttons are clickable and a modal box containing information about that particular item appear after clicking

## Credits

### Content
The content for each champion and item in this site were obtained from these APIs
* [Champions](http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json)
* [Specific_Champion](http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion/Aatrox.json)
    * Where "Aatrox" before the .json is the Champion Name
* [Items](http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/item.json)

### Media
The Images and Icons used in this site were obtained from these APIs
* [Champion_Image](https://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/Aatrox.png)
    * Where "Aatrox" before the .png is the Champion Name
* [Champion_Passive_Ability_Image](https://ddragon.leagueoflegends.com/cdn/11.1.1/img/passive/Aatrox_Passive.png)
    * Where "Aatrox_Passive" before the .png is the Champion's Passive Ability ID
* [Champion_Ability_Image](https://ddragon.leagueoflegends.com/cdn/11.1.1/img/spell/AatroxW.png)
    * Where "AatroxW" before the .png is the Champion's Ability ID
* [Item_Image](https://ddragon.leagueoflegends.com/cdn/11.1.1/img/item/1001.png)
    * Where "1001" before the .png is the Item ID

### Acknowledgements
* I received inspiration for this project from League of Legends