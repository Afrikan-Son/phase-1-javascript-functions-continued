function saturdayFun(){
    return `This Saturday, I want to ...!`;
}
saturdayFun();

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");





const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork();





function wrapAdjective(wrapper="*"){
    return function(msg="special") {
        return `You are ${wrapper}${msg}${wrapper}!`
    }
}
console.log(wrapAdjective());
console.log(wrapAdjective("||"))
