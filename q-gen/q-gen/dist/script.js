let avatarQuotes = [
{
  text: "I've seen enough of Ba Sing Sei. And I can't even see!",
  author: "Toph Bei Fong" },

{
  text: "No, it's not. It's easy to do nothing... but it's hard to forgive.",
  author: "Prince Zuko" },

{
  text:
  "Sometimes life is like this dark tunnel. You can't always see the light at the end of the tunnel, but if you just keep moving... you will come to a better place.",
  author: "Uncle Iroh" },

{
  text:
  "In the darkest times, hope is something you give yourself. That is the meaning of inner strength.",
  author: "Uncle Iroh" },

{
  text:
  "You must never give in to despair. Allow yourself to slip down that road, and you surrender to your lowest instincts.",
  author: "Uncle Iroh" },

{
  text:
  "Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.",
  author: "Uncle Iroh" },

{
  text: "You need to find someone who waits and listens before striking.",
  author: "King Bumi" },

{
  text:
  "The true mind can weather all the lies and illusions without being lost. The true heart can tough the poison of hatred without being harmed. Since beginning-less time, darkness thrives in the void, but always yields to purifying light.",
  author: "The Ancient Lion Turtle" },

{
  text:
  "Two years ago, my father and the men of my tribe journeyed to the Earth Kingdom to help fight against the Fire Nation, leaving me and my brother to look after our tribe. Some people believe that the Avatar was never reborn into the Air Nomads and that the cycle is broken, but I haven't lost hope.",
  author: "Katara" },

{
  text:
  "You are stronger and wiser and freer than you have ever been. And now you have come to the crossroads of destiny. It's time for you to choose.",
  author: "Uncle Iroh" },

{
  text: "Sometimes the best way to solve a problem is to help others.",
  author: "Uncle Iroh" },

{
  text:
  "My mother thought I was a monster... she was right of course, but it still hurt.",
  author: "Azula" },

{
  text:
  "I know you're not supposed to cry over spilled tea, but... it's just so sad.",
  author: "Uncle Iroh" },

{
  text: "Why am I so bad at being good?",
  author: "Zuko" },

{
  text:
  "Look, you're going to fail a lot before things work out. Even though you'll probably fail over and over and over again. You have to try every time. You can't quit because you're afraid you might fail.",
  author: "Zuko" },

{
  text:
  "Get over here, Zuko. Being part of the group also means being part of group hugs.",
  author: "Katara" },

{
  text:
  "The greatest illusion of this world is the illusion of separation. Things you think are separate and different are actually one and the same.",
  author: "Guru Pathik" },

{
  text:
  "Oh, no! I knew it was only a matter of time! Appa ate Momo! Momo, I'm coming for you, buddy.",
  author: "Sokka" }];



function getQuote() {
  let randomIndex = Math.floor(Math.random() * avatarQuotes.length);
  let randomQuote = avatarQuotes[randomIndex].text;
  let randomAuthor = avatarQuotes[randomIndex].author;
  const htmlQuoteText = document.getElementById("text");
  htmlQuoteText.innerHTML = randomQuote;
  const htmlQuoteAuthor = document.getElementById("author");
  htmlQuoteAuthor.innerHTML = randomAuthor;

  const twitter = document.querySelector("#twitter-share-button");
  twitter.setAttribute(
  "href",
  "https://twitter.com/intent/tweet?hashtags=quotes,Fcc&related=freecodecamp&text=" +
  encodeURIComponent('"' + randomQuote + '" ' + randomAuthor));

}

window.onload = function () {
  getQuote();
};