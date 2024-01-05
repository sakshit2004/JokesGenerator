/*
NAME: SAKSHIT SHARMA
     FILE NAME: Jokes.js
     DATE: 2023-10-29
     DESCRIPTION: javascript for random joke genration.
*/


console.log("Sakshit");
const jokesArray = [
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
       
        "author": "Anonymous"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
       
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
     
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
       
        "author": "Nature Lover"
    },
    {
        "joke":"I'm on a whiskey diet. I've lost three days already.",

        "author": "shaq"
    },
    {
        "joke":"I told my computer I needed a break, and now it won't stop sending me Kit-Kat bars.",

        "author": "shar"
    },
    {
        "joke":"I'm friends with all electricians. We have great current connections.",

        "author": "sakshit"
    },
    {
        "joke":"I used to play hide and seek with my blanket. Now I can't find it.",

        "author":"Blanket"
    },
    {
        "joke":"Parallel lines have so much in common. It's a shame they'll never meet.",

        "author":"maths teacher"
    },
    {
        "joke": "I'm writing a book on hurricanes, but it's going to be a whirlwind romance.",
        
        "author": "Me"
    },

];

function jokesArray1() {
    const totalJokes = jokesArray.length;

    function getRandomJokeIndex() {
        const randomIndex = Math.floor(Math.random() * totalJokes);
        return randomIndex;
    }

    const randomIndex = getRandomJokeIndex();
    const randomJoke = jokesArray[randomIndex];

    const jokeTextDiv = document.getElementById("jokeText");
    const authorNameDiv = document.getElementById("authorName");

    jokeTextDiv.innerText = randomJoke.joke;
    authorNameDiv.innerText = `- ${randomJoke.author}`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("getJokeButton").addEventListener("click", jokesArray1);
});
