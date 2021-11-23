let newsList = [
    // {
    //     title: "Hacker News",
    //     URL: "http://news.ycombinator.com",
    //     author: "Sophie"
    // },
    // {
    //     title: "Reddit",
    //     URL: "https://reddit.com",
    //     author: "Thomas"
    // },
    // {
    //     title: "BoingBoing",
    //     URL: "http://boingboing.net",
    //     author: "Daniel"
    // },

];

fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=659bf7b6e5ec435b8d70b022cd25b125")
.then(response => response.json())
.then(headline =>{
    headline.articles.forEach(val =>{
        const hero = document.createElement('div');
        const titleElement = document.createElement('div');
        const linkElement = document.createElement('a');
        const authorElement = document.createElement('div');
        
        linkElement.textContent = val.url;
        linkElement.setAttribute('href', val.url);
        titleElement.textContent=val.title;
        
        authorElement.textContent=`Submitted by ${val.author}`;
    
    
        titleElement.classList.add('titleElement');
        linkElement.classList.add('linkElement');
        authorElement.classList.add('authorElement');
    
    
        hero.classList.add('hero');
    
    
        hero.appendChild(titleElement);
        hero.appendChild(linkElement);
        hero.appendChild(authorElement);
    
    
        showData.appendChild(hero);
    });
     
    
})


const showData = document.getElementById('showData');
// showUpdated();

function showUpdated(){
    for(var i =0;i<newsList.length;++i){


    const hero = document.createElement('div');
    const titleElement = document.createElement('div');
    const linkElement = document.createElement('a');
    const authorElement = document.createElement('div');
    
    linkElement.textContent = newsList[i].URL;
    linkElement.setAttribute('href', newsList[i].URL);
    titleElement.textContent=newsList[i].title;
    
    authorElement.textContent=`Submitted by ${newsList[i].author}`;


    titleElement.classList.add('titleElement');
    linkElement.classList.add('linkElement');
    authorElement.classList.add('authorElement');


    hero.classList.add('hero');


    hero.appendChild(titleElement);
    hero.appendChild(linkElement);
    hero.appendChild(authorElement);


    showData.appendChild(hero);


}
};


const inputAuthor = document.getElementById('inputAuthor');
const inputTitle = document.getElementById('inputTitle');
const inputLink = document.getElementById('inputLink');
const addLink = document.getElementById('addlink');

const submit = document.getElementById('submit');
const addData = document.getElementById('addData');
const required = document.getElementById('dataRequired');

const successDiv = document.getElementById('success');

submit.addEventListener('click', ()=>{
    addData.classList.remove('hideAdd');
});



addLink.addEventListener('click', ()=>{

    // var temp = {
    //     author: "",
    //     URL : "",
    //     title : ""
    // };

    var temp2 = inputLink.value;
    
    var temp3= inputAuthor.value;
    var temp4 = inputTitle.value;
    console.log(temp2);

    // if(temp2===""||temp3===""||temp2===""){
    //     if(required.classList.contains('hideRequired')){
    //     required.classList.remove('hideRequired');
    //     }
    // }

    // else{
    //     if(!required.classList.contains('hideRequired')){
    //         required.classList.add('hideRequired');
    //     }
    
    // if(temp2.startsWith!="https://"||temp2.startsWith!="http://"){
    // const flag="http://"
    // temp2=flag.concat(temp2);
    // }

    const hero = document.createElement('div');
    const titleElement = document.createElement('div');
    const linkElement = document.createElement('a');
    const authorElement = document.createElement('div');
    
    linkElement.textContent = temp2;
    linkElement.setAttribute('href', temp2);
    titleElement.textContent=temp4;
    
    authorElement.textContent=`Submitted by ${temp3}`;


    titleElement.classList.add('titleElement');
    linkElement.classList.add('linkElement');
    authorElement.classList.add('authorElement');


    hero.classList.add('hero');


    hero.appendChild(titleElement);
    hero.appendChild(linkElement);
    hero.appendChild(authorElement);


    showData.appendChild(hero);
    

    // var tempTitle = inputTitle.value;

    // newsList.unshift(temp);

    const success = () =>{
        const messages = document.createElement('p');
        messages.textContent =`The link ${temp4} has been succesfully added!`;
        successDiv.appendChild(messages);
        setTimeout(()=>{
            successDiv.removeChild(messages);
        }, 3000);
    }

    inputLink.value="";
    inputAuthor.value="";
    inputTitle.value="";
    // showData.innerText="";
    // showUpdated();
    addData.classList.add('hideAdd');
    success();
    successDiv.classList.remove('hideSuccess');
    setTimeout(() =>{
        successDiv.classList.add('hideSuccess'); 
    }, 2000);



});

