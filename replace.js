$(document).ready(function() {
	$("#cms").keyup(function() {
		var inputdata = $("#cms").val();
		var cal_ins = (inputdata / 2.54);
		var cal_fts = (inputdata / 32.48);
		var cal_kms = (inputdata / 100000);
		var cal_mis = (inputdata / 160934);
		$("#ins").val(cal_ins);
		$("#fts").val(cal_fts);
		$("#kms").val(cal_kms);
		$("#mis").val(cal_mis);
	});
	$("#ins").keyup(function() {
		var inputdata = $("#ins").val();
		var cal_cms = (inputdata * 2.54);
		var cal_fts = (inputdata / 12);
		var cal_kms = (inputdata / 39370.1);
		var cal_mis = (inputdata / 63360);
		$("#cms").val(cal_cms);
		$("#fts").val(cal_fts);
		$("#kms").val(cal_kms);
		$("#mis").val(cal_mis);
	});
	$("#fts").keyup(function() {
		var inputdata = $("#fts").val();
		var cal_cms = (inputdata * 30.48);
		var cal_ins = (inputdata * 12);
		var cal_kms = (inputdata / 3280.84);
		var cal_mis = (inputdata / 5280);
		$("#cms").val(cal_cms);
		$("#ins").val(cal_ins);
		$("#kms").val(cal_kms);
		$("#mis").val(cal_mis);
	});
	$("#kms").keyup(function() {
		var inputdata = $("#kms").val();
		var cal_cms = (inputdata * 100000);
		var cal_fts = (inputdata * 3280.84);
		var cal_ins = (39370.1 / inputdata);
		var cal_mis = (inputdata * 0.621371);
		$("#cms").val(cal_cms);
		$("#ins").val(cal_ins);
		$("#fts").val(cal_fts);
		$("#mis").val(cal_mis);
	});
	$("#mis").keyup(function() {
		var inputdata = $("#mis").val();
		var cal_cms = (inputdata * 160934);
		var cal_ins = (inputdata * 63360);
		var cal_fts = (inputdata * 5280);
		var cal_kms = (inputdata * 1.60934);
		$("#cms").val(cal_cms);
		$("#ins").val(cal_ins);
		$("#fts").val(cal_fts);
		$("#kms").val(cal_kms);
	});
});

$(document).ready(function() {
	$('#encode').click(function() {
		var htmlcode = $("#uInput").val();
		var res = encodeURIComponent(htmlcode);
		$("#uInput").val(res);
		var $temp = $("<input>");
		$("body").append($temp);
		$("#uInput").val($("#uInput").val().replace(/%0A/g, '\n'));
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();

	});
});

$(document).ready(function() {
	$('#decode').click(function() {
		var htmlcode = $("#uInput").val();
		var res = decodeURIComponent(htmlcode);
		$("#uInput").val(res);
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();
	});
});

$(document).ready(function() {
	$('#vheight').keyup(function() {
		$("#rheight").val($('#vheight').val());
		$("#uheight").val(($('#vheight').val() / 30).toFixed(2));
	});
	$('#uheight').keyup(function() {
		$("#rheight").val(($('#uheight').val() * 30).toFixed(0));
		$("#vheight").val(($('#uheight').val() * 30).toFixed(0));
	});
	$('#vweight').keyup(function() {
		$("#rweight").val($('#vweight').val());
		$('#uweight').val(($('#rweight').val() / 0.45359237).toFixed(2));
	});
	$('#uweight').keyup(function() {
		$('#vweight').val(($('#uweight').val() * 0.45359237).toFixed(0));
		$("#rweight").val($('#vweight').val());
	});
	$('#rheight').change(function() {
		$('#vheight').val($('#rheight').val());
		$('#uheight').val(($('#rheight').val() / 30).toFixed(2));
	});
	$('#rweight').change(function() {
		$('#vweight').val($('#rweight').val());
		$('#uweight').val(($('#rweight').val() / 0.45359237).toFixed(2));
	});
});

$(document).ready(function() {
	$('#bt-bmi').click(function() {
		var w = $("#rweight").val();
		var h = ($('#rheight').val() / 100) * ($('#rheight').val() / 100);
		var calbmi = (w / h).toFixed(1);
		$('#c-bmi').val(calbmi);
		if (calbmi < 18.5) {
			$('#bmi, #c-bmi').attr('class', '');
			$("#bmi").val('Under Weight');
			$('#bmi, #c-bmi').addClass("form-control alert-info");
		} else
		if (calbmi > 18.6 && calbmi < 24.9) {
			$('#bmi, #c-bmi').attr('class', '');
			$("#bmi").val('Normal');
			$('#bmi, #c-bmi').addClass("form-control alert-success");
		} else
		if (calbmi > 25 && calbmi < 29.9) {
			$('#bmi, #c-bmi').attr('class', '');
			$("#bmi").val('Over Weight');
			$('#bmi, #c-bmi').addClass("form-control alert-warning");
		} else
		if (calbmi > 30 && calbmi < 34.9) {
			$('#bmi, #c-bmi').attr('class', '');
			$("#bmi").val('Obese');
			$('#bmi, #c-bmi').addClass("form-control alert-danger");
		} else
		if (calbmi > 35) {
			$('#bmi, #c-bmi').attr('class', '');
			$("#bmi").val('Extremely Obese');
			$('#bmi, #c-bmi').addClass("form-control alert-danger");
		}
		return false;
	});
});

$(document).ready(function() {
	$("#subscribe").click(function() {
		var email = $("input#signup").val();
		var myurl = $("input#signurl").val();
		if (email == "") {
			$("#error_invalid").hide();
			$("#error_blank").show();
			$("input#signup").focus();
			return false;
		}
		if (echeck(document.nlfrm.signup.value) == false) {
			$("#error_blank").hide();
			$("#error_invalid").show();
			document.nlfrm.signup.focus();
			return false;
		}
		$("#nlfrm, #error_blank, #error_invalid").hide();
		$("#nlload").show();
		$.ajax({
			type: "get",
			url: "https://www.joydeepdeb.com/html/subscribe.php",
			data: {
				signurl: myurl,
				signup: email
			},
			cache: false,
			success: function() {
				$("#nlload, #error_blank, #error_invalid, #nlfrm").hide();
				$("#nlthanks").fadeIn("slow");
			}
		});
		return false;
	});
});

$(document).ready(function() {
	$("#contact_me").click(function() {
		var unam = $("#uname").val();
		var ueml = $("#uemail").val();
		var umsg = $("#umsg").val();
		if (unam == "") {
			$("#ctnamemin, #ctemlblnk, #ctemlvld, #ctmsgblnk").hide();
			$("#ctnameblnk").show();
			$("#uname").focus();
			return false;
		}
		if (unam.length < 3) {
			$("#ctnameblnk, #ctemlblnk, #ctemlvld, #ctmsgblnk").hide();
			$("#ctnamemin").show();
			$("#uname").focus();
			return false;
		}
		if (ueml == "") {
			$("#ctnameblnk, #ctnamemin, #ctemlvld, #ctmsgblnk").hide();
			$("#ctemlblnk").show();
			$("#uemail").focus();
			return false;
		}
		if (echeck(ueml) == false) {
			$("#ctemlblnk").hide();
			$("#ctemlvld").show();
			$("#uemail").focus();
			return false;
		}
		if (umsg == "") {
			$("#ctnameblnk, #ctnamemin, #ctemlblnk, #ctemlvld").hide();
			$("#ctmsgblnk").show();
			$("#umsg").focus();
			return false;
		}
		$("#ctnameblnk, #ctnamemin, #ctemlblnk, #ctemlvld, #ctmsgblnk").hide();
		return true;
	});
});

$(document).ready(function() {
	$("#unsubscribe_me").click(function() {
		var ueml = $("#uemail").val();
		if (ueml == "") {
			$("#ctemlvld").hide();
			$("#ctemlblnk").show();
			$("#ueml").focus();
			return false;
		}
		if (echeck(ueml) == false) {
			$("#ctemlblnk").hide();
			$("#ctemlvld").show();
			$("#uemail").focus();
			return false;
		}
		$("#ctemlblnk").hide();
		$("#ctemlvld").hide();
		return true;
	});
});

$(document).ready(function() {
	$("#ucase").click(function() {
		$('#uInput').removeClass('text-capitalize');
		$('#uInput').val($('#uInput').val().toUpperCase());
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();
	});
	$("#lcase").click(function() {
		$('#uInput').removeClass('text-capitalize');
		$('#uInput').val($('#uInput').val().toLowerCase());
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();
	});
	$("#tcase").click(function() {
		$('#uInput').val($('#uInput').val().toLowerCase());
		$('#uInput').addClass('text-capitalize');
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();
	});
});

