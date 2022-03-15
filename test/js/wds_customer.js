// JavaScript Document
$(window).bind('beforeunload', function() {
	$('#step1').trigger("reset");
    return "是否離開此頁面?";
});

(function($)
{
    jQuery.fn.setfocus = function()
    {
        return this.each(function()
        {
            var dom = this;
            setTimeout(function()
            {
                try { dom.focus(); } catch (e) { } 
            }, 0);
        });
    };
	
})(jQuery);

var sum = 0, old_pou_sum = 0, old_front_sum = 0, old_foli_sum = 0, old_shao_sum = 0, old_zen_sum = 0, old_others_sum = 0;
//點擊同上次報名按鈕時 跳出的alert次數
var a_num = 0;

function alert_show(msg){
	$("#alert_msg").html(msg);
	$("#alert_view").modal("show");
}

/*增加次數*/
function apply_getval() {
	
	if($("input[name='apply_times[]']:checkbox:checked").length == 0){
		//alert("請先點選報名場次");
		alert_show("請先點選報名場次");
	}

	foli_getval("times");
	front_getval("times");
	shao_getval("times");
	zen_getval("times");
	others_add("times");
}
/*增加次數*/

function zen_getval(sel) {
	sum = sum - old_zen_sum;
	//alert(sel.value);
	if(sel != 'times'){
		if(sel.value == 0){
			$('.item13-1').collapse('hide');
			$('.item13-2').collapse('hide');
			$('.item13-3').collapse('hide');
		}
		if(sel.value == 1){
			$('.item13-1').collapse('show');
			$('.item13-2').collapse('hide');
			$('.item13-3').collapse('hide');
		}
		if(sel.value == 2){
			$('.item13-1').collapse('show');
			$('.item13-2').collapse('show');
			$('.item13-3').collapse('hide');
		}
		if(sel.value == 3){
			$('.item13-1').collapse('show');
			$('.item13-2').collapse('show');
			$('.item13-3').collapse('show');
		}
	}

	var j = $('#zen_quantity :selected').text();

	/*增加次數*/ 
	var t = $("input:checkbox.zongyuan:checked").length;//1;
	
	$('#zen_t_num').text(j);
	$('#zen_times').text(t);
	

	var zen_sum = j * 1500 * t; //增加t
	$('#zen_total').html(zen_sum);
	$('#zen_sum').val(zen_sum);
	sum += zen_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_zen_sum = zen_sum;
}

function shao_getval(sel) {
	sum = sum - old_shao_sum;
	//alert(sel.value);
	if(sel != 'times'){
		
		if($("input[name='apply_times[]']:checkbox:checked").length == 0 && a_num == 0){
			//alert("請先點選報名場次");
			alert_show("請先點選報名場次");
		}

		var max_fields = sel.value; //maximum input boxes allowed
		var str = '';
		for(x=0;x<max_fields;x++){
			str = str + '<div class="col-md-2"><div class="input-group"><input type="text" name="shao_lives[]" id="shao_lives" maxlength="4" class="form-control" required></div><!-- /input-group --></div>';
		}

		$("#item12-1").html(str); //add input box
	}

	var i = 0;
	var j = $('#shao_quantity :selected').text();

	/*增加次數*/ 
	var t = $("input[name='apply_times[]']:checkbox:checked").length;
	
	$('#shao_t_num').text(j);
	$('#shao_times').text(t);
	

	var shao_sum = j * 200 * t; //增加t
	$('#shao_total').html(shao_sum);
	$('#shao_sum').val(shao_sum);
	sum += shao_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_shao_sum = shao_sum;
}

function pou_getval(sel) {//普利十方超薦小計：
	sum = sum - old_pou_sum;	
	if(sum < 0) {sum == 0;}	
	//alert(sel.value);
	if(sel.value == 0){
		$('.item14-1').collapse('hide');
		$('.item14-2').collapse('hide');
		$('.item14-3').collapse('hide');
	}
	if(sel.value == 1){
		$('.item14-1').collapse('show');
		$('.item14-2').collapse('hide');
		$('.item14-3').collapse('hide');
	}
	if(sel.value == 2){
		$('.item14-1').collapse('show');
		$('.item14-2').collapse('show');
		$('.item14-3').collapse('hide');
	}
	if(sel.value == 3){
		$('.item14-1').collapse('show');
		$('.item14-2').collapse('show');
		$('.item14-3').collapse('show');
	}
	
	var pou_arr = [];
	var i = 0;
	var j = $('#pou_quantity :selected').text();	
			
	var pou_sum = j * 30000;
	$('#pou_total').html(pou_sum);
	$('#pou_sum').val(pou_sum);
	sum += pou_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_pou_sum = pou_sum;
}

function front_getval(sel) {//佛前超薦超薦小計：

	sum = sum - old_front_sum;	
	if(sum < 0) {sum == 0;}		
	//alert(sel.value);
	if(sel != 'times'){ //增加判斷透過次數近來function

		if($("input[name='apply_times[]']:checkbox:checked").length == 0 && a_num == 0){
			//alert("請先點選報名場次");
			alert_show("請先點選報名場次");
		}

		if(sel.value == 0){
			$('.item15-1').collapse('hide');
			$('.item15-2').collapse('hide');
			$('.item15-3').collapse('hide');
		}
		if(sel.value == 1){
			$('.item15-1').collapse('show');
			$('.item15-2').collapse('hide');
			$('.item15-3').collapse('hide');
		}
		if(sel.value == 2){
			$('.item15-1').collapse('show');
			$('.item15-2').collapse('show');
			$('.item15-3').collapse('hide');
		}
		if(sel.value == 3){
			$('.item15-1').collapse('show');
			$('.item15-2').collapse('show');
			$('.item15-3').collapse('show');
		}	
	}
	var i = 0;
	var j = $('#front_quantity :selected').text();	
	
	/*增加次數*/ 
	var t = $("input[name='apply_times[]']:checkbox:checked").length;
	
	$('#front_t_num').text(j);
	$('#front_times').text(t);
	
	
	var front_sum = j * 10000 * t; //增加t
	$('#front_total').html(front_sum);
	$('#front_sum').val(front_sum);
	sum += front_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_front_sum = front_sum;
}

