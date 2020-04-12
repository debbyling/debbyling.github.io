var chart = c3.generate({
	bindto: '#chart',
	data: {
		x: 'x',
        columns: [
            ['x', '2020-1-23',	'2020-1-24',	'2020-1-25',	'2020-1-26',	'2020-1-27',	'2020-1-28',	'2020-1-29',	'2020-1-30',	'2020-1-31',	'2020-2-1',	'2020-2-2',	'2020-2-3',	'2020-2-4',	'2020-2-5',	'2020-2-6',	'2020-2-7',	'2020-2-8',	'2020-2-9',	'2020-2-10',	'2020-2-11',	'2020-2-12',	'2020-2-13',	'2020-2-14',	'2020-2-15',	'2020-2-16',	'2020-2-17',	'2020-2-18',	'2020-2-19',	'2020-2-20',	'2020-2-21',	'2020-2-22',	'2020-2-23',	'2020-2-24',	'2020-2-25',	'2020-2-26',	'2020-2-27',	'2020-2-28',	'2020-2-29',	'2020-3-1',	'2020-3-2',	'2020-3-3',	'2020-3-4',	'2020-3-5',	'2020-3-6',	'2020-3-7',	'2020-3-8',	'2020-3-9',	'2020-3-10',	'2020-3-11',	'2020-3-12',	'2020-3-13',	'2020-3-14',	'2020-3-15',	'2020-3-16',	'2020-3-17',	'2020-3-18',	'2020-3-19',	'2020-3-20',	'2020-3-21',	'2020-3-22',	'2020-3-23',	'2020-3-24',	'2020-3-25',	'2020-3-26',	'2020-3-27',	'2020-3-28',	'2020-3-29',	'2020-3-30',	'2020-3-31',	'2020-4-1',	'2020-4-2',	'2020-4-3',	'2020-4-4','2020-4-5','2020-4-6','2020-4-7','2020-4-8'],
			['Cases',1,	3,	3,	4,	5,	7,	10,	13,	16,	18,	18,	18,	24,	28,	30,	33,	40,	43,	45,	47,	50,	58,	67,	72,	75,	77,	81,	84,	85,	86,	89,	89,	90,	91,	93,	96,	98,	102,	106,	108,	110,	112,	117,	130,	138,	150,	160,	166,	178,	187,	200,	212,	226,	243,	266,	313,	345,	385,	432,	455,	509,	558,	631,	683,	732,	802,	844,	879,	926,	1000,	1049,	1114,	1189, 1309, 1375,1481,1623],
			['Discharged',0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	1,	2,	2,	6,	7,	9,	15,	15,	17,	18,	19,	24,	29,	34,	37,	47,	49,	51,	53,	58,	62,	66,	69,	72,	74,	78,	78,	79,	81,	82,	90,	90,	93,	93,	96,	96,	97,	105,	105,	109,	114,	117,	124,	131,	140,	144,	152,	155,	160,	172,	183,	198,	212,	228,	240,	245,	266,	282,	297, 320, 344,377,406],
			['Deaths', 0, 0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	2,	2,	2,	2,	2,	2,	2,	2,	3,	3,	3,	3,	4,	5,	6, 6, 6,6,6],
        ],
		type: 'spline',
			types: {
				Discharged: 'bar',
			},

		selection: {
			enabled: true
		}
	},
	axis: {
		x: {
			type: 'timeseries',
			tick: {
				format: '%m/%d',
			}
		}
	},
	color: {
        pattern: [color.info._500, color.success._500, color.danger._500, color.danger._500, color.warning._500]
    },
	grid: {
		x: {
			show: false
		},
		y: {
			show: false
		}
	}

});

