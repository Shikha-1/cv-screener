
const data = [
  {
    name: "Shikha",
    age: 23,
    gender: "female",
    qualification: "b.tech.",
    img: `https://randomuser.me/api/portraits/women/75.jpg`,
  },
  {
    name: "Shukla",
    age: 90,
    gender: "male",
    qualification: "b.sc.",
    img: `https://randomuser.me/api/portraits/men/78.jpg`,
  },
  {
    name: "Shekhar",
    age: 19,
    gender: "male",
    qualification: "b.c.a.",
    img: `https://randomuser.me/api/portraits/men/75.jpg`,
  },
  {
    name: "Shreya",
    age: 34,
    gender: "female",
    qualification: "b.tech.",
    img: `https://randomuser.me/api/portraits/women/45.jpg`,
  },
  {
    name: "Shilpa",
    age: 90,
    gender: "female",
    qualification: "b.arch.",
    img: `https://randomuser.me/api/portraits/women/25.jpg`,
  },
];

//cv iterator
function cvIterator(profiles) {
    let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
    }
  };
};


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('img');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img style="margin-left: 58vmin" src='${currentCandidate.img}'>`;
    profile.innerHTML = `<ul class="list-group text-center">
                          <li class="list-group-item">Name: ${currentCandidate.name}</li>
                          <li class="list-group-item">Age: ${currentCandidate.age}</li>
                          <li class="list-group-item">Gender: ${currentCandidate.gender}</li>
                          <li class="list-group-item">Qualification: ${currentCandidate.qualification}</li>
                        </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}