$(document).ready(function() {
	$('#uInput').keyup(function() {
		var len = $(this).val().length;
		var txt = $(this).val().match(/\S+/g).length;
		var lin = $(this).val().split(/\r*\n/).length;
		var ch = len;
		var wc = txt;
		var lc = lin;
		$('#cc_data').html('Total Characters: <mark>[<span class="number">' + ch + '</span>]</mark>, Total Words: <mark>[<span class="number">' + wc + '</span>]</mark> and Line Count: <mark>[<span class="number">' + lc + '</span>]</mark>');
	});
});

$(document).ready(function() {
	$('#unicode').click(function() {
		var tstr = $("#uInput").val();
		var bstr = '';
		for (i = 0; i < tstr.length; i++) {
			if (tstr.charCodeAt(i) > 127) {
				bstr += '&#' + tstr.charCodeAt(i) + ';';
			} else {
				bstr += tstr.charAt(i);
			}
		}
		$("#uInput").val(bstr);
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();
	});
});

$(document).ready(function() {
	$("#uploadcsv").click(function() {
		var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
		if (regex.test($("#userfile").val().toLowerCase())) {
			if (typeof(FileReader) != "undefined") {
				var reader = new FileReader();
				reader.onload = function(e) {
					var rows = e.target.result.split("\n");
					$("#CSVInput").append(rows);
					$("#uploadcsv").addClass("disabled");
					$("#uploadcsv").text("File Uploaded");
				}
				reader.readAsText($("#userfile")[0].files[0]);
			} else {
				alert("This browser does not support HTML5.");
			}
		} else {
			alert("Please Upload a valid .CSV file.");
		}
	});
});

$(document).ready(function() {
	$("#csvsplit").click(function() {
		if ($('#CSVInput').val() == "") {
			alert('Please Upload Your .CSV file.');
		} else {
			var InputBox = $("#uInput").val();
			var string = $('#CSVInput').val();
			var array = string.split('\n');
			for ($i = 0; $i < array.length; $i++) {
				var dateAndText = array[$i].split(',');
				FindWhat = dateAndText[0];
				ReplaceWhat = dateAndText[1];
				InputBox = InputBox.replace(new RegExp(RegExp.escape(FindWhat), "gi"), ReplaceWhat);
			}
			$("#uInput").val(InputBox);
		}
	});
});

$(document).ready(function() {
	$("#addrule").click(function() {
		var unam = $("#useragent").val();
		var ueml = $("#botaction").val();
		var umsg = $("#boturl").val();
		var precode = $("#prebotcode").val();
		if (unam == "") {
			$("#ctnamemin, #ctemlblnk").hide();
			$("#ctnameblnk").show();
			$("#useragent").focus();
			return false;
		}
		if (ueml == "") {
			$("#ctnameblnk, #ctemlblnk").hide();
			$("#ctnamemin").show();
			$("#botaction").focus();
			return false;
		}
		if (umsg == "") {
			$("#ctnameblnk, #ctnamemin").hide();
			$("#ctemlblnk").show();
			$("#boturl").focus();
			return false;
		}
		$("#ctnameblnk, #ctnamemin, #ctemlblnk").hide();
		$("#uInput").val($("#uInput").val() + 'User-agent: ' + unam + '\n' + ueml + umsg + '\n\n');
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();
		return true;
	});
});

$(document).ready(function() {
	$('#addxml').click(function() {
		var myxml = $("#xmlsitemap").val();
		if (myxml == "") {
			$("#xmlsitemap").focus();
			return false;
		}
		$("#uInput").val($("#uInput").val() + 'Sitemap: ' + $("#xmlsitemap").val() + '\n\n');
		$('#uInput').select();
		return false;
	});
});

$(document).ready(function() {
	$('#mulwind').click(function() {
		var lines = $('#uInput').val().split(/\n/);
		var texts = [];
		for (var i = 0; i < lines.length; i++) {
			if (/\S/.test(lines[i])) {
				window.open($("#starturl").val() + lines[i] + $("#endurl").val());
			}
		}
        var txtval = $("#uInput").val(),
			ua = navigator.userAgent,
			tool_name = "Multiple URLs Opener";
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
		return false;
	});
});

$(document).ready(function() {
	$("#dipslay_result_list").hide();
	$("#gen_imdb").click(function() {
		$("#dipslay_result_list").show();
		var movie = $("#url_id").val();
		$.getJSON('https://www.omdbapi.com/?apikey=cb0442ce&t=' + movie, function(md) {
			var Poster = md.Poster,
				Title = md.Title,
				imdbID = md.imdbID,
				Year = md.Year,
				Rated = md.Rated,
				imdbRating = md.imdbRating,
				imdbVotes = md.imdbVotes,
				Plot = md.Plot,
				Actors = md.Actors,
				Director = md.Director,
				Writer = md.Writer,
				Genre = md.Genre,
				Language = md.Language;
			if (Poster == 'N/A' || !Poster) {
				Poster = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
			}
			$('#dipslay_result_main').html('<h2>IMDB Movies Search Result</h2><hr>' +
				'<div class="row">' +
				'	<div class="col-lg-4"><img src="' + Poster + '" width="250" height="330" class="img-responsive"></div>' +
				'	<div class="col-lg-8 table-responsive">' +
				'		<h1>' + Title + '</h1><table class="table small">' +
				'			<tbody>' +
				'				<tr>' +
				'					<td>IMDB ID</td>' +
				'					<td>' + imdbID + '</td>' +
				'					<td></td>' +
				'					<td><a target="_blank" class="btn btn-warning btn-xs" href="https://www.imdb.com/find?ref_=nv_sr_fn&q=' + movie + '&s=all"><span class="glyphicon glyphicon-play"></span> More Details on IMBD</a></td>' +
				'				</tr>' +
				'				<tr>' +
				'					<td>Year</td>' +
				'					<td>' + Year + '</td>' +
				'					<td>Rated</td>' +
				'					<td>' + Rated + '</td>' +
				'				</tr>' +
				'				<tr>' +
				'					<td nowrap>IMDB Rating</td>' +
				'					<td>' + imdbRating + '</td>' +
				'					<td nowrap>IMDB Votes</td>' +
				'					<td>' + imdbVotes + '</td>' +
				'				</tr>' +
				'				<tr>' +
				'					<td>Plot</td>' +
				'					<td colspan="3">' + Plot + '</td>' +
				'				</tr>' +
				'				<tr>' +
				'					<td>Actors</td>' +
				'					<td colspan="3">' + Actors + '</td>' +
				'				</tr>' +
				'				<tr>' +
				'					<td>Director</td>' +
				'					<td colspan="3">' + Director + '</td>' +
				'				</tr>' +
				'				<tr>' +
				'					<td>Writer</td>' +
				'					<td colspan="3">' + Writer + '</td>' +
				'				</tr>' +
				'				<tr>' +
				'					<td>Genre</td>' +
				'					<td>' + Genre + '</td>' +
				'					<td>Language</td>' +
				'					<td>' + Language + '</td>' +
				'				</tr>' +
				'			</tbody>' +
				'		</table>' +
				'	</div>' +
				'</div>');
		});
		$.getJSON('https://www.omdbapi.com/?s=' + movie, function(mv) {
			var totalResults = mv.totalResults;
			$('#dipslay_result_list').html('<p>About <kbd><b>' + totalResults + '</b></kbd> matches found for <kbd><b>' + movie + '</b></kbd>.</p><table class="table small">' +
				'		<thead>' +
				'			<tr class="bg-primary">' +
				'				<th>Title</th>' +
				'				<th>Year</th>' +
				'				<th>Type</th>' +
				'			</tr>' +
				'		</thead>' +
				'		<tbody id="movie_list">' +
				'		</tbody>' +
				'	</table>');
			$('#dipslay_result_list').append('');
			var myloop = JSON.stringify(mv.Search[0].Title, null, 2);
			for (i = 0; i < myloop.length; i++) {
				$('#movie_list').append('<tr><td><b>' + mv.Search[i].Title + '</b></td><td>' + mv.Search[i].Year + '</td><td><code>[' + mv.Search[i].Type + ']</code></td></tr>');
			}
		});
		return false;
	});
});

