const MS_PER_DAY = 86400000

setInterval(()=>{
    const date_input = document.getElementById("date").value

    if (date_input){
        const date = new Date(date_input+", 23:59:59")
        const countdown = new Countdown(date-MS_PER_DAY)
        const timer = document.getElementsByTagName("h1")

        if(new Date() - date < 0){
            timer[0].innerHTML = countdown.getDiferenceInDays()
            timer[1].innerHTML = countdown.getDiferenceInHours()
            timer[2].innerHTML = countdown.getDiferenceInMinutes()
            timer[3].innerHTML = countdown.getDiferenceInSeconds()
            for (const element of timer){
                if(element.innerHTML < 0){
                    timer[0].innerHTML = "D"
                    timer[1].innerHTML = "O"
                    timer[2].innerHTML = "N"
                    timer[3].innerHTML = "E"
                }
            }
        }
        else{
            timer[0].innerHTML = "D"
            timer[1].innerHTML = "O"
            timer[2].innerHTML = "N"
            timer[3].innerHTML = "E"
        }
    }
},1000)

class Countdown{
    constructor(date){
        self.date = new Date(date)
        self.now = new Date()
    }
    getDiferenceInDays(){
        return self.date.getDate()-self.now.getDate()
    }
    getDiferenceInHours(){
        return self.date.getHours()-self.now.getHours()
    }
    getDiferenceInMinutes(){
        return self.date.getMinutes()-self.now.getMinutes()
    }
    getDiferenceInSeconds(){
        return self.date.getSeconds()-self.now.getSeconds()
    }
}