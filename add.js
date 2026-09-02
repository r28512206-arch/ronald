<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale">
		<title>javascript</title>
		<style type="text/css">
			#result
			{
				color: maroon;
			}
			#subtraction
			{
				color: blue;
			}
			#multiplication
			{
				color: purple;
			}
			#division
			{
				color: green;
			}
			#modulardivision
			{
				color: lightpink;
			}
			div
			{
				text-align: center;
				padding-bottom: 10px;
			}
			h3,h2
			{
				text-align: center;
				color: coral;
			}
			label
			{
				color: cornflowerblue;
			}
			.btn
            {
            	color: white;
            	background-color: blue;
			}
		</style>
		<script type="text/javascript">

			function sum()
			{
				//alert("hi");
				var number_1 =  document.getElementById("number_1").value;
				//alert(number_1);
				var number_2 = document.getElementById("number_2").value;
				//alert(number_2);
				sum = parseInt(number_1) + parseInt(number_2);
				//alert(sum);
				document.getElementById("result").innerHTML = "The Sum of two number is " + sum;
				
			}

			function minus()
			{
				var number_1 =  document.getElementById("number_1").value;
				//alert(number_1);
				var number_2 = document.getElementById("number_2").value;
				//alert(number_2);
				minus = parseInt(number_1) - parseInt(number_2);
				//alert(minus);
				document.getElementById("subtraction").innerHTML = "The subtraction of two number is " + minus;
			}
			function multiple1()
			{
				//alert("hi");
			    var number_1 =  document.getElementById("number_1").value;
				//alert(number_1);
				var number_2 = document.getElementById("number_2").value;
				//alert(number_2);
                multiple = parseInt(number_1) * parseInt(number_2);
                //alert(multiple);
				document.getElementById("multiplication").innerHTML = "The multiplication of two number is " + multiple;
			}
			function divide()
			{
              var number_1 = document.getElementById("number_1").value;
              //alert(number_1);
              var number_2 = document.getElementById("number_2").value;
              //alert(number_2);
              divide = parseInt(number_1) / parseInt(number_2);
              //alert(divide);
              document.getElementById("division").innerHTML = "The division of two number is " + divide;
              return false;

			}
			function modulo()
			{
				var number_1 = document.getElementById("number_1").value;
				var number_2 = document.getElementById("number_2").value;
				modulo = parseInt(number_1) % parseInt(number_2);
				document.getElementById("modulardivision").innerHTML = "The modulo division of two number is " + modulo;
			}
			function hi()
			{
				//alert("Welcome To Don Bosco");
				document.getElementById("welcome").innerHTML="Welcome To Don Bosco";
				var get_add = document.getElementById("add").value;
				var add_upper = get_add.toUpperCase();
				document.getElementById("add").value = add_upper;
			    var get_sub = document.getElementById("sub").value;
			    var sub_upper = get_sub.toUpperCase();
			    document.getElementById("sub").value = sub_upper;
                var get_mul = document.getElementById("mul").value;
                var mul_upper = get_mul.toUpperCase();
                document.getElementById("mul").value = mul_upper;
                var get_divide = document.getElementById("divide").value;
                var divide_upper = get_divide.toUpperCase();
                document.getElementById("divide").value = divide_upper;
                var get_modulo = document.getElementById("modulo").value;
                var modulo_upper = get_modulo.toUpperCase();
                document.getElementById("modulo").value = modulo_upper; 
			}
		</script>
	</head>
	<body onload="hi();" >
		<h2 id="welcome"></h2>
		<h3>Arithmetic Operators</h3>
		<div>
			<label>Enter first number</label>
		</div>
		<div>
			<input type="text" name="number_1" id="number_1">
		</div>
		<div>
			<label>Enter second number</label>
		</div>
		<div>
			<input type="text" name="number_2" id="number_2">
		</div>
		<div>
		</div>
		<div>
			<input type="button" class="btn" id="add" value="Add" onclick="sum();">
		</div>
		<div>
			<input type="button" class="btn" id="sub" value="sub" onclick="minus();">
		</div>
		<div>
		<input type="button" class="btn" id="mul" value="mul" onclick="multiple1();">
	</div>
	<div>
		<input type="button" class="btn" id="divide" value="divide" onclick="divide();">
	</div>
	<div>
		<input type="button" class="btn" id="modulo" value="modulo" onclick="modulo();">
	</div>
		<div id="result"></div>
		<div id="subtraction"></div>
		<div id="multiplication"></div>
		<div id="division"></div>
		<div id="modulardivision"></div>
	</body>
</html>