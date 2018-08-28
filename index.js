//Final version without Webhook




'use strict'

// Varialble declaration
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('529246807:AAHYmyp5CFAl5GZsCGxvmXxWpTs8XzuJdgE',{
    workers : 1,
    webhook : {
        url:'',
        port: 80,
        host:'',
    }
})


var hourDiff = 0
var minDiff = 0
var secDiff = 0
var timeRemaning = 0

var userNames = [] // for storing the @usernames
var flag //flag for receiving the @usernames only when a round is active

//for '/start' command
class StartController extends TelegramBaseController {
    start($) {
        $.sendMessage("You're signed up in Charlie. " )
        console.log($.message.text)
        console.log($._chatId)
        console.log($._userId)

    }

    get routes() {
        return {
            'startHandler': 'start'
        }
    }
}

tg.router
    .when(
        new TextCommand('/start', 'startHandler'),
        new StartController()
    )


//for '/round' command
class RoundController extends TelegramBaseController {
        round($) {

            var time_now = new Date();
            var current_hour = time_now.getHours();
            var current_min = time_now.getMinutes();
            var current_seconds = time_now.getSeconds();
            var time = time_now.getHours()+":"+time_now.getMinutes()+":"+time_now.getSeconds()
            var date = time_now.getFullYear()+"-"+(time_now.getMonth()+1)+"-"+time_now.getDate()
    
            if($._chatId == -318973224){// Will work in a specific group 
                
                
                if(current_hour >= 0 && current_hour < 2){//Notifying the users for the First round of the day
                    flag = 0
                    hourDiff = 1 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff// calculating the remaining time
                    $.sendMessage("Group Time is: " +date+" "+time+" "+"\n"+"Next Round Will Start in: "+timeRemaning+"\n"+"at: "+date+"  "+"02:00:00"+"\n"+"(Indian Standard Time)")
                    userNames = ['QuotesVitamin']
                }

                //Activating the first Round of the day.
                if(current_hour == 2 && current_hour < 3 && current_min >= 0 && current_seconds >= 0){
                    flag = 1 //changing the flag for accepting the @usernames when the round is active.
                    hourDiff = 2 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff// calculating the remaining time
                    $.sendMessage("🔵 Round is Active. 🔵"+"\n\n"+"You have "+timeRemaning+" time remaining.\nPlease drop your username to participate. "+"\n"+"E.g. - @username")
                    
                }


                //Pulishing the list of the participants for Like & Comment Session
                if(current_hour >= 3 && current_hour < 5 && current_min >= 0 && current_seconds >= 0){
                    flag = 2//For publishing the list in Like & Comment Session only
                    hourDiff = 4 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff// calculating the remaining time
                    $.sendMessage("🔴 Round ended. 🔴"+"\n\n"+"You have "+timeRemaning+" time remaining to Like & Comment(5+ words) on the participants latest Insta post.")
                    
                }

                

                if(current_hour >= 5 && current_hour < 8){//Notifying the users for the Second Round of the day
                    flag = 0
                    hourDiff = 7 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff
                    $.sendMessage("Group Time is: " +date+" "+time+" "+"\n"+"Next Round Will Start in: "+timeRemaning+"\n"+"at: "+date+"  "+"08:00:00"+"\n"+"(Indian Standard Time)")
                    userNames = ['QuotesVitamin']
                }

                //Activating the Second Round of the day
                if(current_hour == 8 && current_hour < 9 && current_min >= 0 && current_seconds >= 0){
                    flag = 1 //changing the flag for accepting the @usernames when the round is active.
                    hourDiff = 8 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff// calculating the remaining time
                    $.sendMessage("🔵 Round is Active. 🔵"+"\n\n"+"You have "+timeRemaning+" time remaining.\nPlease drop your username to participate. "+"\n"+"E.g. - @username")
                    
                }


                //Pulishing the list of the participants for Like & Comment Session
                if(current_hour >= 9 && current_hour < 11 && current_min >= 0 && current_seconds >= 0){
                    flag = 2//For publishing the list in Like & Comment Session only
                    hourDiff = 10 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff// calculating the remaining time
                    $.sendMessage("🔴 Round ended. 🔴"+"\n\n"+"You have "+timeRemaning+" time remaining to Like & Comment(5+ words) on the participants latest Insta post.")
                    
                }



                if(current_hour >= 11 && current_hour < 14){//Notifying the user for the Third Round of the Day
                    flag = 0
                    hourDiff = 13 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff
                    $.sendMessage("Group Time is: " +date+" "+time+" "+"\n"+"Next Round Will Start in: " +timeRemaning+"\n"+"at: "+date+"  "+"14:00:00"+"\n"+"(Indian Standard Time)")
                    userNames = ['QuotesVitamin']
                }

                //Activating the Third Round of the Day
                if(current_hour == 14 && current_hour < 15 && current_min >= 0 && current_seconds >= 0){
                    flag = 1 //changing the flag for accepting the @usernames when the round is active.
                    hourDiff = 14 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff// calculating the remaining time
                    $.sendMessage("🔵 Round is Active. 🔵"+"\n\n"+"You have "+timeRemaning+" time remaining.\nPlease drop your username to participate. "+"\n"+"E.g. - @username")
                    
            
                }



                //Pulishing the list of the participants for Like & Comment Session
                if(current_hour >= 15 && current_hour < 17 && current_min >= 0 && current_seconds >= 0){
                    flag = 2//For publishing the list in Like & Comment Session only
                    hourDiff = 16 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff// calculating the remaining time
                    $.sendMessage("🔴 Round ended. 🔴"+"\n\n"+"You have "+timeRemaning+" time remaining to Like & Comment(5+ words) on the participants latest Insta post.")
                    
                }



                if(current_hour >= 17 && current_hour < 20){//Notifying the users for the Fourth Round of the Day
                    flag = 0
                    hourDiff = 19 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff
                    $.sendMessage("Group Time is: "+date+" "+time+" "+"\n"+"Next Round Will Starts in: " +timeRemaning+"\n"+"at: "+date+"  "+"20:00:00"+"\n"+"(Indian Standard Time)")
                    userNames = ['QuotesVitamin']
                }

                //Activating the Fourth Round of the Day
                if(current_hour == 20 && current_hour < 21 && current_min >= 0 && current_seconds >= 0){
                    flag = 1 //changing the flag for accepting the @usernames when the round is active.
                    hourDiff = 20 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff// calculating the remaining time
                    $.sendMessage("🔵 Round is Active. 🔵"+"\n\n"+"You have "+timeRemaning+" time remaining.\nPlease drop your username to participate. "+"\n"+"E.g. - @username")
                    
                }



                //Pulishing the list of the participants for Like & Comment Session
                if(current_hour >= 21 && current_hour < 23 && current_min >= 0 && current_seconds >= 0){
                    flag = 2//For publishing the list in Like & Comment Session only
                    hourDiff = 22 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff// calculating the remaining time
                    $.sendMessage("🔴 Round ended. 🔴"+"\n\n"+"You have "+timeRemaning+" time remaining to Like & Comment(5+ words) on the participants latest Insta post.")
                    
                }



                if(current_hour >= 23 && current_hour < 24){
                    flag = 0
                    hourDiff = 25 - current_hour
                    minDiff = 59 - current_min
                    secDiff = 59 - current_seconds
                    timeRemaning = hourDiff+":"+minDiff+":"+secDiff
                    var newdate = time_now.getFullYear()+"/"+time_now.getMonth()+1+"/"+(time_now.getDate()+1)
                    $.sendMessage("Group Time is: "+date+" "+time+" "+"\n"+"Next Round Will Start in: " +timeRemaning+"\n"+"at: "+newdate+"  "+"02:00:00"+"\n"+"(Indian Standard Time)")
                    userNames = ['QuotesVitamin']
                }
            }
        }

        
    