$(document).ready(function() {
	$("#addfeed").click(function() {
		$("#pre_feed").val($("#pre_feed").val() +
			'		<item>' + '\n' +
			'			<title>' + $("#feed_title").val() + '</title>' + '\n' +
			'			<link>' + $("#feed_url").val() + '</link>' + '\n' +
			'			<pubDate>' + $("#feed_day").val() + ', ' + $("#feed_date").val() + ' ' + $("#feed_month").val() + ' ' + $("#feed_year").val() + ' 12:00:00 GMT</pubDate>' + '\n' +
			'			<author>' + $("#feed_author").val() + '</author>' + '\n' +
			'			<category>' + $("#feed_cat").val() + '</category>' + '\n' +
			'			<description><![CDATA[ ' + '\n' +
			'			<h1>' + $("#feed_title").val() + '</h1>' + '\n' +
			'			' + $("#feed_description").val() + '\n' +
			'			]]></description>' + '\n' +
			'		</item>' + '\n');
		alert('Current Feed Added:' + '\n\n' + 'Title: ' + $("#feed_title").val() + '\n' + 'URL: ' + $("#feed_url").val() + '\n' + 'Description: ' + $("#feed_description").val() + '\n\n' + 'You can add more...');
		$("#feed_title, #feed_url, #feed_description, #feed_author, #feed_cat, #feed_day, #feed_date, #feed_month, #feed_year").val('');
		$("#feed_title").focus();
	});
	$("#genfeed").click(function() {
		$("#head_feed").val('<\?xml version="1.0" encoding="UTF-8"\?>' + '\n' +
			'<rss version="2.0">' + '\n' +
			'	<channel>' + '\n' +
			'		<title>' + $("#rss_title").val() + '</title>' + '\n' +
			'		<link>' + $("#rss_website").val() + '</link>' + '\n' +
			'		<description>' + $("#rss_description").val() + '</description>' + '\n' +
			'		<language>en-us</language>' + '\n' +
			'		<copyright><![CDATA[ ' + $("#rss_copyright").val() + ' ]]></copyright>' + '\n' +
			'		<image>' + '\n' +
			'			<url>' + $("#rss_logo").val() + '</url>' + '\n' +
			'			<title>' + $("#rss_title").val() + '</title>' + '\n' +
			'			<link>' + $("#rss_website").val() + '</link>' + '\n' +
			'		</image>' + '\n');
		$("#uInput").val($("#head_feed").val() + $("#pre_feed").val() + '	</channel>' + '\n' + '</rss>');
		$('#uInput').select();
        var txtval = $("#rss_website").val(),
			ua = navigator.userAgent,
			tool_name = "Generated RSS Feed";
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
	});
	$("#rss_reset").click(function() {
		$("#pre_feed").val('');
	});
});

$(document).ready(function() {
	var counter = 4;
	$("#addbtn").click(function() {
		if (counter > 50) {
			alert("Only 50 textboxes allowed");
			return false;
		}
		var newTextBoxDiv = $(document.createElement('div')).attr({
			id: 'TextBoxDiv' + counter,
			class: 'form-group'
		});
		newTextBoxDiv.after().html('<label for="name" class="col-lg-2 control-label">Find #' + counter + ' :</label>' + '<div class="col-lg-4"><input type="text" class="form-control input-sm" placeholder="Find #' + counter + '" id="findbox' + counter + '"></div>' + '<label for="name" class="col-lg-2 control-label">Replace #' + counter + ' :</label>' + '<div class="col-lg-4"><input type="text" class="form-control input-sm" placeholder="Replace #' + counter + '" id="replacebox' + counter + '"></div>');
		newTextBoxDiv.appendTo("#TextBoxesGroup");
		counter++;
	});
	$("#repbtn").click(function() {
		if (counter == 4) {
			alert("No more textbox to can be removed");
			return false;
		}
		counter--;
		$("#TextBoxDiv" + counter).remove();
	});
	RegExp.escape = function(str) {
		return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	};
	$("#fnrbtn").click(function() {
		var InputBox = $("#uInput").val();
		msg = '';
		for (i = 1; i < counter; i++) {
			FindWhat = $('#findbox' + i).val();
			ReplaceWhat = $('#replacebox' + i).val();
			InputBox = InputBox.replace(new RegExp(RegExp.escape(FindWhat), "gi"), ReplaceWhat);
		}
		$("#uInput").val(InputBox);
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();
	});
});

$(document).ready(function() {
	$("#genutm").click(function() {
		var gaurl = '',
			gacampaign = '',
			gasource = '',
			gamedium = '',
			gaterm = '',
			gacontent = '';
		if ($("#utmurl").val() == "") {
			$("#ctnamemin").show();
			$("#utmurl").focus();
			return false;
		} else {
			$("#ctnamemin").hide();
			gaurl = $("#utmurl").val();
		}
		if ($("#utmcampaign").val() == "") {
			$("#ctemlblnk").show();
			$("#utmcampaign").focus();
			return false;
		} else {
			$("#ctemlblnk").hide();
			if ($("#utmurl").val().indexOf("?") != -1) {
				gacampaign = '&utm_campaign=' + $("#utmcampaign").val();
			} else {
				gacampaign = '?utm_campaign=' + $("#utmcampaign").val();
			}
		}
		if ($("#utmsource").val() == "") {
			$("#ctemlvld").show();
			$("#utmsource").focus();
			return false;
		} else {
			$("#ctemlvld").hide();
			gasource = '&utm_source=' + $("#utmsource").val();
		}
		if ($("#utmmedium").val() == "") {
			$("#ctmsgblnk").show();
			$("#utmmedium").focus();
			return false;
		} else {
			$("#ctmsgblnk").hide();
			gamedium = '&utm_medium=' + $("#utmmedium").val();
		}
		if ($("#utmterm").val() == "") {
			gaterm = '';
		} else {
			gaterm = '&utm_term=' + $("#utmterm").val();
		}
		if ($("#utmcontent").val() == "") {
			gacontent = '';
		} else {
			gacontent = '&utm_content=' + $("#utmcontent").val();
		}
		$("#uInput").val(gaurl + gacampaign + gasource + gamedium + gaterm + gacontent);
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();
		return false;
	});
});

$(document).ready(function() {
	$("#wrptxt").click(function() {
		var lbn = $("#lnbrk").val();
		var text = $("#uInput").val(),
			text = text.replace(/(\r\n|\n|\r)/g, " "),
			tempArray = text.split("\n"),
			outputArray = [];
		for (var i = 0, len = tempArray.length; i < len; i++) {
			var line = tempArray[i].split(" "),
				num = 0;
			for (var j = 0, jLen = line.length; j < jLen; j++) {
				if (num + line[j].length + 1 >= lbn) {
					outputArray[outputArray.length];
				}
				num += line[j].length + 1;
				if (num >= lbn) {
					num = 0;
					outputArray[outputArray.length] = "\n";
				} else {
					outputArray[outputArray.length] = " ";
				}
				outputArray[outputArray.length] = line[j];
			}
			outputArray[outputArray.length] = "\n";
		}
		$("#uInput").val(outputArray.join(""));
		$("#uInput").val($("#uInput").val().replace(' ', ''));
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();
		return false;
	});
});

$(document).ready(function() {
	$("#txt2binary").click(function() {
		var txt = $("#uInput").val();
		var del = '';
		var len = txt.length;
		if (len == 0) return;
		var bin = '';
		for (i = 0; i < len; i++) {
			var a = txt.charCodeAt(i);
			var b = a.toString(2);
			if (b.length < 8) b = '0' + b;
			if (b.length < 8) b = '0' + b;
			if (b.length < 8) b = '0' + b;
			bin += b;
			if (i < len - 1) bin += del;
		}
		$("#uOutput").val(bin);
		$("#uOutput").select();
	});
});

$(document).ready(function() {
	$("#binary2txt").click(function() {
		var bin = $("#uInput").val();
		bin = bin.match(/[0-1]{8}/g);
		len = bin.length;
		if (len == 0) return;
		var txt = '';
		for (i = 0; i < len; i++) {
			b = bin[i];
			code = parseInt(b, 2);
			t = String.fromCharCode(code);
			txt += t;
		}
		$("#uOutput").val(txt);
		$("#uOutput").select();
	});
});

$(document).ready(function() {
	$("#MapDiv").hide();
	$("#weather").click(function(event) {
		$("#dipslay_result").html('<h3 align="center"><img src="https://www.joydeepdeb.com/images/loading.gif" border="0" width="16" height="16" alt="Loading..."> Loading...</h3>');
		var citi = $("#url_id").val();
		$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + citi + '&appid=43c43ce3853ed3841aa6168c8d51a4f2', function(jd) {
			var my_city = jd.name,
				my_lon = jd.coord.lon,
				my_lat = jd.coord.lat,
				my_country = jd.sys.country,
				my_icon = jd.weather[0].icon,
				my_main = jd.weather[0].main,
				my_desc = jd.weather[0].description,
				my_pressure = jd.main.pressure,
				my_humidity = jd.main.humidity,
				my_wind = jd.wind.speed,
				my_temp_min = jd.main.temp_min - 273.15,
				my_temp_max = jd.main.temp_max - 273.15,
				my_temp_dc = jd.main.temp - 273.15,
				my_temp_fh = 1.8 * (jd.main.temp - 273.15) + 32;
			my_temp_dc = Math.round((my_temp_dc * 100)) / 100;
			my_temp_min = Math.round((my_temp_min * 100)) / 100;
			my_temp_max = Math.round((my_temp_max * 100)) / 100;
			my_temp_fh = Math.round((my_temp_fh * 100)) / 100;
			var mapProp = {
				center: new google.maps.LatLng(my_lat, my_lon),
				zoom: 10,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById("MapDiv"), mapProp);
			$("#MapDiv").show();
			$('#dipslay_result').html('<table class="table table-hover table-striped">' + '	<tbody>' + '		<tr>' + '			<td><b>Location</b>:</td>' + '			<td>' + my_city + ', ' + my_country + '</td>' + '		</tr>' + '		<tr>' + '			<td><img src="https://openweathermap.org/img/w/' + my_icon + '.png" class="img-responsive"></td>' + '			<td><b>' + my_main + '</b> <br><span class="text-capitalize">' + my_desc + '</span></td>' + '		</tr>' + '		<tr>' + '			<td><b>Temperature</b>:</td>' + '			<td>' + my_temp_dc + ' &#176;C / ' + my_temp_fh + ' &#176;F <br>(Min. ' + my_temp_min + '&#176;C - Max. ' + my_temp_max + '&#176;C)</td>' + '		</tr>' + '		<tr>' + '			<td><b>Humidity</b>:</td>' + '			<td>' + my_humidity + '%</td>' + '		</tr>' + '		<tr>' + '			<td><b>Wind Speed</b>:</td>' + '			<td>' + my_wind + ' Mph</td>' + '		</tr>' + '		<tr>' + '			<td><b>Pressure</b>:</td>' + '			<td>' + my_pressure + ' hpa</td>' + '		</tr>' + '		<tr>' + '			<td><b>Geographic Coordinate</b>:</td>' + '			<td>[<a href="https://www.google.com/maps/@' + my_lat + ',' + my_lon + ',12z" target="_blank">' + my_lat + ', ' + my_lon + '</a>]</td>' + '		</tr>' + '	</tbody>' + '</table>');
		});
		return false;
	});
});

