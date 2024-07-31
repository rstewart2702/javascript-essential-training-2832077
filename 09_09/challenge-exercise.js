// JavaScript code​​​​​​‌​‌‌​​‌‌​​​​​​​​‌‌‌​‌​​‌​ below
// Change these values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false
const showHints = false

const inputs = [
    { id: "name-input", value: "Adventure Backpack" },
    { id: "description-input", value: "A durable backpack for outdoor adventures" },
    { id: "color-input", value: "Green" },
    { id: "volume-input", value: "35L" },
];

/*
  N.B. MR-H's solution was to find the form objects, in general,
  and iterate through them, using similar querySelector calls to
  ultimately do the same thing.

  His approach was more general, yet I suppose might be slightly
  more expensive to execute, because he didn't depend on
  particular names.

  Still, the string-interpolation to derive the correct element
  names, etc, was necessary.

  I depended on the unique id's of the form elements, whereas
  he passed 'form' to the querySelectorAll message sent to document.
  Sigh.
*/
function formListenerSetup(n,d) {
    let frmElt = d.getElementById(`update-${n}`)
    let spanElt = d.getElementById(`${n}`).querySelector('.value')
    let fieldValObj = frmElt.elements.namedItem(`${n}-input`)
    frmElt.addEventListener(
	"submit",
	(event) => {
	    // This is absolutely necessary.
	    // Also, when creating instances of Event and "dispatching"
	    // them, it is important to pass in
	    //   { cancelable: true }
	    // as a parameter in Event instantiation/creation,
	    // otherwise, the browser will not prevent the default
	    // behavior.
	    event.preventDefault();
	    // I have access to the span element, but
	    // we must also know what to put into the span's textContent.
	    //
	    // let providedValue = inputs[`${n}-input`]
	    // let providedValue = fieldValObj.value		
            spanElt.textContent = fieldValObj.value;
	}
    );
}

function updatePage(document) {
    // Your code goes here.
    // Here is a list of string fragments used to enumerate
    // the form parts which need to be manipulated:
    let formNamesFragments = [
	'name',
	'description',
	'color',
	'volume'
    ];
    //
    // Therefore, for each of the fragment names,
    // we set up an event listener function
    // that is custom-derived for each form item,
    // according to its individual name:
    formNamesFragments.forEach(
	(n) => { formListenerSetup(n,document) }
    );
    
}

updatePage(document);

/*
  What I did not know how to do is "manually submit"
  form-submit events, which is what their test-harness obviously
  does!

  But this did pass the test, i.e., the above two functions,
    updatePage
  and its "helper,"
    formListenerSetup
  enabled me to pass their test-driver.

  I tried "manually" executing event submission from the console
  with sequences like:
    let frmElt = document.getElementById('update-name');
    let spanElt = document.getElementById('name').querySelector('.value');
    let fieldValObj = frmElt.elements.namedItem('name-input');
    fieldValObj.value = "New Adventure Backpack";
    myEvent = new Event("submit",{cancelable: true});
    // THIS DOESN'T HAVE ANY EFFECT, NOT EVEN AN ERROR!  BUT THE cancelable PROPERTY IS READ-ONLY...
    // myEvent.cancelable = true;
    //
    // This "manually" triggers the event:
    frmElt . dispatchEvent(myEvent);

  Firefox just reloaded the page and did not show anything
  changed in the form, until I specified that the Event instance
  is cancelable by passing in the appropriate option object with
  field value 'cancelable' set to true.
  

*/