        get routes() {
            return {
                'roundHandler': 'round'
            }
        }
    }

tg.router
        .when(
            new TextCommand('/round', 'roundHandler'),
            new RoundController()
        )

// for handling the @usernames

class OtherwiseController extends TelegramBaseController {
    start($) {
        //console.log(flag)
        if($._chatId == -318973224){
            //if($.message.text == '/round')
                //return
            
            if (flag == 1 && $.message.text.startsWith('@')) {
                var text = $.message.text.split('@')[1];
                userNames.push(text)
                $.sendMessage("Received "+$.message.text)
            }

            //console.log(userNames)

            if(flag == 2 && $.message.text == '/list'){
                tg.api.sendMessage($._userId,this._serializeList(userNames), { parse_mode: "HTML", disable_web_page_preview: "True" });
                        
            }
        }
    }

    get routes() {
        return {
            'OtherwiseHandler': 'start'
        }
    }
    _serializeList(todoList) {
        let serialized = '🔵  L I S T  🔵\n\n';
        todoList.forEach((curName, i) => {
            serialized += `${i+1} - ${'<a href="http://instagram.com/_u/'+curName+'">'+"@"+curName+'</a>'}\n\n`;
        });
        return serialized;
    }
}

tg.router
    .when(
        new TextCommand('', 'OtherwiseHandler'),
        new OtherwiseController()
    )