$(document).ready(function() {
	$("#celsius").keyup(function() {
		var inputdata = $("#celsius").val();
		var calculat = ((9 / 5) * inputdata + 32);
		$("#farenheit").val(calculat);
	});
});

$(document).ready(function() {
	$("#farenheit").keyup(function() {
		var inputdata = $("#farenheit").val();
		var calculat = ((5 / 9) * (inputdata - 32));
		$("#celsius").val(calculat);
	});
});

$(document).ready(function() {
	$('#json_person, #json_product, #json_website').hide();
	$('#website_name, #website_alt_name, #website_url').keyup(function() {
		var website_name = $("#website_name").val(),
			website_alt_name = $("#website_alt_name").val(),
			website_url = $("#website_url").val();
		$("#gen_schema_code").val('<script type="application/ld+json">' +
			'\n {' +
			'\n  "@context": "https:\/\/www.schema.org",' +
			'\n  "@type": "WebSite",' +
			'\n  "name": "' + website_name + '",' +
			'\n  "alternateName": "' + website_alt_name + '",' +
			'\n  "url": "' + website_url + '"' +
			'\n }' +
			'\n<\/script>');
	});
	$('#product_brand, #product_name, #product_url, #product_description, #product_rating, #product_reviews').keyup(function() {
		var product_brand = $("#product_brand").val(),
			product_name = $("#product_name").val(),
			product_url = $("#product_url").val(),
			product_description = $("#product_description").val(),
			product_rating = $("#product_rating").val(),
			product_reviews = $("#product_reviews").val();
		$("#gen_schema_code").val('<script type="application/ld+json">' +
			'\n {' +
			'\n   "@context": "https://www.schema.org",' +
			'\n   "@type": "product",' +
			'\n   "brand": "' + product_brand + '",' +
			'\n   "name": "' + product_name + '",' +
			'\n   "image": "' + product_url + '",' +
			'\n   "description": "' + product_description + '",' +
			'\n   "aggregateRating": {' +
			'\n     "@type": "aggregateRating",' +
			'\n     "ratingValue": "' + product_rating + '",' +
			'\n     "reviewCount": "' + product_reviews + '"' +
			'\n   }' +
			'\n }' +
			'\n<\/script>');
	});
	$('#person_name, #person_job, #person_phone, #person_email, #person_url, #person_address, #person_city, #person_state, #person_zip, #person_country, #person_dob').keyup(function() {
		var person_name = $("#person_name").val(),
			person_job = $("#person_job").val(),
			person_phone = $("#person_phone").val(),
			person_email = $("#person_email").val(),
			person_url = $("#person_url").val(),
			person_address = $("#person_address").val(),
			person_city = $("#person_city").val(),
			person_state = $("#person_state").val(),
			person_zip = $("#person_zip").val(),
			person_country = $("#person_country").val(),
			person_dob = $("#person_dob").val();
		$("#gen_schema_code").val('<script type="application/ld+json"> ' +
			'\n{' +
			'\n  "@context": "https:\/\/www.schema.org", ' +
			'\n  "@type": "person", ' +
			'\n  "name": "' + person_name + '", ' +
			'\n  "jobTitle": "' + person_job + '", ' +
			'\n  "telephone": "' + person_phone + '", ' +
			'\n  "email": "' + person_email + '", ' +
			'\n  "url": "' + person_url + '", ' +
			'\n  "address": { ' +
			'\n    "@type": "PostalAddress", ' +
			'\n    "streetAddress": "' + person_address + '", ' +
			'\n    "addressLocality": "' + person_city + '", ' +
			'\n    "addressRegion": "' + person_state + '", ' +
			'\n    "postalCode": "' + person_zip + '", ' +
			'\n    "addressCountry": "' + person_country + '" ' +
			'\n  }, ' +
			'\n  "birthDate": "' + person_dob + '" ' +
			'\n}' +
			'\n<\/script>');
	});
	$("#schema_type").change(function() {
		if ($(this).val() == "person") {
			$("#json_product, #json_website").fadeOut();
			$("#json_person").fadeIn();
			return false;
		}
		if ($(this).val() == "product") {
			$("#json_person, #json_website").fadeOut();
			$("#json_product").fadeIn();
			return false;
		}
		if ($(this).val() == "website") {
			$("#json_person, #json_product").fadeOut();
			$("#json_website").fadeIn();
			return false;
		}
	});
	$('#copyjson').click(function() {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#gen_schema_code').select());
		document.execCommand("copy");
		$temp.remove();
	});
});

$(document).ready(function() {
	$("#driver").click(function(event) {
		$("#youtube_screenshot").html('<h4 align="center"><img src="https://www.joydeepdeb.com/images/loading.gif" width="16" height="16" alt="Loading..."> Loading! Please Wait...</h4>');
		var myString = $("#page_vidid").val();
		var stringArray = myString.split('v=');
		var vidid = stringArray[1];
		$.getJSON('https://www.googleapis.com/youtube/v3/videos?id=' + vidid + '&key=AIzaSyBoBPDY0FDMMj01-USffDKQSJ_4KSjpNK8&part=snippet,contentDetails,statistics,status', function(jd) {
			$('#video_title').html('<b>' + jd.items[0].snippet.title + '</b>');
			$('#video_desc').html(jd.items[0].snippet.description);
			$('#video_tag').html(jd.items[0].snippet.tags);
			$('#video_tag').html(',&nbsp;' + jd.items[0].snippet.tags);
			$('#video_thumb').attr('src', jd.items[0].snippet.thumbnails.medium.url);
			$('#video_id').html(jd.items[0].id);
			$('#video_url').html('<a href="https://www.youtube.com/watch?v=' + jd.items[0].id + '" target="_blank">https://www.youtube.com/watch?v=' + jd.items[0].id + '</a>');
			$('#channel_name').html(jd.items[0].snippet.channelTitle);
			$('#channel_name').html('<a href="https://www.youtube.com/user/' + jd.items[0].snippet.channelTitle + '" target="_blank"><b>' + jd.items[0].snippet.channelTitle + '</b></a>');
			$('#channel_id').html(jd.items[0].snippet.channelId);
			$('#video_pd').html(jd.items[0].snippet.publishedAt);
			$('#video_tm').html(jd.items[0].contentDetails.duration);
			$('#viewCount').html(jd.items[0].statistics.viewCount);
			$('#likeCount').html(jd.items[0].statistics.likeCount);
			$('#dislikeCount').html(jd.items[0].statistics.dislikeCount);
			$('#commentCount').html(jd.items[0].statistics.commentCount);
			$("#youtube_screenshot").hide();
			$('#youtube_result').fadeIn();
			$('.number').formatNumber();
		});
        var txtval = $("#page_vidid").val(),
			ua = navigator.userAgent,
			tool_name = "Youtube Video Analytics";
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
		return false;
	});
});

$(document).ready(function() {
	$("#whois").click(function() {
		var txtval = $("input#url_id").val();
		if (txtval == "") {
			$("#ctnameblnk").show();
			$("input#url_id").focus();
			return false;
		}
        $("#ctnameblnk").hide();
        var txtval = $("#url_id").val(),
			ua = navigator.userAgent,
			tool_name = "WhoIs Domain Lookup";
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
	});
});

$(document).ready(function() {
	$("#chkseo").click(function() {
		var txtval = $("input#url_id").val();
		if (txtval == "") {
			$("#ctnameblnk").show();
			$("input#url_id").focus();
			return false;
		}
		$("#ctnameblnk").hide();
	});
});

