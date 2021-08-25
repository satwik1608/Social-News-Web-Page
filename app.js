let newsList = [
    {
        title: "Hacker News",
        URL: "http://news.ycombinator.com",
        author: "Sophie"
    },
    {
        title: "Reddit",
        URL: "https://reddit.com",
        author: "Thomas"
    },
    {
        title: "BoingBoing",
        URL: "http://boingboing.net",
        author: "Daniel"
    },

];




const showData = document.getElementById('showData');
showUpdated();

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

    var temp = {
        author: "",
        URL : "",
        title : ""
    };

    var temp2 = inputLink.value;
    
    temp.author= inputAuthor.value;
    temp.title = inputTitle.value;
    temp.URL= temp2;

    if(temp.author===""||temp.title===""||temp.URL===""){
        if(required.classList.contains('hideRequired')){
        required.classList.remove('hideRequired');
        }
    }

    else{
        if(!required.classList.contains('hideRequired')){
            required.classList.add('hideRequired');
        }
    
    if(temp2.startsWith!="https://"||temp2.startsWith!="http://"){
    const flag="http://"
    temp2=flag.concat(temp2);
    }

    temp.URL=temp2;

    var tempTitle = inputTitle.value;

    newsList.unshift(temp);

    const success = () =>{
        const messages = document.createElement('p');
        messages.textContent =`The link ${tempTitle} has been succesfully added!`;
        successDiv.appendChild(messages);
        setTimeout(()=>{
            successDiv.removeChild(messages);
        }, 3000);
    }

    inputLink.value="";
    inputAuthor.value="";
    inputTitle.value="";
    showData.innerText="";
    showUpdated();
    addData.classList.add('hideAdd');
    success();
    successDiv.classList.remove('hideSuccess');
    setTimeout(() =>{
        successDiv.classList.add('hideSuccess'); 
    }, 2000);
}


});

