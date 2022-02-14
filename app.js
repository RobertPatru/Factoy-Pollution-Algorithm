const firstArray = document.querySelector('.firstArray');
const sortedArray = document.querySelector('.sortedArray');
const pollutionLevelP = document.querySelector('.pollutionLevel');
const pollutionTargetP = document.querySelector('.pollutionTarget');
const currentPollutionLevelP = document.querySelector('.currentPollutionLevelP');
const newlyFactoryPopulation = document.querySelector('.newlyFactoryPopulationP');
const numberOfFiltersUsed = document.querySelector('.number-of-filters-used');

const addBtn = document.querySelector('.add-btn');
const calculateBtn = document.querySelector('.calculate-btn');
const resetBtn = document.querySelector('.reset-btn');
const input = document.getElementById('input');
const showNumbersIntroduced = document.querySelector('.show-numbers-introduced');

let arr = [];

addBtn.addEventListener('click', (event) => {
    arr.push(Number(input.value));
   
    document.querySelector('.show-numbers-introduced').textContent = arr.join(" / ");
 
    event.preventDefault();
});

resetBtn.addEventListener('click', () => {
    arr = [];
    document.querySelector('.show-numbers-introduced').textContent = '';
});

calculateBtn.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.result').style.display = 'block';

    numberOfFilterToAdd(arr);
});

function numberOfFilterToAdd(arr) {
    let highestToLowest1 = [];      // sort the pollution from highest to lowest
    let highestToLowest = [];
    for (let i = 0; i < arr.length; i++) {
        highestToLowest1[i] = arr[i];
        highestToLowest[i] = arr[i];
    }


    highestToLowest1 = highestToLowest1.sort((a, b) => b - a);
    highestToLowest = highestToLowest.sort((a, b) => b - a);      // sort the pollution from highest to lowest
    let polutionLevel = 0;
    let currentPollutionLevel;
    let filters = 0;
    let holder;
    let stop = false;
    

    for (let i = 0; i < highestToLowest.length; i++) {      // find the total polution level
        polutionLevel = polutionLevel + highestToLowest[i];
    }

    let target = polutionLevel / 2;

    do {   
        currentPollutionLevel = 0;

        highestToLowest[0] = highestToLowest[0] / 2;
        highestToLowest = highestToLowest.sort((a, b) => b - a);


        for (let i = 0; i < highestToLowest.length; i++) {      // find the total polution level
            currentPollutionLevel = currentPollutionLevel + highestToLowest[i];
        }

        filters++;
       
    } while (target < currentPollutionLevel);
   
    arr.toString();
    highestToLowest1.toString();
    highestToLowest.toString();
    
    firstArray.textContent = arr.join(" / ");
    sortedArray.textContent = highestToLowest1.join(" / ");
    pollutionLevelP.textContent = polutionLevel;
    newlyFactoryPopulation.textContent = highestToLowest.join(" / ")
    pollutionTargetP.textContent = target;
    currentPollutionLevelP.textContent = currentPollutionLevel;
    numberOfFiltersUsed.textContent = filters;
}