$(document).ready(function() {
	$("#seotxt").click(function() {
		var txtval = $("input#url_id").val();
		if (txtval == "") {
			$("#ctnameblnk").show();
			$("input#url_id").focus();
			return false;
		}
		$("#ctnameblnk").hide();
	});
});

$(document).ready(function() {
	$("#submit").click(function() {
		var txtval = $("input#url_id").val();
		if (txtval == "") {
			$("#ctnameblnk").show();
			$("input#url_id").focus();
			return false;
		}
		$("#ctnameblnk").hide();
	});
});

$(document).ready(function() {
	$('#viewsource').click(function() {
		var lines = $('#uInput').val().split(/\n/);
		for (var i = 0; i < lines.length; i++) {
			if (/\S/.test(lines[i])) {
				window.open('https://www.joydeepdeb.com/tools/support/print-code.html?v=' + lines[i]);
			}
		}
		return false;
	});
});

$(document).ready(function() {
	$("#qr_code").click(function() {
		var qr_txt = $("#qr_txt").val();
		var qr_encode = encodeURIComponent(qr_txt);
		var qr_size = $("#qr_size").val();
		$('#gen_qr_code').html('<table><tr><td><img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=' + qr_encode + '&choe=UTF-8" width="300" height="300" border="0" alt="QR Code Generated"></td><td><h2>QR Code Generated</h2><p>Your QR Code has been generated. Please right click on the image and save your file.</p></td></tr></table>');
		return false;
	});
});

$(document).ready(function() {
	$("#pingxml").click(function() {
		$('#postping').html('<pre class="text-center"><img src="https://www.joydeepdeb.com/images/loading.gif" width="16" height="16" alt="Loading..."> Loading...</pre>');
		var url_id = $("#url").val();
		$.ajax({
			type: "post",
			url: "https://www.joydeepdeb.com/tools/support/ping-print.html",
			data: {
				url_id: url_id
			},
			cache: false,
			success: function(data) {
				$('#postping').html(data);
			}
		});
		return false;
	});
});