var defaultMessage = $('#message').html(),
	currentIndex = 0,
	timer, duration = 2000,
	demos = [



		function () {

			chart.unload({
				ids: 'Discharged'
			});
			chart.unload({
				ids: 'Deaths'
			});



			setProgressBar('84')
		},




		function () {
			

			chart.select(['Cases'], [0]);
			setMessage('First case reported');
			setProgressBar('12')
			chart.xgrids([{
				value: '2020-1-23',
				class:'hoge'
			}]);
		},


		function () {
			chart.unselect();
			chart.xgrids.remove([{
				value: '2020-1-23',
				class:'hoge'
			}]);
		},

		function () {
			chart.load({
				columns: [
					['Discharged',0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	1,	2,	2,	6,	7,	9,	15,	15,	17,	18,	19,	24,	29,	34,	37,	47,	49,	51,	53,	58,	62,	66,	69,	72,	74,	78,	78,	79,	81,	82,	90,	90,	93,	93,	96,	96,	97,	105,	105,	109,	114,	117,	124,	131,	140,	144,	152,	155,	160,	172,	183,	198,	212,	228,	240,	245,	266,	282,	297, 320, 344,377,406],
				],
				type: 'area'
			});
			

			
		},


		function () {


			chart.xgrids([{
				value: '2020-2-4',
				text: '4 Feb',
				class:'hoge'
			}]);

			chart.ygrids.add([{
				value: 24,
				text: '24 cases'
			}]);

			chart.select(['Discharged'], [12]);
			setMessage('First patient discharged');
			chart.focus('Discharged');
			chart.unselect();
			setProgressBar('4')
			
		},



		

		function () {

			chart.transform('bar','Discharged');
			
		},


		function () {
			chart.unselect();
			chart.revert();
			chart.xgrids.remove([{
				value: '2020-2-4',
				text: '4 Feb',
				class:'hoge'
			}]);
			chart.ygrids.remove([{
				value: 24,
				text: '24 cases'
			}]);
		},


		
		function () {
			chart.unselect();
			chart.focus('Cases');
			chart.select(['Cases'], [26]);
			chart.xgrids([{
				value: '2020-2-18',
				text: '18 Feb',
				class:'hoge'
			}]);


			chart.ygrids.add([{
				value: 81,
				text: '81 cases'
			}]);
			setMessage('Gov releases Budget 2020');
			setProgressBar('12')
		},


		function () {
			chart.unselect();
			chart.xgrids.remove([{
				value: '2020-2-4',
				text: '4 Feb',
				class:'hoge'
			}]);
			chart.ygrids.remove([{
				value: 81,
				text: '81 cases'
			}]);
		},



		function () {

			chart.revert();
		
		
		},


		
		function () {
			setMessage('Singapore exceeds 100 cases');
			setMessagedisplay('Singapore exceeds 100 cases');
	


			chart.ygrids.add([{
				value: 100,
				text: '100 cases'
			}]);

			chart.xgrids([{
				value: '2020-2-29',
				text: '29 Feb',
				class:'hoge'
			}]);
			chart.focus('Cases');
			chart.select(['Cases'], [37]);
	
			setProgressBar('4')
			
		},



				

		function () {
			
			chart.revert();
			chart.unselect();


			chart.ygrids.remove([{
				value: 100,
				text: '100 cases'
			}]);
			chart.xgrids.remove([{
				value: '2020-2-29',
				text: '29 Feb',
				class:'hoge'
			}]);


			
		},




		function () {
			
			setMessage('First two deaths on 21 Mar');
			setMessagedisplay('First two deaths on 21 Mar');


			chart.load({
				columns: [
					['Deaths', 0, 0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	2,	2,	2,	2,	2,	2,	2,	2,	3,	3,	3,	3,	4,	5,	6],
				],
				type: 'bar',

			});
			

			setProgressBar('84')


		},




		function () {


			chart.xgrids([{
				value: '2020-3-21',
				text: '21 Mar',
				class:'hoge'
			}]);
			chart.ygrids.add([{
				value: 432,
				text: '432 cases'
			}]);

			
			



		},



		function () {
			chart.xgrids.remove([{
				value: '2020-2-18',
				text: '81 cases',
				class:'hoge'
			}]);

			chart.ygrids.remove([{
				value: 432,
				text: '432 cases'
			}]);


			chart.unload({
				ids: 'Discharged'
			});
			chart.unload({
				ids: 'Cases'
			});

			setProgressBar('84')
		},





		function () {
		},





		function () {

			
			chart.load({
				columns: [
					['Cases',1,	3,	3,	4,	5,	7,	10,	13,	16,	18,	18,	18,	24,	28,	30,	33,	40,	43,	45,	47,	50,	58,	67,	72,	75,	77,	81,	84,	85,	86,	89,	89,	90,	91,	93,	96,	98,	102,	106,	108,	110,	112,	117,	130,	138,	150,	160,	166,	178,	187,	200,	212,	226,	243,	266,	313,	345,	385,	432,	455,	509,	558,	631,	683,	732,	802,	844,	879,	926,	1000,	1049,	1114,	1189, 1309, 1375,1481,1623],
					['Discharged',0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	1,	2,	2,	6,	7,	9,	15,	15,	17,	18,	19,	24,	29,	34,	37,	47,	49,	51,	53,	58,	62,	66,	69,	72,	74,	78,	78,	79,	81,	82,	90,	90,	93,	93,	96,	96,	97,	105,	105,	109,	114,	117,	124,	131,	140,	144,	152,	155,	160,	172,	183,	198,	212,	228,	240,	245,	266,	282,	297, 320, 344,377,406],
					['Deaths', 0, 0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	2,	2,	2,	2,	2,	2,	2,	2,	3,	3,	3,	3,	4,	5,	6],
				],
				types: {
					Cases: 'spline',
					Discharged: 'bar',
					Deaths: 'spline'
				} 
			});

			setProgressBar('88')
		},


		function () {


			chart.unselect();
		},




		function () {
			setMessage('Gov releases Supplementary Resilience Budget 2020');
			setMessagedisplay('Gov releases Supplementary Resilience Budget 2020');
			chart.focus('Cases');
			chart.select(['Cases'], [63]);
			chart.xgrids([{
				value: '2020-3-26',
				text: '26 Mar',
				class:'hoge'
			}]);
			
			chart.ygrids([{
				value: 683,
				text: '683 cases'
			}]);
			setProgressBar('24')
		},


		function () {
			chart.unselect();
			chart.revert();
			chart.xgrids.remove([{
				value: '2020-3-26',
				text: '26 Mar',
				class:'hoge'
			}]);
			
			chart.ygrids.remove([{
				value: 683,
				text: '683 cases'
			}]);
		},



		function () {

			chart.xgrids.remove([{
				value: '2020-3-26',
				text: '683 cases',
				class:'hoge'
			}]);

		},

		
		function () {

			chart.xgrids([{
				value: '2020-3-26',
				text: '26 Mar',
				class:'hoge'
			}]);

			chart.regions.add([{
				axis: 'x',
				start: '2020-3-26',
				class: 'test',
			}]);




			setMessage('Stricter measures: All entertainment venues shut');
			setProgressBar('48')
		},




		function () {
			chart.focus('Cases');
			chart.select(['Cases'], [69]);



		

			chart.xgrids([{
				value: '2020-4-1',
				text: '1 Apr',
				class:'hoge'
			}]);
			chart.ygrids.add([{
				value: 1000,
		
			}]);
			setMessage('Singapore hits 1,000 cases');
			setProgressBar('60')
		},




		function () {
			chart.ygrids.remove([{
				value: 1000,

			}]);
			chart.revert();
			chart.unselect();





		},




		function () {
			chart.xgrids.remove([{
				value: '2020-4-3',
				text: '3 Apr',
				class:'hoge'
			}]);
			chart.load({
				columns: [


					['x', '2020-1-23',	'2020-1-24',	'2020-1-25',	'2020-1-26',	'2020-1-27',	'2020-1-28',	'2020-1-29',	'2020-1-30',	'2020-1-31',	'2020-2-1',	'2020-2-2',	'2020-2-3',	'2020-2-4',	'2020-2-5',	'2020-2-6',	'2020-2-7',	'2020-2-8',	'2020-2-9',	'2020-2-10',	'2020-2-11',	'2020-2-12',	'2020-2-13',	'2020-2-14',	'2020-2-15',	'2020-2-16',	'2020-2-17',	'2020-2-18',	'2020-2-19',	'2020-2-20',	'2020-2-21',	'2020-2-22',	'2020-2-23',	'2020-2-24',	'2020-2-25',	'2020-2-26',	'2020-2-27',	'2020-2-28',	'2020-2-29',	'2020-3-1',	'2020-3-2',	'2020-3-3',	'2020-3-4',	'2020-3-5',	'2020-3-6',	'2020-3-7',	'2020-3-8',	'2020-3-9',	'2020-3-10',	'2020-3-11',	'2020-3-12',	'2020-3-13',	'2020-3-14',	'2020-3-15',	'2020-3-16',	'2020-3-17',	'2020-3-18',	'2020-3-19',	'2020-3-20',	'2020-3-21',	'2020-3-22',	'2020-3-23',	'2020-3-24',	'2020-3-25',	'2020-3-26',	'2020-3-27',	'2020-3-28',	'2020-3-29',	'2020-3-30',	'2020-3-31',	'2020-4-1',	'2020-4-2',	'2020-4-3',	'2020-4-4','2020-4-5','2020-4-6','2020-4-7','2020-4-8','2020-4-9','2020-4-10','2020-4-11'],
					['Cases',1,	3,	3,	4,	5,	7,	10,	13,	16,	18,	18,	18,	24,	28,	30,	33,	40,	43,	45,	47,	50,	58,	67,	72,	75,	77,	81,	84,	85,	86,	89,	89,	90,	91,	93,	96,	98,	102,	106,	108,	110,	112,	117,	130,	138,	150,	160,	166,	178,	187,	200,	212,	226,	243,	266,	313,	345,	385,	432,	455,	509,	558,	631,	683,	732,	802,	844,	879,	926,	1000,	1049,	1114,	1189, 1309, 1375,1481,1623,1910, 2108,2299],
					['Discharged',0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	1,	2,	2,	6,	7,	9,	15,	15,	17,	18,	19,	24,	29,	34,	37,	47,	49,	51,	53,	58,	62,	66,	69,	72,	74,	78,	78,	79,	81,	82,	90,	90,	93,	93,	96,	96,	97,	105,	105,	109,	114,	117,	124,	131,	140,	144,	152,	155,	160,	172,	183,	198,	212,	228,	240,	245,	266,	282,	297, 320, 344,377,406,460,492,528],
					['Deaths', 0, 0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	2,	2,	2,	2,	2,	2,	2,	2,	3,	3,	3,	3,	4,	5,	6, 6, 6,6,6,6,7,8],
				


				],
				duration: 1000,
			});



			setProgressBar('92')
		},


		
		function () {
			chart.regions.add([{
				axis: 'x',
				start: '2020-4-7',
				class: 'circuitbreaker',
			}]);

			chart.xgrids([{
				value: '2020-4-7',
				text: '7 Apr',
				class:'hoge'
			}]);
			setMessage('Stricter measures in-place: Circuit Breaker');
			setProgressBar('92')
		},



		function () {

			setMessage('Finishing demo..');
			setProgressBar('100')
			stopDemo()
		}
	];

