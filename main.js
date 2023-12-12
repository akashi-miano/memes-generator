const memeGenBtn = document.querySelector(".meme-generator");
const memeAuthor = document.querySelector(".meme-author");
const memeTitle = document.querySelector(".meme-title");
const memeImg= document.querySelector(".meme-img");

const updateDetails = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = `<h1>${title}</h1>`;
    memeAuthor.innerHTML = `<p>Meme by: ${author}</p>`;
}
const generateMeme = () => {
  fetch("https://meme-api.com/gimme").then(res => res.json())
  .then(data => {
    updateDetails(data.url, data.title, data.author);
  });
};
memeGenBtn.addEventListener("click", generateMeme);
generateMeme();