$(document).ready(function() {
	$('#My_hide').hide();
	$("#pagespeed").click(function(event) {
		$("#result_pagespeed").html('<div class="text-center"><h3><img src="https://www.joydeepdeb.com/images/loading.gif" border="0" width="16" height="16" alt="Loading..."> Please Wait...</h3>While we are preparing your report.<br><br></div>');
		var PS_URL = $("#url_id").val();

		$.getJSON('https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=' + PS_URL + '&screenshot=true&strategy=desktop&key=AIzaSyDc3GoegdNG8JZvAWVyGCt2o5KdiZd_BN8', function(dd) {

			var my_dt_score = dd.ruleGroups.SPEED.score,
				dp_my_dt_score = my_dt_score,
				my_dt_src_shot = dd.screenshot.data;

			my_dt_src_shot = my_dt_src_shot.replace(/_/g, "/");
			my_dt_src_shot = my_dt_src_shot.replace(/-/g, "+");

			if (dp_my_dt_score >= "0" && dp_my_dt_score <= "60") {
				dp_my_dt_score = '<div class="alert alert-danger"><b>Desktop Speed</b><h1>' + my_dt_score + ' <small>/100</small></h1></div>';
				dp_dt_prog_bar = '<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="' + my_dt_score + '"  aria-valuemin="0" aria-valuemax="100" style="width:' + my_dt_score + '%;"><b>Score ' + my_dt_score + '%</b></div>';
			} else if (dp_my_dt_score >= "61" && dp_my_dt_score <= "79") {
				dp_my_dt_score = '<div class="alert alert-warning"><b>Desktop Speed</b><h1>' + my_dt_score + ' <small>/100</small></h1></div>';
				dp_dt_prog_bar = '<div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="' + my_dt_score + '"  aria-valuemin="0" aria-valuemax="100" style="width:' + my_dt_score + '%;"><b>Score ' + my_dt_score + '%</b></div>';
			} else if (dp_my_dt_score >= "80" && dp_my_dt_score <= "100") {
				dp_my_dt_score = '<div class="alert alert-success"><b>Desktop Speed</b><h1>' + my_dt_score + ' <small>/100</small></h1></div>';
				dp_dt_prog_bar = '<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="' + my_dt_score + '"  aria-valuemin="0" aria-valuemax="100" style="width:' + my_dt_score + '%;"><b>Score ' + my_dt_score + '%</b></div>';
			}

			$('#dtspeed').html(dp_my_dt_score);
			$('#dtspeed').html(dp_my_dt_score);
			$('#dtspeed').html(dp_my_dt_score);
			$('#my_dt_scr_shot').html('<img src="data:image/jpeg;base64,' + my_dt_src_shot + '" class="img-responsive img-thumbnail" alt="Mobile Screenshot">');
			$('#my_dt_prog_bar').html(dp_dt_prog_bar);

			if (dd.formattedResults.ruleResults.AvoidLandingPageRedirects.ruleImpact != "0.0") {

				hrefval = dd.formattedResults.ruleResults.AvoidLandingPageRedirects.summary.format,
					hrefval = hrefval.replace(/{{NUM_REDIRECTS}}/g, '<b>' + dd.formattedResults.ruleResults.AvoidLandingPageRedirects.summary.args[0].value + '</b>'),
					hrefval1 = dd.formattedResults.ruleResults.AvoidLandingPageRedirects.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.AvoidLandingPageRedirects.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_AvoidLandingPageRedirects').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#AvoidLandingPageRedirects"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + dd.formattedResults.ruleResults.AvoidLandingPageRedirects.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="AvoidLandingPageRedirects" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = dd.formattedResults.ruleResults.AvoidLandingPageRedirects.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.AvoidLandingPageRedirects.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_AvoidLandingPageRedirects').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#AvoidLandingPageRedirects"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + dd.formattedResults.ruleResults.AvoidLandingPageRedirects.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="AvoidLandingPageRedirects" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (dd.formattedResults.ruleResults.EnableGzipCompression.ruleImpact != "0.0") {

				hrefval = dd.formattedResults.ruleResults.EnableGzipCompression.summary.format,
					hrefval1 = dd.formattedResults.ruleResults.EnableGzipCompression.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.EnableGzipCompression.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>'),
					hrefval1 = hrefval1.replace(/{{SIZE_IN_BYTES}}/g, '<b>' + dd.formattedResults.ruleResults.EnableGzipCompression.urlBlocks[0].header.args[1].value + '</b>'),
					hrefval1 = hrefval1.replace(/{{PERCENTAGE}}/g, '<b>' + dd.formattedResults.ruleResults.EnableGzipCompression.urlBlocks[0].header.args[2].value + '</b>');

				$('#DP_DT_EnableGzipCompression').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#EnableGzipCompression"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + dd.formattedResults.ruleResults.EnableGzipCompression.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="EnableGzipCompression" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = dd.formattedResults.ruleResults.EnableGzipCompression.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.EnableGzipCompression.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_EnableGzipCompression').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#EnableGzipCompression"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + dd.formattedResults.ruleResults.EnableGzipCompression.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="EnableGzipCompression" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (dd.formattedResults.ruleResults.LeverageBrowserCaching.ruleImpact != "0.0") {

				hrefval = dd.formattedResults.ruleResults.LeverageBrowserCaching.summary.format,
					hrefval1 = dd.formattedResults.ruleResults.LeverageBrowserCaching.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.LeverageBrowserCaching.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_LeverageBrowserCaching').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#LeverageBrowserCaching"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + dd.formattedResults.ruleResults.LeverageBrowserCaching.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="LeverageBrowserCaching" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = dd.formattedResults.ruleResults.LeverageBrowserCaching.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.LeverageBrowserCaching.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_LeverageBrowserCaching').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#LeverageBrowserCaching"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + dd.formattedResults.ruleResults.LeverageBrowserCaching.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="LeverageBrowserCaching" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (dd.formattedResults.ruleResults.MainResourceServerResponseTime.ruleImpact != "0.0") {

				hrefval = dd.formattedResults.ruleResults.MainResourceServerResponseTime.urlBlocks[0].header.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.MainResourceServerResponseTime.urlBlocks[0].header.args[1].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>'),
					hrefval = hrefval.replace(/{{RESPONSE_TIME}}/g, '<b>' + dd.formattedResults.ruleResults.MainResourceServerResponseTime.urlBlocks[0].header.args[0].value + '</b>');

				$('#DP_DT_MainResourceServerResponseTime').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#MainResourceServerResponseTime"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + dd.formattedResults.ruleResults.MainResourceServerResponseTime.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="MainResourceServerResponseTime" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = dd.formattedResults.ruleResults.MainResourceServerResponseTime.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.MainResourceServerResponseTime.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_MainResourceServerResponseTime').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#MainResourceServerResponseTime"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + dd.formattedResults.ruleResults.MainResourceServerResponseTime.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="MainResourceServerResponseTime" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (dd.formattedResults.ruleResults.MinifyCss.ruleImpact != "0.0") {

				hrefval = dd.formattedResults.ruleResults.MinifyCss.summary.format,
					hrefval1 = dd.formattedResults.ruleResults.MinifyCss.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.MinifyCss.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>'),
					hrefval1 = hrefval1.replace(/{{SIZE_IN_BYTES}}/g, '<b>' + dd.formattedResults.ruleResults.MinifyCss.urlBlocks[0].header.args[1].value + '</b>'),
					hrefval1 = hrefval1.replace(/{{PERCENTAGE}}/g, '<b>' + dd.formattedResults.ruleResults.MinifyCss.urlBlocks[0].header.args[2].value + '</b>');

				$('#DP_DT_MinifyCss').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#MinifyCss"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + dd.formattedResults.ruleResults.MinifyCss.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="MinifyCss" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = dd.formattedResults.ruleResults.MinifyCss.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.MinifyCss.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_MinifyCss').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#MinifyCss"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + dd.formattedResults.ruleResults.MinifyCss.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="MinifyCss" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}
			if (dd.formattedResults.ruleResults.MinifyHTML.ruleImpact != "0.0") {

				hrefval = dd.formattedResults.ruleResults.MinifyHTML.summary.format,
					hrefval1 = dd.formattedResults.ruleResults.MinifyHTML.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.MinifyHTML.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>'),
					hrefval1 = hrefval1.replace(/{{SIZE_IN_BYTES}}/g, '<b>' + dd.formattedResults.ruleResults.MinifyHTML.urlBlocks[0].header.args[1].value + '</b>'),
					hrefval1 = hrefval1.replace(/{{PERCENTAGE}}/g, '<b>' + dd.formattedResults.ruleResults.MinifyHTML.urlBlocks[0].header.args[2].value + '</b>');

				$('#DP_DT_MinifyHTML').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#MinifyHTML"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + dd.formattedResults.ruleResults.MinifyHTML.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="MinifyHTML" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = dd.formattedResults.ruleResults.MinifyHTML.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.MinifyHTML.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_MinifyHTML').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#MinifyHTML"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + dd.formattedResults.ruleResults.MinifyHTML.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="MinifyHTML" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (dd.formattedResults.ruleResults.MinifyJavaScript.ruleImpact != "0.0") {

				hrefval = dd.formattedResults.ruleResults.MinifyJavaScript.summary.format,
					hrefval1 = dd.formattedResults.ruleResults.MinifyJavaScript.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.MinifyJavaScript.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>'),
					hrefval1 = hrefval1.replace(/{{SIZE_IN_BYTES}}/g, '<b>' + dd.formattedResults.ruleResults.MinifyJavaScript.urlBlocks[0].header.args[1].value + '</b>'),
					hrefval1 = hrefval1.replace(/{{PERCENTAGE}}/g, '<b>' + dd.formattedResults.ruleResults.MinifyJavaScript.urlBlocks[0].header.args[2].value + '</b>');

				$('#DP_DT_MinifyJavaScript').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#MinifyJavaScript"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + dd.formattedResults.ruleResults.MinifyJavaScript.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="MinifyJavaScript" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = dd.formattedResults.ruleResults.MinifyJavaScript.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.MinifyJavaScript.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_MinifyJavaScript').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#MinifyJavaScript"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + dd.formattedResults.ruleResults.MinifyJavaScript.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="MinifyJavaScript" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (dd.formattedResults.ruleResults.MinimizeRenderBlockingResources.ruleImpact != "0.0") {

				hrefval = dd.formattedResults.ruleResults.MinimizeRenderBlockingResources.summary.format,
					hrefval = hrefval.replace(/{{NUM_SCRIPTS}}/g, '<b>' + dd.formattedResults.ruleResults.MinimizeRenderBlockingResources.summary.args[0].value + '</b>'),
					hrefval = hrefval.replace(/{{NUM_CSS}}/g, '<b>' + dd.formattedResults.ruleResults.MinimizeRenderBlockingResources.summary.args[1].value + '</b>'),
					hrefval1 = dd.formattedResults.ruleResults.MinimizeRenderBlockingResources.urlBlocks[0].header.format;
				// hrefval1 = hrefval1.replace(/{{NUM_CSS}}/g, '<b>' + dd.formattedResults.ruleResults.MinimizeRenderBlockingResources.summary.args[1].value + '</b>');

				$('#DP_DT_MinimizeRenderBlockingResources').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-danger">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#MinimizeRenderBlockingResources"><span class="text-danger glyphicon glyphicon-remove-sign"></span> ' + dd.formattedResults.ruleResults.MinimizeRenderBlockingResources.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="MinimizeRenderBlockingResources" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = dd.formattedResults.ruleResults.MinimizeRenderBlockingResources.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.MinimizeRenderBlockingResources.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_MinimizeRenderBlockingResources').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#MinimizeRenderBlockingResources"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + dd.formattedResults.ruleResults.MinimizeRenderBlockingResources.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="MinimizeRenderBlockingResources" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (dd.formattedResults.ruleResults.OptimizeImages.ruleImpact != "0.0") {

				hrefval = dd.formattedResults.ruleResults.OptimizeImages.summary.format,
					hrefval1 = dd.formattedResults.ruleResults.OptimizeImages.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.OptimizeImages.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>'),
					hrefval1 = hrefval1.replace(/{{SIZE_IN_BYTES}}/g, '<b>' + dd.formattedResults.ruleResults.OptimizeImages.urlBlocks[0].header.args[1].value + '</b>'),
					hrefval1 = hrefval1.replace(/{{PERCENTAGE}}/g, '<b>' + dd.formattedResults.ruleResults.OptimizeImages.urlBlocks[0].header.args[2].value + '</b>');

				$('#DP_DT_OptimizeImages').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-danger">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#OptimizeImages"><span class="text-danger glyphicon glyphicon-remove-sign"></span> ' + dd.formattedResults.ruleResults.OptimizeImages.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="OptimizeImages" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = dd.formattedResults.ruleResults.OptimizeImages.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.OptimizeImages.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_OptimizeImages').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#OptimizeImages"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + dd.formattedResults.ruleResults.OptimizeImages.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="OptimizeImages" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (dd.formattedResults.ruleResults.PrioritizeVisibleContent.ruleImpact != "0.0") {

				hrefval = dd.formattedResults.ruleResults.PrioritizeVisibleContent.summary.format,
					hrefval1 = dd.formattedResults.ruleResults.PrioritizeVisibleContent.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.PrioritizeVisibleContent.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>'),
					hrefval1 = hrefval1.replace(/{{SIZE_IN_BYTES}}/g, '<b>' + dd.formattedResults.ruleResults.PrioritizeVisibleContent.urlBlocks[0].header.args[1].value + '</b>'),
					hrefval1 = hrefval1.replace(/{{PERCENTAGE}}/g, '<b>' + dd.formattedResults.ruleResults.PrioritizeVisibleContent.urlBlocks[0].header.args[2].value + '</b>');

				$('#DP_DT_PrioritizeVisibleContent').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#PrioritizeVisibleContent"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + dd.formattedResults.ruleResults.PrioritizeVisibleContent.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="PrioritizeVisibleContent" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = dd.formattedResults.ruleResults.PrioritizeVisibleContent.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + dd.formattedResults.ruleResults.PrioritizeVisibleContent.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_DT_PrioritizeVisibleContent').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#PrioritizeVisibleContent"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + dd.formattedResults.ruleResults.PrioritizeVisibleContent.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="PrioritizeVisibleContent" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}
		});

		$.getJSON('https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=' + PS_URL + '&screenshot=true&strategy=mobile&key=AIzaSyDc3GoegdNG8JZvAWVyGCt2o5KdiZd_BN8', function(jd) {
			var my_mb_score = jd.ruleGroups.SPEED.score,
				my_mb_frnly = jd.ruleGroups.USABILITY.score,
				my_url_id = jd.id,
				my_response_code = jd.responseCode,
				my_url_title = jd.title,
				my_mb_score = jd.ruleGroups.SPEED.score,
				my_mb_frnly = jd.ruleGroups.USABILITY.score,
				my_numberResources = jd.pageStats.numberResources,
				my_numberStaticResources = jd.pageStats.numberStaticResources,
				my_numberJsResources = jd.pageStats.numberJsResources,
				my_numberCssResources = jd.pageStats.numberCssResources,
				my_numberHosts = jd.pageStats.numberHosts,
				my_totalRequestBytes = jd.pageStats.totalRequestBytes,
				my_htmlResponseBytes = jd.pageStats.htmlResponseBytes,
				my_cssResponseBytes = jd.pageStats.cssResponseBytes,
				my_imageResponseBytes = jd.pageStats.imageResponseBytes,
				my_javascriptResponseBytes = jd.pageStats.javascriptResponseBytes,
				my_otherResponseBytes = jd.pageStats.otherResponseBytes,
				my_mb_src_shot = jd.screenshot.data;

			my_mb_src_shot = my_mb_src_shot.replace(/_/g, "/");
			my_mb_src_shot = my_mb_src_shot.replace(/-/g, "+");

			var dp_my_mb_frnly = my_mb_frnly;

			if (dp_my_mb_frnly >= "0" && dp_my_mb_frnly <= "60") {
				dp_my_mb_frnly = '<div class="alert alert-danger"><b>Mobile Friendliness</b><h1>' + my_mb_frnly + ' <small>/100</small></h1></div>';
				dp_mf_prog_bar = '<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="' + my_mb_frnly + '"  aria-valuemin="0" aria-valuemax="100" style="width:' + my_mb_frnly + '%;"><b>Score ' + my_mb_frnly + '%</b></div>';
			} else if (dp_my_mb_frnly >= "61" && dp_my_mb_frnly <= "79") {
				dp_my_mb_frnly = '<div class="alert alert-warning"><b>Mobile Friendliness</b><h1>' + my_mb_frnly + ' <small>/100</small></h1></div>';
				dp_mf_prog_bar = '<div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="' + my_mb_frnly + '"  aria-valuemin="0" aria-valuemax="100" style="width:' + my_mb_frnly + '%;"><b>Score ' + my_mb_frnly + '%</b></div>';
			} else if (dp_my_mb_frnly >= "80" && dp_my_mb_frnly <= "100") {
				dp_my_mb_frnly = '<div class="alert alert-success"><b>Mobile Friendliness</b><h1>' + my_mb_frnly + ' <small>/100</small></h1></div>';
				dp_mf_prog_bar = '<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="' + my_mb_frnly + '"  aria-valuemin="0" aria-valuemax="100" style="width:' + my_mb_frnly + '%;"><b>Score ' + my_mb_frnly + '%</b></div>';
			}

			var dp_my_mb_score = my_mb_score;

			if (dp_my_mb_score >= "0" && dp_my_mb_score <= "60") {
				dp_my_mb_score = '<div class="alert alert-danger"><b>Mobile Speed</b><h1>' + my_mb_score + ' <small>/100</small></h1></div>';
				dp_mb_prog_bar = '<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="' + my_mb_score + '"  aria-valuemin="0" aria-valuemax="100" style="width:' + my_mb_score + '%;"><b>Score ' + my_mb_score + '%</b></div>';
			} else if (dp_my_mb_score >= "61" && dp_my_mb_score <= "79") {
				dp_my_mb_score = '<div class="alert alert-warning"><b>Mobile Speed</b><h1>' + my_mb_score + ' <small>/100</small></h1></div>';
				dp_mb_prog_bar = '<div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="' + my_mb_score + '"  aria-valuemin="0" aria-valuemax="100" style="width:' + my_mb_score + '%;"><b>Score ' + my_mb_score + '%</b></div>';
			} else if (dp_my_mb_score >= "80" && dp_my_mb_score <= "100") {
				dp_my_mb_score = '<div class="alert alert-success"><b>Mobile Speed</b><h1>' + my_mb_score + ' <small>/100</small></h1></div>';
				dp_mb_prog_bar = '<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="' + my_mb_score + '"  aria-valuemin="0" aria-valuemax="100" style="width:' + my_mb_score + '%;"><b>Score ' + my_mb_score + '%</b></div>';
			}

			$('#mbfrnly').html(dp_my_mb_frnly);
			$('#mbspeed').html(dp_my_mb_score);
			$('#my_mb_scr_shot').html('<img src="data:image/jpeg;base64,' + my_mb_src_shot + '" class="img-responsive img-thumbnail" alt="Mobile Screenshot">');
			$('#my_mb_prog_bar').html(dp_mb_prog_bar);


			if (jd.formattedResults.ruleResults.AvoidPlugins.ruleImpact != "0.0") {

				hrefval = jd.formattedResults.ruleResults.AvoidPlugins.summary.format,
					hrefval1 = jd.formattedResults.ruleResults.AvoidPlugins.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + jd.formattedResults.ruleResults.AvoidPlugins.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_MB_AvoidPlugins').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#AvoidPlugins"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + jd.formattedResults.ruleResults.AvoidPlugins.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="AvoidPlugins" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = jd.formattedResults.ruleResults.AvoidPlugins.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + jd.formattedResults.ruleResults.AvoidPlugins.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_MB_AvoidPlugins').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#AvoidPlugins"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + jd.formattedResults.ruleResults.AvoidPlugins.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="AvoidPlugins" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (jd.formattedResults.ruleResults.ConfigureViewport.ruleImpact != "0.0") {

				hrefval = jd.formattedResults.ruleResults.ConfigureViewport.summary.format,
					hrefval1 = jd.formattedResults.ruleResults.ConfigureViewport.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + jd.formattedResults.ruleResults.ConfigureViewport.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_MB_ConfigureViewport').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#ConfigureViewport"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + jd.formattedResults.ruleResults.ConfigureViewport.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="ConfigureViewport" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = jd.formattedResults.ruleResults.ConfigureViewport.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + jd.formattedResults.ruleResults.ConfigureViewport.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_MB_ConfigureViewport').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#ConfigureViewport"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + jd.formattedResults.ruleResults.ConfigureViewport.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="ConfigureViewport" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (jd.formattedResults.ruleResults.SizeContentToViewport.ruleImpact != "0.0") {

				hrefval = jd.formattedResults.ruleResults.SizeContentToViewport.summary.format,
					hrefval1 = jd.formattedResults.ruleResults.SizeContentToViewport.urlBlocks[0].header.format,
					hrefval1 = hrefval1.replace(/{{BEGIN_LINK}}/g, '<a href="' + jd.formattedResults.ruleResults.SizeContentToViewport.urlBlocks[0].header.args[0].value + '" target="_blank">'),
					hrefval1 = hrefval1.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_MB_SizeContentToViewport').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#SizeContentToViewport"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + jd.formattedResults.ruleResults.SizeContentToViewport.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="SizeContentToViewport" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p><p>' + hrefval1 + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = jd.formattedResults.ruleResults.SizeContentToViewport.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + jd.formattedResults.ruleResults.SizeContentToViewport.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_MB_SizeContentToViewport').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#SizeContentToViewport"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + jd.formattedResults.ruleResults.SizeContentToViewport.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="SizeContentToViewport" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (jd.formattedResults.ruleResults.SizeTapTargetsAppropriately.ruleImpact != "0.0") {

				hrefval = jd.formattedResults.ruleResults.SizeTapTargetsAppropriately.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + jd.formattedResults.ruleResults.SizeTapTargetsAppropriately.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_MB_SizeTapTargetsAppropriately').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#SizeTapTargetsAppropriately"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + jd.formattedResults.ruleResults.SizeTapTargetsAppropriately.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="SizeTapTargetsAppropriately" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = jd.formattedResults.ruleResults.SizeTapTargetsAppropriately.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + jd.formattedResults.ruleResults.SizeTapTargetsAppropriately.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_MB_SizeTapTargetsAppropriately').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#SizeTapTargetsAppropriately"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + jd.formattedResults.ruleResults.SizeTapTargetsAppropriately.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="SizeTapTargetsAppropriately" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			if (jd.formattedResults.ruleResults.UseLegibleFontSizes.ruleImpact != "0.0") {

				hrefval = jd.formattedResults.ruleResults.UseLegibleFontSizes.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + jd.formattedResults.ruleResults.UseLegibleFontSizes.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_MB_UseLegibleFontSizes').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-warning">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#UseLegibleFontSizes"><span class="text-warning glyphicon glyphicon-exclamation-sign"></span> ' + jd.formattedResults.ruleResults.UseLegibleFontSizes.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="UseLegibleFontSizes" class="panel-collapse collapse">' +
					'			<div class="panel-body"><p>' + hrefval + '</p></div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			} else {

				var
					hrefval = jd.formattedResults.ruleResults.UseLegibleFontSizes.summary.format,
					hrefval = hrefval.replace(/{{BEGIN_LINK}}/g, '<a href="' + jd.formattedResults.ruleResults.UseLegibleFontSizes.summary.args[0].value + '" target="_blank">'),
					hrefval = hrefval.replace(/{{END_LINK}}/g, '</a>');

				$('#DP_MB_UseLegibleFontSizes').html('' +
					'<div class="panel-group">' +
					'	<div class="panel panel-info">' +
					'		<div class="panel-heading" data-toggle="collapse" href="#UseLegibleFontSizes"><span class="text-success glyphicon glyphicon-ok-circle"></span> ' + jd.formattedResults.ruleResults.UseLegibleFontSizes.localizedRuleName + '<span class="caret"></span></div>' +
					'		<div id="UseLegibleFontSizes" class="panel-collapse collapse">' +
					'			<div class="panel-body">' + hrefval + '</div>' +
					'		</div>' +
					'	</div>' +
					'</div>');

			}

			$('#other').html('<div class="panel panel-default">' +
				'	<div class="panel-heading"><b><span class="glyphicon glyphicon-file"></span> ' + my_url_title + '</b></div>' +
				'	<div class="panel-body"><a href="' + my_url_id + '" target="_blank">' + my_url_id + '</a></div>' +
				'</div>' +
				'<div class="row">' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-primary">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-ok"></span> Response Code</div><div class="panel-body"><span class="number">' + my_response_code + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-default">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-folder-close"></span> Total Resources</div><div class="panel-body"><span class="number">' + my_numberResources + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-warning">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-transfer"></span> DNS Lookups (Host)</div><div class="panel-body"><span class="number">' + my_numberHosts + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'</div>' +

				'<div class="row">' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-success">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-file"></span> Static Resources</div><div class="panel-body"><span class="number">' + my_numberStaticResources + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-danger">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-cog"></span> Java Script Resources</div><div class="panel-body"><span class="number">' + my_numberJsResources + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-info">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-link"></span> CSS Resources</div><div class="panel-body"><span class="number">' + my_numberCssResources + '</span></div>' +
				'		</div>' +
				'	</div>' +

				'</div>' +
				'<div class="row">' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-default">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-save"></span> HTML Response Bytes</div><div class="panel-body"><span class="number">' + my_htmlResponseBytes + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-default">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-save"></span> CSS Response Bytes</div><div class="panel-body"><span class="number">' + my_cssResponseBytes + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-default">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-save"></span> Image Response Bytes</div><div class="panel-body"><span class="number">' + my_imageResponseBytes + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'</div>' +
				'<div class="row">' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-default">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-save"></span> JS Response Bytes</div><div class="panel-body"><span class="number">' + my_javascriptResponseBytes + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-default">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-save"></span> Other Response Bytes</div><div class="panel-body"><span class="number">' + my_otherResponseBytes + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'	<div class="col-lg-4">' +
				'		<div class="panel panel-default">' +
				'			<div class="panel-heading"><span class="glyphicon glyphicon-save"></span> Total Request Bytes</div><div class="panel-body"><span class="number">' + my_totalRequestBytes + '</span></div>' +
				'		</div>' +
				'	</div>' +
				'</div>');
			$('#result_pagespeed').html($('#My_content').html());
			$('.number').formatNumber();
        });
        var txtval = $("#url_id").val(),
			ua = navigator.userAgent,
			tool_name = "Google PageSpeed Tool";
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
		return false;
	});
});

