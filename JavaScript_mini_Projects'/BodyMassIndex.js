<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Check Fever</title>

  <style>
    body{
      background-color: black;
    }
    .container{
      width: 50%;
  
      margin: auto;
      border: 2px solid black;
      padding: 10px;
      position: absolute;
      
      top: 35%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: aquamarine;
      
    }
    label{
      margin-right: 10px;
      width: 30%;
      display: inline-block;
      font-weight: bolder;
      font-size: 20px;
      /* border: 2px solid black; */
    }
    input{
      margin-left: 10px;
      padding: 6px;
      border: 2px solid black;

    }
    #result{
      color: rgb(37, 19, 19);
      font-size: 23px;
      font-weight: 700;
    }
    h1{
      color: white;
      text-align: center;
      top: 50px;
     
    }
    #distance, #time{
      width: 40%;
      margin: auto;
      
    }
    #btn{
      padding: 6px;
      width: 30%;
      margin: auto;
      border: none;
      font-size: 18px;
      font-weight: 700;
      border-bottom: 3px solid red;
     
    }
  </style>
</head>
<body>

  <h1>Calculte the speed you need to drive</h1>
  <div class="container">
    <label for="speed">Enter Kilo Meter:</label>
    <input id="distance" type="number" class="distance">
    <br>
    <br>


<!-- time -->
<label for="time">For how long can you drive Drive:</label>
 <input type="number" id="time" class="time">

 <p id="result"></p>

 <button id="btn" onclick="calculate()">Calculate</button>

  </div>




  <script>

   function calculate(){
    let distance = document.getElementById('distance').value
    let myTime = document.getElementById('time').value

    let total = distance / myTime

    document.getElementById('result').innerHTML = `The Total speed to drive is ${total}`
    return total

   }

  </script>
  
</body>
</html>