function foli_getval(sel) {//佛力超薦小計：

	sum = sum - old_foli_sum;	
	if(sum < 0) {sum == 0;}			
	//alert(sel.value);
	/*if(sel.value == 0){
		$('.item11-1').collapse('hide');
		$('.item11-2').collapse('hide');
		$('.item11-3').collapse('hide');
	}
	if(sel.value == 1){
		$('.item11-1').collapse('show');
		$('.item11-2').collapse('hide');
		$('.item11-3').collapse('hide');
	}
	if(sel.value == 2){
		$('.item11-1').collapse('show');
		$('.item11-2').collapse('show');
		$('.item11-3').collapse('hide');
	}
	if(sel.value == 3){
		$('.item11-1').collapse('show');
		$('.item11-2').collapse('show');
		$('.item11-3').collapse('show');
	}*/
	
	if(sel != 'times'){ //增加判斷透過次數近來function

		if($("input[name='apply_times[]']:checkbox:checked").length == 0 && a_num == 0){
			//alert("請先點選報名場次");
			alert_show("請先點選報名場次");
		}

		var i = 0;
		for(i=0;i<=10;i++){
			if(i <= sel.value){
				$('.item11-' + i.toString()).collapse('show');
			}
			else{
				$('.item11-' + i.toString()).collapse('hide');
			}
		}
	}
	i = 0;
	var j = $('#foli_quantity :selected').text();	

	/*增加次數*/ 
	//var t = $('#foli_times :selected').val();
	var t = $("input[name='apply_times[]']:checkbox:checked").length;
	
	$('#foli_t_num').text(j);
	$('#foli_times').text(t);
	

	var foli_sum = j * 1500 * t; //增加t
	$('#foli_total').html(foli_sum);
	$('#foli_sum').val(foli_sum);
	sum += foli_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_foli_sum = foli_sum;
}
		
function pou_add(){//普利十方超薦小計：			
	var pou_arr = [];
	var i = 0,j = 0;
			
	sum = sum - old_pou_sum;
			
	$("input[id='pou_pass']").each(function(index) {  
		pou_arr.push($(this).val()); //  
	}); 
			
	for(i=0;i<pou_arr.length;i++){
		if(pou_arr[i] != '') j++;
	}
			
	var pou_sum = j * 30000;
	$('#pou_total').html(pou_sum);
	$('#pou_sum').val(pou_sum);
	sum += pou_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_pou_sum = pou_sum;
}


function front_add(){//佛前超薦小計：			
	var front_arr = [];
	var i = 0,j = 0;
				
	sum = sum - old_front_sum;
				
	$("input[id='front_pass']").each(function(index) {  
		front_arr.push($(this).val()); //  
	}); 
				
	for(i=0;i<front_arr.length;i++){
		if(front_arr[i] != '') j++;
	}

	/*增加次數*/ 
	//var t = $('#front_times :selected').val();
	var t = $("input[name='apply_times[]']:checkbox:checked").length;
	$('#front_t_num').text(j);
	$('#front_times').text(t);
				
	var front_sum = j * 10000 * t; //增加t
	$('#front_total').html(front_sum);
	$('#front_sum').val(front_sum);
	sum += front_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_front_sum = front_sum;
}

function foli_add(){//佛力超薦小計：
	var foli_arr = [];
	var i = 0,j = 0;
				
	sum = sum - old_foli_sum;
				
	$("input[id='foli_pass']").each(function(index) {  
		foli_arr.push($(this).val()); //  
	}); 
				
	for(i=0;i<foli_arr.length;i++){
		if(foli_arr[i] != '') j++;
	}

	/*增加次數*/ 
	//var t = $('#foli_times :selected').val();
	var t = $("input[name='apply_times[]']:checkbox:checked").length;
	$('#foli_t_num').text(j);
	$('#foli_times').text(t);

	var foli_sum = j * 1500 * t; //增加t
	$('#foli_total').html(foli_sum);
	$('#foli_sum').val(foli_sum);
	sum += foli_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_foli_sum = foli_sum;
}

function shao_add(){//消災祈福小計：
	var shao_arr = [];
	var i = 0,j = 0;
				
	sum = sum - old_shao_sum;
	
	$("input[name='shao_lives[]']").each(function(index) {  
		shao_arr.push($(this).val()); //  
	}); 
	
	for(i=0;i<shao_arr.length;i++){
		if(shao_arr[i] != '') j++;
	}

	/*增加次數*/ 
	//var t = $('#shao_times :selected').val();
	var t = $("input[name='apply_times[]']:checkbox:checked").length;
	$('#shao_t_num').text(j);
	$('#shao_times').text(t);

	var shao_sum = j * 200 * t; //增加t
	$('#shao_total').html(shao_sum);
	$('#shao_sum').val(shao_sum);
	sum += shao_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_shao_sum = shao_sum;
}

function zen_add(){//贊普桌小計：
	var zen_arr = [];
	var i = 0;
				
	sum = sum - old_zen_sum;
	
	$("input[name='zen_lives[]']").each(function(index) {  
		zen_arr.push($(this).val()); //  
	}); 
	
	for(i=0;i<zen_arr.length;i++){
		if(zen_arr[i] != '') j++;
	}
	var j = $('#zen_quantity :selected').text();

	/*增加次數*/ 
	var t = $("input:checkbox.zongyuan:checked").length;//1;
	$('#zen_t_num').text(j);
	$('#zen_times').text(t);

	var zen_sum = j * 1500 * t; //增加t
	$('#zen_total').html(zen_sum);
	$('#zen_sum').val(zen_sum);
	sum += zen_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_zen_sum = zen_sum;
}

function others_add(times){//代辦供品

	if(times != "times"){
		if($("input[name='apply_times[]']:checkbox:checked").length == 0 && a_num == 0){
			//alert("請先點選法會報名場次，系統才會計算購買項目金額");
			alert_show("請先點選法會報名場次，系統才會計算購買項目金額");
		}
	}

	sum = sum - old_others_sum;
	var others_sum = 0;
	if($('#others_all').val() != ''){
		others_sum = others_sum + (parseInt($('#others_all').val()) * 500);
	}
	if($('#others_pu').val() != ''){
		others_sum = others_sum + (parseInt($('#others_pu').val()) * 180);
	}
	if($('#others_to').val() != ''){
		others_sum = others_sum + (parseInt($('#others_to').val()) * 180);
	}
	if($('#others_shen').val() != ''){
		others_sum = others_sum + (parseInt($('#others_shen').val()) * 200);
	}
	if($('#others_coo').val() != ''){
		others_sum = others_sum + (parseInt($('#others_coo').val()) * 200);
	}
	if($('#others_pin').val() != ''){
		others_sum = others_sum + (parseInt($('#others_pin').val()) * 300);
	}
	/*if($('#others_len').val() != ''){
		others_sum = others_sum + (parseInt($('#others_len').val()) * 200);
	}*/
	//alert(others_sum);

	/*增加次數*/ 
	//var t = $('#others_times :selected').val();
	var t = $("input[name='apply_times[]']:checkbox:checked").length;
	$('#others_t_num').text(others_sum);
	$('#others_times').text(t);
	
	others_sum = others_sum * t; //增加t

	$('#others_total').html(others_sum);
	$('#others_sum').val(others_sum);
	sum += others_sum;
	$('#sum_total').html(sum);
	$('#sum').val(sum);
	old_others_sum = others_sum;
}