$(document).ready(function() {
	var len = $('#uInput').val().length;
	var lin = $('#uInput').val().split(/\r*\n/).length;
	var ch = len;
	var lc = lin;
	$('#mini_count').html('[' + ch + ']');
	$('#line_count').html('[' + lc + ']');
	$('.number').formatNumber();
	$("#mini").click(function() {
		var text = $("#uInput").val(),
			text = text.replace(/\r\n|\n|\r/g, ''),
			text = text.replace(/  /g, ' '),
			text = text.replace(/; /g, ';'),
			text = text.replace(/: /g, ':'),
			text = text.replace(/{ /g, '{'),
			text = text.replace(/ {/g, '{'),
			text = text.replace(/} /g, '}'),
			text = text.replace(/ }/g, '}'),
			text = text.replace(/;}/g, '}'),
			text = text.replace(/= /g, '='),
			text = text.replace(/ =/g, '='),
			text = text.replace(/	/g, '');
		$("#uInput").val(text);
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#uInput').select());
		document.execCommand("copy");
		$temp.remove();
		var len = $('#uInput').val().length;
		var lin = $('#uInput').val().split(/\r*\n/).length;
		var ch = len;
		var lc = lin;
		$('#mini_count').html('[' + ch + ']');
		$('#line_count').html('[' + lc + ']');
		$('.number').formatNumber();
	});
	$('#uInput').keyup(function() {
		var len = $('#uInput').val().length;
		var lin = $('#uInput').val().split(/\r*\n/).length;
		var ch = len;
		var lc = lin;
		$('#mini_count').html('[' + ch + ']');
		$('#line_count').html('[' + lc + ']');
		$('.number').formatNumber();
	});
});

