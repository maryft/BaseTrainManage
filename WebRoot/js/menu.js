function showtow(nam,obj,me){ 
	var menudiv=document.getElementById("menuleft").getElementsByTagName("div");//左侧div数组
	var ulmun=menudiv[nam].childNodes//div数组下面的ul数组

  	var tmp_rom = new Array();
	for (var nn=0 ;nn< ulmun.length ; nn++ ){
		var tmp = ulmun[nn].nodeName;
		if(tmp =='ul'||tmp =='UL')
			tmp_rom.push(ulmun[nn]);
	}

	for (var i=0 ;i< tmp_rom.length ; i++ ){
		tmp_rom[i].style.display='none'
		tmp_rom[obj].style.display='block'
		}
	   $("#user_show").hide();//把提示的table hide
	 
}
  function upDownMenu(obj){  
	$(obj).parent().find("ul li").css("background","url(../image/icon_2.gif) no-repeat 0px 50%");//a连接的底色问题
	$(obj).parent().find("ul li a").css("padding-left","40px");
	if(!$(obj).parent().find("ul"))   
		{
		return false;
		}
	if($(obj).parent().find("ul").css("display")=='block'){
		$(obj).parent().find("ul").hide();
		$(obj).parent().removeClass().addClass("#");
		}
	else{
		$(obj).parent().find("ul").show();
		$(obj).parent().removeClass().addClass("updown");
		$(obj).parent().prevAll().find("ul").hide();
		$(obj).parent().prevAll().removeClass().addClass("#");
		$(obj).parent().nextAll().find("ul").hide();
		$(obj).parent().nextAll().removeClass().addClass("#");
	}
}