var reverse = false;


//If the college entered or selected in the CollegeName field matches one in the list, then populate
//the hidden CollegeId field with the id. This will, in turn, re-populate the list of courses for the selected college.

function selectCollege() {

		// detect Internet Explorer 6-11
		var isIE = /*@cc_on!@*/false || !!document.documentMode;
						
		if (isIE) {			
			IEList(document.getElementById("collegeName"));
		}	
		
		var i, item, collegeName, collegeList , found, pos
		collegeName = document.getElementById("collegeName").value;
		collegeList = document.getElementById("colleges-list");
		collegeId = document.getElementById("collegeId");
		found = false

		
		for (i = 0; i < collegeList.options.length; i++) {
			item = collegeList.options[i];
			if (isIE) {
				pos = item.value.indexOf('|');				
			} else {
				pos = -1;
			}	    

			if (item.value.slice(pos + 1).toUpperCase() == collegeName.toUpperCase()) {
				collegeId.value = item.id;
				collegeId.onchange();
				found = true;
				document.getElementById('courseDrop').disabled = false;
				$('#courseDrop').focus();
				break;
			}
		}

		if (found == false) {
			collegeId.value = "";
			collegeId.onchange();
			document.getElementById('courseDrop').disabled = true;
		}  		
}

function getCourses(college) {
	$.getJSON('/lsf/admin/cosa/courses', {
		collegeId : $(college).val()
	}, function(data) {
		var html = '<option value="">Please Select...</option>';
		var len = data.length;
		for ( var i = 0; i < len; i++) {
			html += '<option value="' + data[i].id + '">'
				+ data[i].courseType.name + '</option>';
		}
		html += '</option>';

		$('#courseDrop').html(html);
		clearEnrolmentYears();
	});
	

}

function clearEnrolmentYears(){
	var html = '<option value="">Please Select...</option>';
	$('#enrolmentYearDrop').html(html);
	document.getElementById('enrolmentYearDrop').disabled = true;
}


function populateEnrolmentYears(course){
	document.getElementById('enrolmentYearDrop').disabled = false;
	getEnrolmentYears(course);
	
}

function populateAllEnrolmentAndYears(course){
	document.getElementById('enrolmentYearDrop').disabled = false;
	document.getElementById('courseYearDrop').disabled = false;
	getCourseYears(course);
	getAllEnrolmentYears(course);
	

}
function getCourseYears(course) {
	$.getJSON('/lsf/admin/cosa/courseyears', {
		courseId : $(course).val()
	}, function(data) {
		var html = '<option value="">Please Select...</option>';
		var len = data.length;
		for ( var i = 0; i < len; i++) {
			html += '<option value="' + data[i].id + '">'
				+ data[i].year + '</option>';
		}
		html += '</option>';

		$('#courseYearDrop').html(html);
		
	});
}

function getEnrolmentYears(course) {
	$.getJSON('/lsf/admin/cosa/enrolmentyears', {
		courseId : $(course).val()
	}, function(data) {
		var html = '<option value="">Please Select...</option>';
		var len = data.length;
		for ( var i = 0; i < len; i++) {
			html += '<option value="' + data[i].id + '">'
				+ data[i].name + '</option>';
		}
		html += '</option>';
		
		$('#enrolmentYearDrop').html(html);
		
		
	});
}

function getAllEnrolmentYears(course) {
	$.getJSON('/lsf/admin/cosa/allenrolmentyears', {
		courseId : $(course).val()
	}, function(data) {
		var html = '<option value="">Please Select...</option>';
		var len = data.length;
		for ( var i = 0; i < len; i++) {
			html += '<option value="' + data[i].id + '">'
				+ data[i].name + '</option>';
		}
		html += '</option>';
		
		$('#enrolmentYearDrop').html(html);
		
		
	});
}

function openTab(evt, tabName) {
    var i, tabcontent, selectedTabs;
    
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Un-select the previously selected tab header
    selectedTabs = document.getElementsByClassName("selected-tab");
    for (i = 0; i < selectedTabs.length; i++) {
    	selectedTabs[i].className = selectedTabs[i].className.replace(" active", "");
    	selectedTabs[i].classList.remove("selected-tab");    	
    }
    
    // Un-hide the tab content and select the tab header
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("selected-tab");
}
function openTabNote(evt, tabName) {
    var i, tabcontent, selectedTabs;
    
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontentNote");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Un-select the previously selected tab header
    selectedTabs = document.getElementsByClassName("selected-tabNote");
    for (i = 0; i < selectedTabs.length; i++) {
    	selectedTabs[i].className = selectedTabs[i].className.replace(" active", "");
    	selectedTabs[i].classList.remove("selected-tabNote");    	
    }
    
    // Un-hide the tab content and select the tab header
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("selected-tabNote");
}