$(document).ready(function(){
  $("#collapse11").click(function(){
	 $('.item11').collapse('toggle')	 
  });
  $("#collapse12").click(function(){
	 $('.item12').collapse('toggle')	 
  });
  $("#collapse13").click(function(){
	 $('.item13').collapse('toggle')	 
  });
  $("#collapse14").click(function(){
	 $('.item14').collapse('toggle')	 
  });
  $("#collapse15").click(function(){
	 $('.item15').collapse('toggle')	 
  });
  $("#collapse20").click(function(){
	 $('.item20').collapse('toggle')	 
  });
});

$(document).ready(function() {
	var max_fields      = 3; //maximum input boxes allowed
	var item11_wrapper         = $(".item11"); //Fields wrapper
	var add_item11_button      = $("#add_item11_button"); //Add button ID
			
	var x = 1; //initlal text box count
	$(add_item11_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$("#item11-"+x).append('<div class="col-md-2"><p>超薦先人<br />(往生者):</p></div><div class="col-md-2"><div class="input-group"><input type="text" name="foli_pass'+x+'" id="foli_pass" class="form-control" onChange="foli_add()"></div></div><div class="col-md-2"><p>陽上者:</p></div><div class="col-md-2"><div class="input-group"><input type="text" id="foli_lives" name="foli_lives'+x+'[]"  class="form-control"></div></div><div class="col-md-2"><div class="input-group"><input type="text" id="foli_lives" name="foli_lives'+x+'[]" class="form-control"></div></div><div class="col-md-2"><div class="input-group"><input type="text" id="foli_lives" name="foli_lives'+x+'[]"  class="form-control"></div></div>'); //add input box
		}
	});
});

$(document).ready(function() {
	var max_fields      = 3; //maximum input boxes allowed
	var item12_wrapper         = $(".item12"); //Fields wrapper
	var add_item12_button      = $("#add_item12_button"); //Add button ID
			
	var x = 1; //initlal text box count
	$(add_item12_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$("#item12-"+x).append('<div class="col-md-2"><div class="input-group"><input type="text" name="shao_lives[]" id="shao_lives" class="form-control" onChange="shao_add()"></div><!-- /input-group --></div><div class="col-md-2"><div class="input-group"><input type="text" name="shao_lives[]" id="shao_lives" class="form-control" onChange="shao_add()"></div><!-- /input-group --></div><div class="col-md-2"><div class="input-group"><input type="text" name="shao_lives[]" id="shao_lives" class="form-control" onChange="shao_add()"></div><!-- /input-group --></div><div class="col-md-2"><div class="input-group"><input type="text" name="shao_lives[]" id="shao_lives" class="form-control" onChange="shao_add()"></div><!-- /input-group --></div><div class="col-md-2"><div class="input-group"><input type="text" name="shao_lives[]" id="shao_lives" class="form-control" onChange="shao_add()"></div><!-- /input-group --></div><div class="col-md-2"><div class="input-group"><input type="text" name="shao_lives[]" id="shao_lives" class="form-control" onChange="shao_add()"></div><!-- /input-group --></div>'); //add input box
		}
	});
});

$(document).ready(function() {
	var max_fields      = 3; //maximum input boxes allowed
	var item14_wrapper         = $(".item14"); //Fields wrapper
	var add_item14_button      = $("#add_item14_button"); //Add button ID
			
	var x = 1; //initlal text box count
	$(add_item14_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$("#item14-"+x).append('<div class="col-md-2"><p>超薦先人<br />(往生者):</p></div><div class="col-md-2"><div class="input-group"><input type="text" id="pou_pass" name="pou_pass'+x+'" class="form-control" onChange="pou_add()"></div></div><div class="col-md-2"><p>陽上者:</p></div><div class="col-md-2"><div class="input-group"><input type="text" id="pou_lives" name="pou_lives'+x+'[]" class="form-control"></div></div><div class="col-md-2"><div class="input-group"><input type="text" id="pou_lives" name="pou_lives'+x+'[]" class="form-control"></div></div><div class="col-md-2"><div class="input-group"><input type="text" id="pou_lives" name="pou_lives'+x+'[]" class="form-control"></div></div>'); //add input box
		}
	});
});

$(document).ready(function() {
	var max_fields      = 3; //maximum input boxes allowed
	var item15_wrapper         = $(".item15"); //Fields wrapper
	var add_item15_button      = $("#add_item15_button"); //Add button ID
			
	var x = 1; //initlal text box count
	$(add_item15_button).click(function(e){ //on add input button click
		e.preventDefault();
			if(x < max_fields){ //max input box allowed
				x++; //text box increment
				$("#item15-"+x).append('<div class="col-md-2"><p>超薦先人<br />(往生者):</p></div><div class="col-md-2"><div class="input-group"><input type="text" name="front_pass'+x+'" id="front_pass" class="form-control" onChange="front_add()"></div></div><div class="col-md-2"><p>陽上者:</p></div><div class="col-md-2"><div class="input-group"><input type="text"  id="front_lives" name="front_lives'+x+'[]"  class="form-control"></div></div><div class="col-md-2"><div class="input-group"><input type="text" id="front_lives" name="front_lives'+x+'[]"  class="form-control"></div></div><div class="col-md-2"><div class="input-group"><input type="text" id="front_lives" name="front_lives'+x+'[]"  class="form-control"></div></div>'); //add input box
			}
		});
});