function setMessage(message) {
	document.getElementById('message').innerHTML = '<div id="demoMessage" class="shadow-lg fs-xl p-3 rounded fadeinup">' + message + '</div>';
}


function setMessagenone(message) {
	document.getElementById('message').style.visibility = "hidden" ;
}

function setMessagedisplay(message) {
	document.getElementById('message').style.visibility = "visible" ;
}


function setProgressBar(percentage) {
	$('#demo-progress').css("width", percentage + "%");
}

function startDemo() {
	setMessage('Starting Demo...');
	timer = setInterval(function () {
		if (currentIndex == demos.length) currentIndex = 0;
		demos[currentIndex++]();
	}, duration);
	$('#playDemo').hide();
	$('#pauseDemo').show();
}

function stopDemo() {
	clearInterval(timer);
	document.getElementById('message').innerHTML = '<div id="demoMessage" class="shadow-lg fs-xl p-3 rounded fadeinup bg-success-500 text-center">Thanks for watching! <br> <button class="btn btn-xs btn-dark mt-2" onclick="startDemo();">Play again</button> </div>';
	$('#playDemo').hide();
	$('#pauseDemo').hide();
};

function pauseDemo() {
	clearInterval(timer);
	document.getElementById('message').innerHTML = '<div id="demoMessage" class="shadow-lg fs-xl p-3 rounded highlight"> Demo Paused </div>';
	$('#playDemo').show();
	$('#pauseDemo').hide();
};

