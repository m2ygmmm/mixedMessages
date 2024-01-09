/* Output a random event that will happen to you during the week,
The random event will have a random day, random time and random activity 
e.g., You will meet a famous celebrity at 18:00 on sunday*/

//STEP ONE - Create an object containing arrays of days of the week and random events
//STEP TWO - Create a function that will return a random time of day using the 24h clock
//STEP THREE - Create a function that takes two arguments (Object, random time of day) an
//by generating a random number to use as the index within the objects array and join it together with the random
//time of day and and random time.
//STEP FOUR - Output the final random event

const randomItems = {
    events: ['You will meet Ronaldo around ', 'A meteor will strike at approximatley ', 'You will win a million pounds after ', 'A cat will be waiting for you in the park around '],
    days: ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

const randomTimeOfDay = () => {
    let hour = Math.floor(Math.random() * 25)
    if(hour.toString().length === 1){
        hour = '0' + hour + ':00' + 'AM'
    }else{
        hour = hour + ':00' + 'PM'

    }
    return hour
}

const finalStatement = (randomTimeOfDay, randomItems) => {
    let randomDayIndex = Math.floor(Math.random() * randomItems.days.length)
    let randomEventIndex = Math.floor(Math.random() * randomItems.events.length)
    return randomTimeOfDay + " " + randomItems.days[randomDayIndex]
}

console.log(finalStatement(randomTimeOfDay(), randomItems))