$(document).ready(function() {
	var max_num      = 10; //maximum qnantity allowed
	var min_num      = 0; //minimum qnantity allowed
	var add_others_all_button      = $(".add_others_all_button"); //Add button ID
	var cut_others_all_button      = $(".cut_others_all_button"); //cut button ID

	var add_others_pu_button      = $(".add_others_pu_button"); //Add button ID
	var cut_others_pu_button      = $(".cut_others_pu_button"); //Add button ID
			
	var add_others_to_button      = $(".add_others_to_button"); //Add button ID
	var cut_others_to_button      = $(".cut_others_to_button"); //Add button ID

	var add_others_shen_button      = $(".add_others_shen_button"); //Add button ID
	var cut_others_shen_button      = $(".cut_others_shen_button"); //Add button ID
			
	var add_others_coo_button      = $(".add_others_coo_button"); //Add button ID
	var cut_others_coo_button      = $(".cut_others_coo_button"); //Add button ID
			
	var add_others_pin_button      = $(".add_others_pin_button"); //Add button ID
	var cut_others_pin_button      = $(".cut_others_pin_button"); //Add button ID
			
	var add_others_len_button      = $(".add_others_len_button"); //Add button ID
	var cut_others_len_button      = $(".cut_others_len_button"); //Add button ID
			
	var a = 0; //initlal text box count
	$(add_others_all_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(a < max_num){a++;}
		$('#others_all').val(a);
		others_add();								
	});
			
	$(cut_others_all_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(a > min_num){a--;}
		$('#others_all').val(a);
		others_add();
	});
			
	var b = 0; //initlal text box count
	$(add_others_pu_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(b < max_num){b++;}
		$('#others_pu').val(b);
		others_add();								
	});
			
	$(cut_others_pu_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(b > min_num){b--;}
		$('#others_pu').val(b);
		others_add();
	});
			
	var c = 0; //initlal text box count
	$(add_others_to_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(c < max_num){c++;}
		$('#others_to').val(c);	
		others_add();							
	});
			
	$(cut_others_to_button).click(function(e){ //on add input button click
	e.preventDefault();
		if(c > min_num){c--;}
		$('#others_to').val(c);
		others_add();
	});
			
	var d = 0; //initlal text box count
	$(add_others_shen_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(d < max_num){d++;}
		$('#others_shen').val(d);
		others_add();								
	});
			
	$(cut_others_shen_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(d > min_num){d--;}
		$('#others_shen').val(d);
		others_add();
	});
			
	var f = 0; //initlal text box count
	$(add_others_coo_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(f < max_num){f++;}
		$('#others_coo').val(f);
		others_add();								
	});

	$(cut_others_coo_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(f > min_num){f--;}
		$('#others_coo').val(f);
		others_add();
	});
			
	var g = 0; //initlal text box count
	$(add_others_pin_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(g < max_num){g++;}
		$('#others_pin').val(g);
		others_add();								
	});
			
	$(cut_others_pin_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(g > min_num){g--;}
		$('#others_pin').val(g);
		others_add();
	});
			
	var h = 0; //initlal text box count
	$(add_others_len_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(h < max_num){h++;}
		$('#others_len').val(h);
		others_add();								
	});
			
	$(cut_others_len_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(h > min_num){h--;}
		$('#others_len').val(h);
		others_add();
	});
});
		
function the_way(type){			
	if(type == 0){				
		//$('#pay_info').attr("placeholder", "請輸入匯款人姓名").blur();
		$('#pay_tip').html('請在下方欄位輸入匯款人姓名');
		$('#pay_info').attr("onBlur", "");
	}
	if(type == 1){
		//$('#pay_info').attr("placeholder", "請輸入金融卡帳號末5碼").blur();
		$('#pay_tip').html('請在下方欄位輸入存摺帳號末5碼');
		$('#pay_info').attr("onBlur", "pay_info_check()");
		pay_info_check();
	}

	/************台灣Pay***************/
	$('#pay_tip').show();
	$('#pay_info').show();

	if(type == 2){
		$('#pay_tip').hide();
		$('#pay_info').hide();
		$('#pay_info').val("未付款");
	}
	/*********************************/
}

function pay_info_check(){
	var str = $("#pay_info").val();
	if(isNaN(str)){
		//alert("輸入錯誤，欄位中有非數字！");
		alert_show("輸入錯誤，欄位中有非數字！");
		return true;
	}else{
		return false;
	}
	
}
		
