window.onload = function()
{
    let mainTextArea = document.querySelector('#mainTextArea');

    function makeBigger()
    {
        mainTextArea.style.fontSize = '24pt';
    }

    function applyStyles(e)
    {
        if(e.target.checked){
            mainTextArea.classList.add('styled');
        }else{
            mainTextArea.classList.remove('styled');
        }
    }

    function snoopify()
    {
        mainTextArea.value = mainTextArea.value.toUpperCase().split('.').join('-izzle.');
    }

    document.querySelector('#bigger').onclick = makeBigger;
    document.querySelector('#applyStyles').onclick = applyStyles;
    document.querySelector('#snoopifier').onclick = snoopify;
}





// window.onload = function(){

// 	var text = document.querySelector('#text');

// 	function bigger(){
// 		text.style.fontSize = '24pt';
// 	}

// 	function styling(e){
// 		if (e.target.checked){
// 			text.classList.add('makeBigger');
// 		}
// 		else{
// 			text.classList.remove('makeBigger');
// 		}
// 	}

// 	function snoopify(){
// 		text.value = text.valueToUpperCase().split('.').join('-izzle.');
// 	}

// 	document.QuerySelector('#bigger').onclick = bigger;
// 	document.QuerySelector('#bling').onclick = styling;
// 	document.QuerySelector('#snoopify').onclick = snoopify;


// }