(function($) {
	$.fn.extend({
		formatNumber: function(options) {
			var defaults = {
				cents: '.',
				decimal: ','
			}
			var o = $.extend(defaults, options);
			return this.each(function() {
				var thiz = $(this),
					values, x, x1, x2;
				values = $.trim(thiz.html());
				values += '';
				x = values.split(o.cents);
				x1 = x[0];
				x2 = x.length > 1 ? o.cents + x[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while (rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + o.decimal + '$2');
				}
				thiz.html(x1 + x2);
			});
		}
	});
})(jQuery);

function echeck(str) {
	var at = "@";
	var dot = ".";
	var lat = str.indexOf(at);
	var lstr = str.length;
	var ldot = str.indexOf(dot);
	if (str.indexOf(at) == -1) {
		return false;
	}
	if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr - 1) {
		return false;
	}
	if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr - 1) {
		return false;
	}
	if (str.indexOf(at, (lat + 1)) != -1) {
		return false;
	}
	if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
		return false;
	}
	if (str.indexOf(dot, (lat + 2)) == -1) {
		return false;
	}
	if (str.indexOf(" ") != -1) {
		return false;
	}
	return true;
}


$(document).ready(function() {
	$("#socpre").click(function() {
		var txtval = $("#url_id").val(),
			ua = navigator.userAgent,
			tool_name = "Social Media Presence";
		if (txtval == "") {
			$("#ctnameblnk").show();
			$("#url_id").focus();
			return false;
		}
		$("#ctnameblnk").hide();
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
	});
});

$(document).ready(function() {
	$("#chkhead").click(function() {
		var txtval = $("#url_id").val(),
			ua = navigator.userAgent,
			tool_name = "Response Code Checker";
		if (txtval == "") {
			$("#ctnameblnk").show();
			$("#url_id").focus();
			return false;
		}
		$("#ctnameblnk").hide();
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
	});
});

$(document).ready(function() {
	$("#get_ip").click(function() {
		var txtval = $("#url_id").val(),
			ua = navigator.userAgent,
			tool_name = "IP Address Lookup";
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
	});
});

$(document).ready(function() {
	$("#alexa-rank").click(function() {
		var txtval = $("#url_id").val(),
			ua = navigator.userAgent,
			tool_name = "Alexa Rank Checker";
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
	});
});

$(document).ready(function() {
	$("#viewsource").click(function() {
		var txtval = $("#uInput").val(),
			ua = navigator.userAgent,
			tool_name = "Multiple Page Source Code";
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
	});
});

$(document).ready(function() {
	$("#metadata").click(function() {
		var txtval = $("#url_id").val(),
			ua = navigator.userAgent,
			tool_name = "META Tags/Data Reader";
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
	});
});

$(document).ready(function() {
	$("#screenshot").click(function(event) {
		$("#MbSs").html('<div class="text-center"><h3><img src="https://www.joydeepdeb.com/images/loading.gif" border="0" width="16" height="16" alt="Loading..."> Please Wait...</h3>While we are preparing the <b>Mobile</b> screenshots.<br><br></div>');
		$("#DtSs").html('<div class="text-center"><h3><img src="https://www.joydeepdeb.com/images/loading.gif" border="0" width="16" height="16" alt="Loading..."> Please Wait...</h3>While we are preparing the <b>Desktop</b> screenshots.<br><br></div>');
		var PS_URL = $("#url_id").val();
		$.getJSON('https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=' + PS_URL + '&screenshot=true&strategy=mobile&key=AIzaSyDc3GoegdNG8JZvAWVyGCt2o5KdiZd_BN8', function(jd) {
			var my_url_id = jd.id,
				my_mb_src_shot = jd.screenshot.data;
			my_mb_src_shot = my_mb_src_shot.replace(/_/g, "/");
			my_mb_src_shot = my_mb_src_shot.replace(/-/g, "+");
			$('#MbSs').html('<h3>Mobile Screenshot</h3> <img src="data:image/jpeg;base64,' + my_mb_src_shot + '" class="img-responsive img-thumbnail" alt="Mobile Screenshot">');
		});
		$.getJSON('https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=' + PS_URL + '&screenshot=true&strategy=desktop&key=AIzaSyDc3GoegdNG8JZvAWVyGCt2o5KdiZd_BN8', function(dd) {
			var my_db_src_shot = dd.screenshot.data;
			my_db_src_shot = my_db_src_shot.replace(/_/g, "/");
			my_db_src_shot = my_db_src_shot.replace(/-/g, "+");
			$('#DtSs').html('<h3>Desktop Screenshot</h3> <img src="data:image/jpeg;base64,' + my_db_src_shot + '" class="img-responsive img-thumbnail" alt="Desktop Screenshot">');
		});
        var txtval = $("#url_id").val(),
			ua = navigator.userAgent,
			tool_name = "Screenshot Generator";
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbxQRlLcJLhMvBMRjv7oOANGpP378MyqIqmPNgdUzJXvMi70sMBL/exec",
			data: {
				tool_name: tool_name,
				textbox: txtval,
				browser: ua
			},
			dataType: "json",
			cache: false,
			success: function() {

			}
		});
        return false;
	});
});