function value_check(){
	
	/*
	//android app更新後刪除
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios
	if(isAndroid){
		value_check_android();
		return false;
	}
	//刪到這
	*/
	
	/*if(confirm('確認送出後將無法修改，是否送出?')){
		$('#step1').submit();
	}*/
	var msg_array = [];
	var st = 0;
	
	if($('#applicant').val() == ''){
		//alert('請輸入報名者姓名');
		alert_show("請輸入報名者姓名");
		msg_array.push('請輸入報名者姓名');
		$('#applicant').focus();
		st++;
	}
	if($('#phone').val() == ''){
		//alert('請輸入手機號碼');
		alert_show("請輸入手機號碼");
		msg_array.push('請輸入手機號碼');
		$('#phone').focus();
		st++;
	}
	if($('#phone').val() != ''){
		re = /^[0][9][0-9]{8}$/;
		if (!re.test($('#phone').val())){

			//alert("手機號碼09開頭共十碼！");
			alert_show("手機號碼09開頭共十碼！");
			st++;
		}else{
			if(isNaN($('#phone').val())){
				//alert("手機號碼輸入錯誤，欄位中有非數字！");
				alert_show("手機號碼輸入錯誤，欄位中有非數字！");				
				st++;
			}
		}	
	}
	
	if($('#email').val() != ''){
		re = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/;
		if (!re.test($('#email').val()))
			//alert("電子信箱格式錯誤！");
			alert_show("電子信箱格式錯誤！");				
			
	}

	if($('#address').val() == ''){
		//alert('請輸入地址');
		alert_show("請輸入地址");				
		$('#address').focus();
		st++;
	}
	if($('#pay_info').val() == ''){
		//alert('請輸入付款資訊');
		alert_show("請輸入付款資訊");		
		$('#pay_info').focus();
		st++;
	}
	if($("input[name='pay_way']:checked").val() == null){
		//alert('請點選付款方式');
		alert_show("請點選付款方式");	
		st++;
	}
	if($("input[name='pay_way']:checked").val() == 1){
		
		if(pay_info_check()){
			st++;
		}
		
	}

	/*增加次數*/
	if($("input[name='apply_times[]']:checkbox:checked").length == 0){
		//alert('法會報名場次尚未點選!!');
		alert_show("法會報名場次尚未點選!!");	
		$("input[name='apply_times[]']").focus();
		st++;
	}
	/*增加次數*/

	$("input[name='shao_lives[]']").each(function(index) {  
		//shao_arr.push($(this).val()); //
		if($(this).val() == ''){
			//alert('消災祈福陽上者欄位未正確輸入!!');
			alert_show("消災祈福陽上者欄位未正確輸入!!");
			$(this).focus();
			st++;
		}
	}); 
	var str = '';
	var zen = $('#zen_quantity :selected').text();
	if(zen >= 1)
	{
		$("input[name='zen_lives1[]']").each(function(index) {  
			str = str + $(this).val();
		});
		if(str == ''){
			//alert('贊普桌第一桌陽上者欄位未正確輸入!!');
			alert_show("贊普桌第一桌陽上者欄位未正確輸入!!");
			str = '';
			st++;
		}
		if($("input[name='donate']:checked").val() == null){
			//alert('請點選贊普桌您要處理的方式');
			alert_show("請點選贊普桌您要處理的方式");
			$('#donate_0').focus();
			st++;
		}
	}
	str = '';
	if(zen >= 2)
	{
		$("input[name='zen_lives2[]']").each(function(index) {  
			str = str + $(this).val();
		});
		if(str == ''){
			//alert('贊普桌第二桌陽上者欄位未正確輸入!!');
			alert_show("贊普桌第二桌陽上者欄位未正確輸入!!");
			str = '';
			st++;
		}
	}
	str = '';
	if(zen >= 3)
	{
		$("input[name='zen_lives3[]']").each(function(index) {
			str = str + $(this).val();
		});
		if(str == ''){
			//alert('贊普桌第三桌陽上者欄位未正確輸入!!');
			alert_show("贊普桌第三桌陽上者欄位未正確輸入!!");
			str = '';
			st++;
		}
	}
	
	var pou = $('#pou_quantity :selected').text();
	str = '';
	if(pou >= 1)
	{
		$("input[name='pou_lives1[]']").each(function(index) {  
			if($(this).val().length>6){
				//alert("普利十方陽上者姓名字數不得超過6個字!!");
				alert_show("普利十方陽上者姓名字數不得超過6個字!!");
				st++;
			}  
			str = str + $(this).val();
		});
		if(str == ''){
			//alert('普利十方第一位先人之陽上者欄位未正確輸入!!');
			alert_show("普利十方第一位先人之陽上者欄位未正確輸入!!");
			$("input[name='pou_pass1']").setfocus();
			str = '';
			st++;
		}
		if($("input[name='pou_pass1']").val() == ''){
			//alert('普利十方第一位先人姓名未輸入!!');
			alert_show("普利十方第一位先人姓名未輸入!!");
			$("input[name='pou_pass1']").setfocus();
			st++;
		}
	}
	
	str = '';
	if(pou >= 2)
	{
		$("input[name='pou_lives2[]']").each(function(index) {
			if($(this).val().length>6){
				//alert("普利十方陽上者姓名字數不得超過6個字!!");
				alert_show("普利十方陽上者姓名字數不得超過6個字!!");
				st++;
			}    
			str = str + $(this).val();
		});
		if(str == ''){
			//alert('普利十方第二位先人之陽上者欄位未正確輸入!!');
			alert_show("普利十方第二位先人之陽上者欄位未正確輸入!!");
			$("input[name='pou_pass2']").setfocus();
			str = '';
			st++;
		}
		if($("input[name='pou_pass2']").val() == ''){
			//alert('普利十方第二位先人姓名未輸入!!');
			alert_show("普利十方第二位先人姓名未輸入!!");
			$("input[name='pou_pass2']").setfocus();
			st++;
		}
	}
	
	str = '';
	if(pou >= 3)
	{
		$("input[name='pou_lives3[]']").each(function(index) {
			if($(this).val().length>6){
				//alert("普利十方陽上者姓名字數不得超過6個字!!");
				alert_show("普利十方陽上者姓名字數不得超過6個字!!");
				st++;
			}  
			str = str + $(this).val();
		});
		if(str == ''){
			//alert('普利十方第三位先人之陽上者欄位未正確輸入!!');
			alert_show("普利十方第三位先人之陽上者欄位未正確輸入!!");
			$("input[name='pou_pass3']").setfocus();
			str = '';
			st++;
		}
		if($("input[name='pou_pass3']").val() == ''){
			//alert('普利十方第三位先人姓名未輸入!!');
			alert_show("普利十方第三位先人姓名未輸入!!");
			$("input[name='pou_pass3']").setfocus();
			st++;
		}
	}
	
	var front = $('#front_quantity :selected').text();
	str = '';
	if(front >= 1)
	{
		$("input[name='front_lives1[]']").each(function(index) {  
			if($(this).val().length>6){
				//alert("佛前超薦陽上者姓名字數不得超過6個字!!");
				alert_show("佛前超薦陽上者姓名字數不得超過6個字!!");
				st++;
			}
			str = str + $(this).val();
		});
		if(str == ''){
			//alert('佛前超薦第一位先人之陽上者欄位未正確輸入!!');
			alert_show("佛前超薦第一位先人之陽上者欄位未正確輸入!!");
			$("input[name='front_pass1']").setfocus();
			str = '';
			st++;
		}
		if($("input[name='front_pass1']").val() == ''){
			//alert('佛前超薦第一位先人姓名未輸入!!');
			alert_show("佛前超薦第一位先人姓名未輸入!!");
			$("input[name='front_pass1']").setfocus();
			st++;
		}
	}
	
	str = '';
	if(front >= 2)
	{
		$("input[name='front_lives2[]']").each(function(index) { 
			if($(this).val().length>6){
				//alert("佛前超薦陽上者姓名字數不得超過6個字!!");
				alert_show("佛前超薦陽上者姓名字數不得超過6個字!!");
				st++;
			} 
			str = str + $(this).val();
		});
		if(str == ''){
			//alert('佛前超薦第二位先人之陽上者欄位未正確輸入!!');
			alert_show("佛前超薦第二位先人之陽上者欄位未正確輸入!!");
			$("input[name='front_pass2']").setfocus();
			str = '';
			st++;
		}
		if($("input[name='front_pass2']").val() == ''){
			//alert('佛前超薦第二位先人姓名未輸入!!');
			alert_show("佛前超薦第二位先人姓名未輸入!!");
			$("input[name='front_pass2']").setfocus();
			st++;
		}
	}
	
	str = '';
	if(front >= 3)
	{
		$("input[name='front_lives3[]']").each(function(index) {  
			if($(this).val().length>6){
				//alert("佛前超薦陽上者姓名字數不得超過6個字!!");
				alert_show("佛前超薦陽上者姓名字數不得超過6個字!!");
				st++;
			}
			str = str + $(this).val();
		});
		if(str == ''){
			//alert('佛前超薦第三位先人之陽上者欄位未正確輸入!!');
			alert_show("佛前超薦第三位先人之陽上者欄位未正確輸入!!");
			$("input[name='front_pass3']").setfocus();
			str = '';
			st++;
		}
		if($("input[name='front_pass3']").val() == ''){
			//alert('佛前超薦第三位先人姓名未輸入!!');
			alert_show("佛前超薦第三位先人姓名未輸入!!");
			$("input[name='front_pass3']").setfocus();
			st++;
		}
	}
	
	var foli = $('#foli_quantity :selected').text();
	str = '';
	var t = 0;
	var t_arr = new Array("","一", "二", "三","四","五","六","七","八","九","十");
	for(t=1;t<=foli;t++){
		$("input[name='foli_lives"+t+"[]']").each(function(index) {  
			if($(this).val().length>6){
				//alert("佛力超薦陽上者姓名字數不得超過6個字!!");
				alert_show("佛力超薦陽上者姓名字數不得超過6個字!!");
				st++;
			}
			str = str + $(this).val();
		});
		if(str == ''){
			//alert('佛力超薦第'+t_arr[t]+'位先人之陽上者欄位未正確輸入!!');
			alert_show('佛力超薦第'+t_arr[t]+'位先人之陽上者欄位未正確輸入!!');
			$("input[name='foli_pass"+t+"']").setfocus();
			str = '';
			st++;
		}
		if($("input[name='foli_pass"+t+"']").val() == ''){
			//alert('佛力超薦第'+t_arr[t]+'位先人姓名未輸入!!');
			alert_show('佛力超薦第'+t_arr[t]+'位先人姓名未輸入!!');
			$("input[name='foli_pass"+t+"']").setfocus();
			st++;
		}
	}
	
	/*if(foli >= 1)
	{
		$("input[name='foli_lives1[]']").each(function(index) {  
			if($(this).val().length>6){
				alert("佛力超薦陽上者姓名字數不得超過6個字!!");
				st++;
			}
			str = str + $(this).val();
		});
		if(str == ''){
			alert('佛力超薦第一位先人之陽上者欄位未正確輸入!!');
			$("input[name='foli_pass1']").setfocus();
			str = '';
			st++;
		}
		if($("input[name='foli_pass1']").val() == ''){
			alert('佛力超薦第一位先人姓名未輸入!!');
			$("input[name='foli_pass1']").setfocus();
			st++;
		}
	}
	
	str = '';
	if(foli >= 2)
	{
		$("input[name='foli_lives2[]']").each(function(index) { 
			if($(this).val().length>6){
				alert("佛力超薦陽上者姓名字數不得超過6個字!!");
				st++;
			} 
			str = str + $(this).val();
		});
		if(str == ''){
			alert('佛力超薦第二位先人之陽上者欄位未正確輸入!!');
			$("input[name='foli_pass2']").setfocus();
			str = '';
			st++;
		}
		if($("input[name='foli_pass2']").val() == ''){
			alert('佛力超薦第二位先人姓名未輸入!!');
			$("input[name='foli_pass1']").setfocus();
			st++;
		}
	}
	
	str = '';
	if(foli >= 3)
	{
		$("input[name='foli_lives3[]']").each(function(index) {  
			if($(this).val().length>6){
				alert("佛力超薦陽上者姓名字數不得超過6個字!!");
				st++;
			}
			str = str + $(this).val();
		});
		if(str == ''){
			alert('佛力超薦第三位先人之陽上者欄位未正確輸入!!');
			$("input[name='foli_pass3']").setfocus();
			str = '';
			st++;
		}
		if($("input[name='foli_pass2']").val() == ''){
			alert('佛力超薦第三位先人姓名未輸入!!');
			$("input[name='foli_pass3']").setfocus();
			st++;
		}
	}
	*/
	

	if($("#sum").val() == 0){
		//alert('您尚未選取報名項目!!');
		alert_show('您尚未選取報名項目!!');
		st++;
	}
	
	if(st == 0){
		/*
		if(confirm('請檢查所有資料是否正確?')){
			//$('#step1').submit();
			send_data();
		}
		*/
		send_data();
		/*
		bootbox.confirm("請檢查所有資料是否正確?", function(result){
			send_data();
			
		})
		*/
	}
}
		