function sortTable(rowNum,tableName) {
  var table, rows, switching, i, x, y, shouldSwitch;  
  table = document.getElementById(tableName);
  switching = true;

  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[rowNum];
      y = rows[i + 1].getElementsByTagName("TD")[rowNum];
      //check if the two rows should switch place:
      if(reverse){
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() ) {
              //if so, mark as a switch and break the loop:
              shouldSwitch= true;
              break;
            }
       }
      else{
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() ) {
              //if so, mark as a switch and break the loop:
              shouldSwitch= true;
              break;
            }
         }

    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }

  }
  reverse = !reverse
}

//For IE, enabled the 'contains' search on document type. This is default behaviour for Chrome and Firefox
function selectDocumentType() {

		// detect Internet Explorer 6-11
		var isIE = /*@cc_on!@*/false || !!document.documentMode;
		
		if (isIE) {			
			IEList(document.getElementById("documentTypeName"));
		}			
}

//For IE, enabled the 'contains' search on document type. This is default behaviour for Chrome and Firefox
function selectNoteType() {

		// detect Internet Explorer 6-11
		var isIE = /*@cc_on!@*/false || !!document.documentMode;
		
		if (isIE) {
			IEList(document.getElementById("noteTypeName"));
		}			
}

//For IE, update the datalist selections if the value has been changed
function IEList(that) {
	if (that.value != that.lastValue) {
		updateInput(that);
		updateList(that);	
	}
	
}

//For IE, do the 'contains' matching for the datalist as IE default behaviour
//is just 'starts with' matching.
function updateList(that) {
 if (!that) {
     return;
 }
 var lastValue = that.lastValue,
     value = that.value,
     array = [],
     pos = value.indexOf('|'),
     start = that.selectionStart,
     end = that.selectionEnd,
     idpos,
     options;

 if (that.options) {
     options = that.options;
 } else {
     options = Object.keys(that.list.options).map(function (option) {
         return that.list.options[option].value + '@' + that.list.options[option].id ;
     });
     that.options = options;
 }

 if (lastValue !== value) {
     that.list.innerHTML = options.filter(function (a) {
         return ~a.toLowerCase().indexOf(value.toLowerCase());
     }).map(function (a) {
     	idpos = a.indexOf('@');   
     	return '<option id="' + a.slice(idpos + 1) + '" value="' + value + '|' + a.slice(0, idpos) + '">' + a.slice(0, idpos) + '</option>';        	
     }).join();
     updateInput(that);
     that.lastValue = value;
 }
}

function updateInput(that) {
 if (!that) {
     return;
 }
 var value = that.value,
     pos = value.indexOf('|'),
     start = that.selectionStart,
     end = that.selectionEnd;

 if (~pos) {
     value = value.slice(pos + 1);
 }
 that.value = value;
 that.setSelectionRange(start, end);
}

// Hide update message after 3 seconds
function hideMessage() { 
	var updateMessage = document.getElementById("updateMessage");
	if (updateMessage != null) {
		setTimeout( function(){updateMessage.style.display = "none";}, 3000);		
	}
}

// Get Eligibility Reasons for selected Eligibility Status
function getEligibilityReasons(status) {
	$.getJSON('/lsf/assess/eligibility/reasons', {
		eligibilityStatusId : $(status).val(),
	}, function(data) {
		var html = '<option value="">Please Select...</option>';
		var len = data.length;
		for ( var i = 0; i < len; i++) {
			html += '<option value="' + data[i].id + '">'
				+ data[i].name + '</option>';
		}
		html += '</option>';

		$('#eligibilityReasonDrop').html(html);
	});
}

// Hide/Show fields based on a Yes radio button being clicked
function yesClicked() {
    showYes = document.getElementsByClassName("ifYes");
    showNo = document.getElementsByClassName("ifNo");
    
    for (i = 0; i < showYes.length; i++) {
        showYes[i].style.display = "block";
    }
    for (i = 0; i < showNo.length; i++) {
        showNo[i].style.display = "none";
        showNo[i].getElementsByTagName('input')[0].value = null;       
    }    
}

//Hide/Show fields based on a No radio button being clicked
function noClicked() {
    showYes = document.getElementsByClassName("ifYes");
    showNo = document.getElementsByClassName("ifNo");
    
    for (i = 0; i < showYes.length; i++) {
        showYes[i].style.display = "none";
        showYes[i].getElementsByTagName('input')[0].value = null; 
    }
    for (i = 0; i < showNo.length; i++) {
        showNo[i].style.display = "block";
    }    
}

