const num_1 = 4;
// output string "004"

const num_2 = 35;
// output string "035"

const num_3 = 243;
// output string "243"



function zerofill(input)
{
	let inputZerofile = input.toString();

	if(inputZerofile.length == 1) 
	{
		console.log("00" + inputZerofile);
	}
	else if(inputZerofile.length == 2)
	{
		console.log("0" + inputZerofile);
	}
	else
	{
		console.log(inputZerofile);
	}
}

zerofill(num_1);
zerofill(num_2);
zerofill(num_3);


const num_4 = 2;
// output string 0000000002


function zerofill2(input, totalLength)
{
	let inputZerofile = input.toString();

	while(inputZerofile.length < totalLength)
	{
		inputZerofile = "0" + inputZerofile;
	}
	return inputZerofile;
}

const output = zerofill2(num_4, 10);
console.log(output);


console.log(num_4.toString().padStart(10, "0"));

