const startCount=function(){
    var count=10;
    document.getElementById("count").innerHTML=count;
    count--;
    return setTimeout(function(){
        document.getElementById("count").innerHTML=count;
        count--;
        return setTimeout(function(){
                document.getElementById("count").innerHTML=count;
                count--;
                return setTimeout(function(){
                    document.getElementById("count").innerHTML=count;
                    count--;
                    return setTimeout(function(){
                        document.getElementById("count").innerHTML=count;
                        count--;
                        return setTimeout(function(){
                            document.getElementById("count").innerHTML=count;
                            count--;
                            return setTimeout(function(){
                                document.getElementById("count").innerHTML=count;
                                count--;
                                return setTimeout(function(){
                                    document.getElementById("count").innerHTML=count;
                                    count--;
                                    return setTimeout(function(){
                                        document.getElementById("count").innerHTML=count;
                                        count--;
                                        return setTimeout(function(){
                                            document.getElementById("count").innerHTML=count;
                                            count--;
                                            return setTimeout(function(){
                                                document.getElementById("count").innerHTML="HAPPY INDEPENDENCE DAY"
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000);
    
}
    