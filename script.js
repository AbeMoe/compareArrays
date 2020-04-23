let theFunk = function(){console.log('hi')};
let theJunk = function(){console.log('junk')};

let ar1 = [{'a':{'b':'b'}},'a',2,theFunk];
let ar2 = [{'a':'b'},'a',2,theJunk];
let ar3 = [{'a':{'b':'b'}},'a',2,theFunk];

function compareArrays(ar1,ar2)
{
	if(ar1.length != ar2.length) return false;
	
	for(let i=0;i<ar1.length;i++)
	{
		console.log(JSON.stringify(ar2[i]));
		if(JSON.stringify(ar1[i])!= JSON.stringify(ar2[i])) return false;
	}
	return true
}