function filterTable(filterText, tableName) {
	  var input, filter, table, tr, td, i;
	  input = document.getElementById(filterText);
	  filter = input.value.toUpperCase();
	  table = document.getElementById(tableName);
	  tr = table.getElementsByTagName("tr");
	  // start from i=1 which is first row of data. i=0 is the header row.
	  for (i = 1; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[0];
	    if (td) {
	      if (td.innerText.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
}



function holdReleaseAllConfirmed(holdValue) {
	table = document.getElementsByClassName("paymentListTableConfirmed");
	rows = table;
	var e = window.event;

	for (i = 0; i < table.length; i++) {
		holdFlag = document.getElementById("confirmedPayments" + i + ".held1");
		if (holdFlag) {
			holdFlag.checked = holdValue;
		}
		
	}
	
}


function holdReleaseAllPending(holdValue) {
	table = document.getElementsByClassName("paymentListTableEnroled");
	rows = table.rows;

	for (i = 0; i < table.length; i++) {
		holdFlag = document.getElementById("enroledPayments" + i + ".held1");
		if (holdFlag) {
			holdFlag.checked = holdValue;
		}

	}
}

function holdReleaseAllCapped(holdValue) {
	table = document.getElementsByClassName("paymentListTableCapped");
	rows = table.rows;

	for (i = 0; i < table.length; i++) {
		holdFlag = document.getElementById("cappedPayments" + i + ".held1");
		if (holdFlag) {
			holdFlag.checked = holdValue;
		}

	}
}

function checkUnknown() {
	checkedUnknowns = document.getElementsByClassName("optionsUnknown");
	for (i = 0; i < checkedUnknowns.length; i++) {
		if (!document.getElementById("optionCheckedYes[" + i + "]").checked
			&& !document.getElementById("optionCheckedNo[" + i + "]").checked) {
			checkedUnknowns[i].checked = true;
		}
	}
}

function plaSelected() {
	if (document.getElementById("pla").checked)  {
        $('#plaContentHolder').show();
    }else{
        $('#plaContentHolder').hide();
    }
}

function populatePaymentTypes(enrolment){
	document.getElementById('paymenttypes').disabled = false;
	getPaymentTypes(enrolment);
}

function getPaymentTypes(enrolment) {
	$.getJSON('/lsf/payment/paymentTypes', {
		enrolmentId : $(enrolment).val()
	}, function(data) {
		var html = '<option value="">Please Select...</option>';
		var len = data.length;
		for ( var i = 0; i < len; i++) {
			html += '<option value="' + data[i].id + '">'
				+ data[i].name + '</option>';
		}
		html += '</option>';

		$('#paymenttypes').html(html);
		
	});
}

function checkFileSize() {

	var submit = $('#action');
	var errorMessage = $('#fileSizeErrorMessage');  
	var errorGroup = $('#fileSizeError');  
	var filenameGroup = $('#filenameGroup');

	switch(document.getElementById("file").files.length) {
		// no file selected
		case 0:
			submit.removeAttr("disabled"); 
		    filenameGroup.removeClass("error");
		    errorGroup.attr("hidden",true);
		    break;

		// 1 file selected - validate size and type
		case 1:
			var size = parseFloat($('#file')[0].files[0].size).toFixed(2);
			var extension = $('#file')[0].value.split('.').pop();
			var maxvalue = maxFileSize * 1024 * 1024;
			var minvalue = minFileSize * 1024;

			// Disable and show message if file size is too large
		  	if(size >= maxvalue){
			  	submit.attr("disabled", "disabled");
		    	filenameGroup.addClass("error");
		    	errorGroup.attr("hidden",false); 
		    	errorMessage.html('The selected file must be smaller than ' + maxFileSize + 'Mb');
		  	}else if(size < minvalue){
				  	submit.attr("disabled", "disabled");
			    	filenameGroup.addClass("error");
			    	errorGroup.attr("hidden",false); 
			    	errorMessage.html('The selected file must be larger than ' + minFileSize + 'Kb');		    	
		  	}else if(!extensionList.includes(extension.toLowerCase())){
		  		submit.attr("disabled", "disabled");
		    	filenameGroup.addClass("error");
				errorGroup.attr("hidden",false); 
				errorMessage.html('The selected file must be one of the following types: ' + extensionList);
		  	}else{
				submit.removeAttr("disabled"); 
		    	filenameGroup.removeClass("error");
		    	errorGroup.attr("hidden",true); 
		  	}
		  	break;

		// more than 1 file selected - error  
		default:
			submit.attr("disabled", "disabled");
	    	filenameGroup.addClass("error");
	    	errorGroup.attr("hidden",false); 
	    	errorMessage.html('Please only select 1 file at a time');	  	
	}
}		