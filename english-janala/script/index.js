const createElements = (arr) => {
    // console.log(arr);
    const htmlElement = arr.map(el => `<span class="btn">${el}</span>`);
    return htmlElement.join(" ");
    
}

const manageSpinner = (status) => {
    if(status == true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("word-container").classList.add("hidden");
    }else{
         document.getElementById("word-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
}

const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")//promise of response
    .then((res) => res.json())//promise of json data
    .then((json) => displayLesson(json.data));
};

const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".lesson-btn");
    // console.log(lessonButtons);
    lessonButtons.forEach(btn => btn.classList.remove("active"));
}

const loadLevelWord = (id) => {
    manageSpinner(true);
// console.log(id); 
const url =`https://openapi.programming-hero.com/api/level/${id}`;
// console.log(url);
fetch(url)
.then(res => res.json())
.then((data) => {
    removeActive();//remove all active class
    const clockBtn = document.getElementById(`lesson-btn-${id}`);
    //  console.log(clockBtn);

    clockBtn.classList.add("active");//add active class
    displayLevelWord(data.data)
});
}

const loadWordDetail =async(id) => {
    const url =`https://openapi.programming-hero.com/api/word/${id}`
    // console.log(url);
    const res = await fetch(url);
    const details = await res.json();
    displayWordDetails(details.data);
}

const displayWordDetails = (word) => {
    console.log(word);
    const detailsBox = document.getElementById("details-container");
    detailsBox.innerHTML = `
     <div>
        <h2 class="text-2xl font-bold">${word.word} (<i class="fa-solid fa-microphone-lines"></i> :${word.pronunciation})</h2>
      </div>
      <div>
        <h2 class=" font-bold">Meaning</h2>
        <p>${word.meaning}</p>
      </div>
      <div>
        <h2 class=" font-bold">Example</h2>
        <p>${word.sentence}</p>
      </div>
      <div>
        <h2 class=" font-bold">Synonym</h2>
        <div>${createElements(word.synonyms)}</div>
      </div>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
    `;
    
    document.getElementById("word_modal").showModal();
};

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
   
    
    wordContainer.innerHTML ="";

    if(words.length == 0) {
        // alert("no word detected");
         wordContainer.innerHTML =`
         <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
         <img class ="mx-auto" src="./assets/alert-error.png"/>
        <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
    </div>
         `;
         manageSpinner(false);
        return;
    }

    words.forEach(word => {
        // console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
         <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word ? word.word : "sobdo paoya jayni"}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="font-bangla text-2xl font-medium">${word.meaning ? word.meaning : "meaning paoya jayni"} / ${word.pronunciation ? word.pronunciation : "pronunciation paoyajayni"}</div>
            <div class="flex justify-between items-center">
                <button onclick="loadWordDetail(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `;
        wordContainer.append(card);
        
    });
    manageSpinner(false);
}

const displayLesson = (lessons) => {
    // console.log(lessons);

    //get the container and empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML ="";

    // get into every lessons
    for (let lesson of lessons){
        // console.log(lesson);
        

     //create element

     const btnDiv = document.createElement("div");
     btnDiv.innerHTML = `
     <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
     `;

      //append into container

      levelContainer.append(btnDiv);
    }
   
}

loadLessons();