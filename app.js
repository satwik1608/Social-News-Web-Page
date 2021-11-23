fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=659bf7b6e5ec435b8d70b022cd25b125")
.then(response => response.json())
.then(headline =>{
    headline.articles.forEach(val =>{
        showUpdated(val.url,val.title,val.author);
    });
     
    
})


const showData = document.getElementById('showData');
// showUpdated();

function showUpdated(url,title,author){

    const hero = document.createElement('div');
    const titleElement = document.createElement('div');
    const linkElement = document.createElement('a');
    const authorElement = document.createElement('div');
    
    linkElement.textContent = url;
    linkElement.setAttribute('href', url);
    titleElement.textContent=title;
    
    authorElement.textContent=`Submitted by ${author}`;


    titleElement.classList.add('titleElement');
    linkElement.classList.add('linkElement');
    authorElement.classList.add('authorElement');


    hero.classList.add('hero');


    hero.appendChild(titleElement);
    hero.appendChild(linkElement);
    hero.appendChild(authorElement);


    showData.appendChild(hero);



};


const inputAuthor = document.getElementById('inputAuthor');
const inputTitle = document.getElementById('inputTitle');
const inputLink = document.getElementById('inputLink');
const addLink = document.getElementById('addlink');

const submit = document.getElementById('submit');
const addData = document.getElementById('addData');
const required = document.getElementById('dataRequired');

const successDiv = document.getElementById('success');

const addRandom = document.getElementById('submit2');

addRandom.addEventListener('click', ()=>{
    fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=659bf7b6e5ec435b8d70b022cd25b125")
    .then(response => response.json())
    .then(headline =>{
        const val = headline.articles[0];
            showUpdated(val.url,val.title,val.author);
            const success = () =>{
                const messages = document.createElement('p');
                messages.textContent =`The link ${val.title} has been succesfully added!`;
                successDiv.appendChild(messages);
                setTimeout(()=>{
                    successDiv.removeChild(messages);
                }, 3000);
            }
            success();
    successDiv.classList.remove('hideSuccess');
    setTimeout(() =>{
        successDiv.classList.add('hideSuccess'); 
    }, 2000);
            
    
    })  
});

submit.addEventListener('click', ()=>{
    addData.classList.remove('hideAdd');
});



addLink.addEventListener('click', ()=>{

    var temp2 = inputLink.value;
    
    var temp3= inputAuthor.value;
    var temp4 = inputTitle.value;
    console.log(temp2);

    if(temp2===""||temp3===""||temp2===""){
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
    

    

    showUpdated(temp2,temp4,temp3);

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
    addData.classList.add('hideAdd');
    success();
    successDiv.classList.remove('hideSuccess');
    setTimeout(() =>{
        successDiv.classList.add('hideSuccess'); 
    }, 2000);

    }

});