function value_reset(){
	window.location.reload(true);
}

function send_data(){

	//Examples of how to assign the Colorbox event to elements
	var str = '';
	var applicant = $('#applicant').val();
	var phone = $('#phone').val();
	var address = $('#address').val();
	var email = $('#email').val();
	var pay_way = $("input[name='pay_way']:checked").val();
	var pay_info = $('#pay_info').val();
	var applicant_note = $('#applicant_note').val();
	
	var pou_quantity = $('#pou_quantity').val();
	
	var pou_pass1 = $("input[name='pou_pass1']").val();
	$("input[name='pou_lives1[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var pou_lives1 = str.trim();
	
	str = '';
	var pou_pass2 = $("input[name='pou_pass2']").val();
	$("input[name='pou_lives2[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var pou_lives2 = str.trim();
	
	str = '';
	var pou_pass3 = $("input[name='pou_pass3']").val();
	$("input[name='pou_lives3[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var pou_lives3 = str.trim();
	
	var front_quantity = $('#front_quantity').val();
	str = '';
	var front_pass1 = $("input[name='front_pass1']").val();
	$("input[name='front_lives1[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var front_lives1 = str.trim();
	
	str = '';
	var front_pass2 = $("input[name='front_pass2']").val();
	$("input[name='front_lives2[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var front_lives2 = str.trim();
	
	str = '';
	var front_pass3 = $("input[name='front_pass3']").val();
	$("input[name='front_lives3[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var front_lives3 = str.trim();
	
	var foli_quantity = $('#foli_quantity').val();
	str = '';
	var foli_pass1 = $("input[name='foli_pass1']").val();
	$("input[name='foli_lives1[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var foli_lives1 = str.trim();
	
	str = '';
	var foli_pass2 = $("input[name='foli_pass2']").val();
	$("input[name='foli_lives2[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var foli_lives2 = str.trim();
	
	str = '';
	var foli_pass3 = $("input[name='foli_pass3']").val();
	$("input[name='foli_lives3[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var foli_lives3 = str.trim();
	
	str = '';
	var foli_pass4 = $("input[name='foli_pass4']").val();
	$("input[name='foli_lives4[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var foli_lives4 = str.trim();
	
	str = '';
	var foli_pass5 = $("input[name='foli_pass5']").val();
	$("input[name='foli_lives5[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var foli_lives5 = str.trim();
	
	str = '';
	var foli_pass6 = $("input[name='foli_pass6']").val();
	$("input[name='foli_lives6[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var foli_lives6 = str.trim();
	
	str = '';
	var foli_pass7 = $("input[name='foli_pass7']").val();
	$("input[name='foli_lives7[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var foli_lives7 = str.trim();
	
	str = '';
	var foli_pass8 = $("input[name='foli_pass8']").val();
	$("input[name='foli_lives8[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var foli_lives8 = str.trim();
	
	str = '';
	var foli_pass9 = $("input[name='foli_pass9']").val();
	$("input[name='foli_lives9[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var foli_lives9 = str.trim();
	
	str = '';
	var foli_pass10 = $("input[name='foli_pass10']").val();
	$("input[name='foli_lives10[]']").each(function(index) {  
		str = str + $(this).val() + ' ';
	});
	var foli_lives10 = str.trim();

	var shao_quantity = $('#shao_quantity').val();
	str = '';
	$("input[name='shao_lives[]']").each(function(index) { 
		str = str + $(this).val() + ' ';
	});
	var shao_lives = str.trim();
	
	var zen_quantity = $('#zen_quantity').val();
	str = '';
	$("input[name='zen_lives1[]']").each(function(index) { 
		str = str + $(this).val() + ' ';
	});
	var zen_lives1 = str.trim();
	
	str = '';
	$("input[name='zen_lives2[]']").each(function(index) { 
		str = str + $(this).val() + ' ';
	});
	var zen_lives2 = str.trim();
	
	str = '';
	$("input[name='zen_lives3[]']").each(function(index) { 
		str = str + $(this).val() + ' ';
	});
	var zen_lives3 = str.trim();
	var donate = $("input[name='donate']:checked").val();
	
	

	var pou_sum = $('#pou_sum').val();
	var front_sum = $('#front_sum').val();
	var foli_sum = $('#foli_sum').val();
	var shao_sum = $('#shao_sum').val();
	var zen_sum = $('#zen_sum').val();
	
	var others_all = $('#others_all').val();
	var others_pu = $('#others_pu').val();
	var others_to = $('#others_to').val();
	var others_shen = $('#others_shen').val();
	var others_coo = $('#others_coo').val();
	var others_pin = $('#others_pin').val();
	var others_len = $('#others_len').val();
	var take_back = $("input[name='take_back']:checked").val();
	
	/*增加次數*/
	
	var apply_times = $("input[name='apply_times[]']:checkbox:checked").length;

	str = '';
	$("input[name='apply_times[]']:checkbox:checked").each(function() {  
		str = str + $(this).val() + ' ';	
	}); 
	var apply_msg = str.trim();
	/*增加次數*/

	/*******************************************原始程式*******************************************/
	var url = "check.php?applicant=" + applicant + "&phone=" + phone + "&address=" + address + '&email=' + email + '&pay_way=' + pay_way + '&applicant_note=' + applicant_note;
	url = url + "&pay_info=" + pay_info;
	url = url + "&pou_quantity=" + pou_quantity + "&pou_pass1=" + pou_pass1 + "&pou_lives1=" +  pou_lives1 + "&pou_pass2=" + pou_pass2 + "&pou_lives2=" + pou_lives2 + "&pou_pass3=" + pou_pass3 + "&pou_lives3=d" + pou_lives3;
	url = url + "&front_quantity=" + front_quantity + "&front_pass1=" + front_pass1 + "&front_lives1=" +  front_lives1 + "&front_pass2=" + front_pass2 + "&front_lives2=" + front_lives2 + "&front_pass3=" + front_pass3 + "&front_lives3=" + front_lives3;
	url = url + "&foli_quantity=" + foli_quantity + "&foli_pass1=" + foli_pass1 + "&foli_lives1=" +  foli_lives1 + "&foli_pass2=" + foli_pass2 + "&foli_lives2=" + foli_lives2 + "&foli_pass3=" + foli_pass3 + "&foli_lives3=" + foli_lives3 + "&foli_pass4=" + foli_pass4 + "&foli_lives4=" + foli_lives4 + "&foli_pass5=" + foli_pass5 + "&foli_lives5=" + foli_lives5 + "&foli_pass6=" + foli_pass6 + "&foli_lives6=" + foli_lives6 + "&foli_pass7=" + foli_pass7 + "&foli_lives7=" + foli_lives7 + "&foli_pass8=" + foli_pass8 + "&foli_lives8=" + foli_lives8 + "&foli_pass9=" + foli_pass9 + "&foli_lives9=" + foli_lives9 + "&foli_pass10=" + foli_pass10 + "&foli_lives10=" + foli_lives10;
	
	url = url + "&shao_quantity=" + shao_quantity + "&shao_lives=" + shao_lives + "&zen_quantity=" + zen_quantity + "&zen_lives1=" + zen_lives1 + "&zen_lives2=" + zen_lives2 + "&zen_lives3=" + zen_lives3 +　'&donate=' + donate;
	
	url = url + "&others_all=" + others_all + "&others_pu=" + others_pu + "&others_to=" + others_to + "&others_shen=" + others_shen + "&others_coo=" + others_coo + "&others_pin=" + others_pin + "&others_len=" + others_len + "&take_back=" + take_back;

	/*增加次數*/
	url = url + "&apply_times=" + apply_times + "&apply_msg=" + apply_msg;
	
	url = url + "&pou_sum=" + pou_sum + "&front_sum=" + front_sum + "&foli_sum=" + foli_sum + "&shao_sum=" + shao_sum + "&zen_sum=" + zen_sum + "&sum=" + sum;
	/*******************************************原始程式*******************************************/

	//判斷是否是從會員介面報名
	var member_url = document.location.href;
	member_url = member_url.split("?");

	//如果是透過會員系統
	if(member_url[1] !== undefined){
		member_url = member_url[1].split("&");
		member_url = member_url[0].split("=");

		if(member_url[0] === "member_id"){
			var member_id = member_url[1];
			url = url + '&member_id=' + member_id;
		}
	}
	
	//原始程式
	/*
	var url = "check.php?applicant=" + applicant + "&phone=" + phone + "&address=" + address + '&email=' + email + '&pay_way=' + pay_way + '&applicant_note=' + applicant_note;
	url = url + "&pay_info=" + pay_info;
	url = url + "&pou_quantity=" + pou_quantity + "&pou_pass1=" + pou_pass1 + "&pou_lives1=" +  pou_lives1 + "&pou_pass2=" + pou_pass2 + "&pou_lives2=" + pou_lives2 + "&pou_pass3=" + pou_pass3 + "&pou_lives3=d" + pou_lives3;
	url = url + "&front_quantity=" + front_quantity + "&front_pass1=" + front_pass1 + "&front_lives1=" +  front_lives1 + "&front_pass2=" + front_pass2 + "&front_lives2=" + front_lives2 + "&front_pass3=" + front_pass3 + "&front_lives3=" + front_lives3;
	url = url + "&foli_quantity=" + foli_quantity + "&foli_pass1=" + foli_pass1 + "&foli_lives1=" +  foli_lives1 + "&foli_pass2=" + foli_pass2 + "&foli_lives2=" + foli_lives2 + "&foli_pass3=" + foli_pass3 + "&foli_lives3=" + foli_lives3 + "&foli_pass4=" + foli_pass4 + "&foli_lives4=" + foli_lives4 + "&foli_pass5=" + foli_pass5 + "&foli_lives5=" + foli_lives5 + "&foli_pass6=" + foli_pass6 + "&foli_lives6=" + foli_lives6 + "&foli_pass7=" + foli_pass7 + "&foli_lives7=" + foli_lives7 + "&foli_pass8=" + foli_pass8 + "&foli_lives8=" + foli_lives8 + "&foli_pass9=" + foli_pass9 + "&foli_lives9=" + foli_lives9 + "&foli_pass10=" + foli_pass10 + "&foli_lives10=" + foli_lives10;
	
	url = url + "&shao_quantity=" + shao_quantity + "&shao_lives=" + shao_lives + "&zen_quantity=" + zen_quantity + "&zen_lives1=" + zen_lives1 + "&zen_lives2=" + zen_lives2 + "&zen_lives3=" + zen_lives3 +　'&donate=' + donate;
	
	url = url + "&others_all=" + others_all + "&others_pu=" + others_pu + "&others_to=" + others_to + "&others_shen=" + others_shen + "&others_coo=" + others_coo + "&others_pin=" + others_pin + "&others_len=" + others_len + "&take_back=" + take_back;
	
	url = url + "&pou_sum=" + pou_sum + "&front_sum=" + front_sum + "&foli_sum=" + foli_sum + "&shao_sum=" + shao_sum + "&zen_sum=" + zen_sum + "&sum=" + sum;
	*/
	
	
	$(".iframe").colorbox({
		iframe:true,
		scrolling: true,
		innerWidth:$(window).innerWidth(),
		innerHeight:$(window).innerHeight(),
		href: url,
		onClosed:function(){
		//Do something on close.
		}
	});
}

$(function () {

	(function ($) {
		$.getUrlParam = function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]); return null;
		}
	})(jQuery);

	//var xx = $.getUrlParam('member_id');


});



/*贊普桌展開 關閉*/ 
$(document).ready(function(){
	var c = false; 
	$("#zen_p").hide();
	$(".zongyuan").change(function(){
		var c = [];

		$(".zongyuan").each(function(){
			c.push($(this).prop("checked"));
			if($(this).prop("checked")){
				if(!$("#zen_p").is(":visible")){
					$("#zen_p").slideToggle('slow');
				}
				return false;
			}
		});
		
		if($.inArray(true, c) == -1){
			$("#zen_p").slideToggle('slow');
			$("#zen_quantity").val(0).change();
		}
		
	});
	

	/******************監聽會員系統 postMessage傳值***********************/

	$(window).on("message", function(e){

		var data = e.originalEvent.data; 

		if(data.copy == "yes"){
			var j=0;
	        //報名者姓名
	        $("#applicant").val(data.applicant);
	        //電話
	        $("#phone").val(data.phone);
	        //地址
	        $("#address").val(data.address);
	        //email
	        $("#email").val(data.email);
	        //匯款方式
	        if(data.payment_terms == '匯款'){
	          $("#pay_name").prop("checked", true);
	        }else if(data.payment_terms == '轉帳'){
	          $("#pay_acc").prop("checked", true);
	        }
	        //匯款資訊（匯款人姓名或轉帳後五碼）
	        $("#pay_info").val(data.pay_info);

	        //點擊同上次報名按鈕時 跳出的alert次數
	        //signup_iframe.a_num = 1;
	        

	        //彿力超薦
	        var item_foli_num = data.foli.length;
	        if(item_foli_num > 0){
	          $("#collapse11 .btn-warning").click();
	          $("#foli_quantity").val(item_foli_num).change();
	          
	          for(var i=0; i<item_foli_num; i++){
	            $('input[name="foli_pass'+(i+1)+'"]').val(data.foli[i].users);
	            //alert(data.foli[0].users);
	            var lives = data.foli[i].lives.split(" ");
	            j = 0;
	            $('input[name^="foli_lives'+(i+1)+'"]').each(function(){
	              $(this).val(lives[j]);
	              j++;
	            });
	            
	          }
	        }
	        //佛前超薦
	        var item_front_num = data.front.length;
	        if(item_front_num > 0){
	          $("#collapse15 .btn-warning").click();
	          $("#front_quantity").val(item_front_num).change();
	          
	          for(var i=0; i<item_front_num; i++){
	            $('input[name="front_pass'+(i+1)+'"]').val(data.front[i].users);
	            
	            var lives = data.front[i].lives.split(" ");
	            
	            j = 0;
	            $('input[name^="front_lives'+(i+1)+'"]').each(function(){
	              $(this).val(lives[j]);
	              j++;
	            });
	          }
	        }


	        //贊普桌
	        var item_zen_num = data.zen.length;
	        if(item_zen_num > 0){
	          if($("#zen_p").hasClass("hidden") == false){
	            //$("#collapse13 .btn-warning").click();                                           
	            if($(".zongyuan").prop("checked") == false){
	              $("#zen_p").slideToggle('slow');
	            }
	            
	            $(".zongyuan").prop("checked", true);
	            $("#zen_quantity").val(item_zen_num).change();
	            
	            for(var i=0; i<item_zen_num; i++){
	  
	              var lives = data.zen[i].lives.split(" ");
	              
	              j = 0;
	              $('input[name^="zen_lives'+(i+1)+'"]').each(function(){
	                $(this).val(lives[j]);
	                j++;
	              });
	            }
	            //贊普桌是否自行帶回
	            if(data.zen[0].item_info_check == 1){
	              $('#donate_1').prop("checked", true);
	            }else{
	              $('#donate_0').prop("checked", true);
	            }
	          }
	        }

	        //消災祈福
	        var item_shao_num = data.shao.length;
	        if(item_shao_num > 0){
	          $("#collapse12 .btn-warning").click();
	          $("#shao_quantity").val(item_shao_num).change();
	            
	          j = 0;
	          $('input[name^="shao_lives"]').each(function(){
	            $(this).val(data.shao[j].lives);
	            j++;
	          });
	        }

	        //代辦供品
	        var item_others_num = data.others.length;
	        if(item_others_num > 0){
	          $("#collapse20 .btn-warning").click();
	          
	          for(var i=0; i<item_others_num; i++){
	              if(data.others[i].others_all > 0){
	                $("#others_all").val(data.others[i].others_all);
	              }
	              if(data.others[i].others_pu > 0){
	                $("#others_pu").val(data.others[i].others_pu);
	              }
	              if(data.others[i].others_to > 0){
	                $("#others_to").val(data.others[i].others_to);
	              }
	              if(data.others[i].others_shen > 0){
	                $("#others_shen").val(data.others[i].others_shen);
	              }
	              if(data.others[i].others_coo > 0){
	                $("#others_coo").val(data.others[i].others_coo);
	              }
	              if(data.others[i].others_pin > 0){
	                $("#others_pin").val(data.others[i].others_pin);
	                if(data.others[i].item_info_check == 1){
	                  $('input[name="take_back"]').prop("checked", true);
	                }
	              }
	          } 
	          //執行法會線上報名網頁中others_add()方法（小記代辦供品種金額）
	          others_add();
	        }

	        alert_show("請先點選法會報名場次，系統才會計算報名項目金額");
		}
	});


	/****************************************************************/
	
});

function auto_input(){
	window.parent.postMessage({
	    'func': 'autoInput',
	}, "https://www.wdslife.com.tw/ancestorsPujs");
}






