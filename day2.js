<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=>, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            text-align: center;
        }
        h2,input,button{
            margin:10px;
            padding:10px;
        }
    </style>
</head>
<body>
    <h2>guess program</h2>
    <input type="number"placeholder="enter the number"id="num">
    <button onclick ="playgame()">guess the number</button>
    <p id="feedback"></p>
    <p id="count"></p>
    <script>
        let target=Math.floor(Math.random()*10)+1;
        console.log(target);
        let count=0;
        function playgame(){
            let guess=parseInt(document.getElementById("num").value);
            count++;
            if(guess<target){
                document.getElementById("feedback").innerText="too low";
            }
            else if(guess>target){
                document.getElementById("feedback").innerText="too high";
            }
            else{
                document.getElementById("feedback").innerText="Your guess is correct";
                document.getElementById("feedback").innerText="Your attempts"+count;
          }

        }

    </script>
</body>
</html>
