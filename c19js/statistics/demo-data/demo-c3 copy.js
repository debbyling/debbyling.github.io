var chart = c3.generate({
	bindto: '#chart',
	data: {
		x: 'x',
        columns: [
            ['x', '2020-1-23',	'2020-1-24',	'2020-1-25',	'2020-1-26',	'2020-1-27',	'2020-1-28',	'2020-1-29',	'2020-1-30',	'2020-1-31',	'2020-2-1',	'2020-2-2',	'2020-2-3',	'2020-2-4',	'2020-2-5',	'2020-2-6',	'2020-2-7',	'2020-2-8',	'2020-2-9',	'2020-2-10',	'2020-2-11',	'2020-2-12',	'2020-2-13',	'2020-2-14',	'2020-2-15',	'2020-2-16',	'2020-2-17',	'2020-2-18',	'2020-2-19',	'2020-2-20',	'2020-2-21',	'2020-2-22',	'2020-2-23',	'2020-2-24',	'2020-2-25',	'2020-2-26',	'2020-2-27',	'2020-2-28',	'2020-2-29',	'2020-3-1',	'2020-3-2',	'2020-3-3',	'2020-3-4',	'2020-3-5',	'2020-3-6',	'2020-3-7',	'2020-3-8',	'2020-3-9',	'2020-3-10',	'2020-3-11',	'2020-3-12',	'2020-3-13',	'2020-3-14',	'2020-3-15',	'2020-3-16',	'2020-3-17',	'2020-3-18',	'2020-3-19',	'2020-3-20',	'2020-3-21',	'2020-3-22',	'2020-3-23',	'2020-3-24',	'2020-3-25',	'2020-3-26',	'2020-3-27',	'2020-3-28',	'2020-3-29',	'2020-3-30',	'2020-3-31',	'2020-4-1',	'2020-4-2',	'2020-4-3',	'2020-4-4'],
            ['Cases',1,	3,	3,	4,	5,	7,	10,	13,	16,	18,	18,	18,	24,	28,	30,	33,	40,	43,	45,	47,	50,	58,	67,	72,	75,	77,	81,	84,	85,	86,	89,	89,	90,	91,	93,	96,	98,	102,	106,	108,	110,	112,	117,	130,	138,	150,	160,	166,	178,	187,	200,	212,	226,	243,	266,	313,	345,	385,	432,	455,	509,	558,	631,	683,	732,	802,	844,	879,	926,	1000,	1049,	1114,	1189],
        ],
		type: 'spline',
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
	timer, duration = 1500,
	demos = [

		function () {
			chart.select(['Cases'], [0]);
			setMessage('First case detected on 23 Jan 2020');
			setProgressBar('12')
		},




		function () {
			chart.flow({
				columns: [
					['x', '2020-4-5', '2020-4-6','2020-4-7'],
					['Cases', 1200, 1300,1400]
				],
				duration: 1000,
			});
			setMessage('Flow 4 data');
			setProgressBar('92')
		},





		function () {
			chart.unselect();
		},

		function () {
			chart.load({
				columns: [
					['Discharged',0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	1,	2,	2,	6,	7,	9,	15,	15,	17,	18,	19,	24,	29,	34,	37,	47,	49,	51,	53,	58,	62,	66,	69,	72,	74,	78,	78,	79,	81,	82,	90,	90,	93,	93,	96,	96,	97,	105,	105,	109,	114,	117,	124,	131,	140,	144,	152,	155,	160,	172,	183,	198,	212,	228,	240,	245,	266,	282,	297,
				]
				],
				type: 'area'
			});

			chart.xgrids([{
				value: '2020-2-4',
				text: '24 cases',
				class:'hoge'
			}]);

			chart.select(['Discharged'], [12]);
			setMessage('First recovery on 4 Feb 2020');
			setProgressBar('4')
			
		},

		function () {
			chart.unselect();
		},


		
		function () {
			chart.unselect();
			chart.select(['Cases'], [26]);
			chart.xgrids([{
				value: '2020-2-18',
				text: '81 cases',
				class:'hoge'
			}]);
			setMessage('Gov releases Budget 2020');
			setProgressBar('12')
		},


		
		function () {

			setMessage('For more details: www.singaporebudget.gov.sg/');
		
		},




		function () {
			chart.unselect();
			chart.xgrids.remove([{
				value: '2020-2-18',
				text: '81 cases',
				class:'hoge'
			}]);
		},





		function () {


			chart.load({
				columns: [
					['Deaths', 0, 0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	2,	2,	2,	2,	2,	2,	2,	2,	3,	3,	3,	3,	4,	5,	6],
				],
				type: 'bar',

			});

			setProgressBar('84')


		},




		function () {

			setMessage('First two deaths on 21 Mar');



		},



		function () {
			chart.xgrids.remove([{
				value: '2020-2-18',
				text: '81 cases',
				class:'hoge'
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
					['Cases',1,	3,	3,	4,	5,	7,	10,	13,	16,	18,	18,	18,	24,	28,	30,	33,	40,	43,	45,	47,	50,	58,	67,	72,	75,	77,	81,	84,	85,	86,	89,	89,	90,	91,	93,	96,	98,	102,	106,	108,	110,	112,	117,	130,	138,	150,	160,	166,	178,	187,	200,	212,	226,	243,	266,	313,	345,	385,	432,	455,	509,	558,	631,	683,	732,	802,	844,	879,	926,	1000,	1049,	1114,	1189],
					['Discharged',0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	1,	2,	2,	6,	7,	9,	15,	15,	17,	18,	19,	24,	29,	34,	37,	47,	49,	51,	53,	58,	62,	66,	69,	72,	74,	78,	78,	79,	81,	82,	90,	90,	93,	93,	96,	96,	97,	105,	105,	109,	114,	117,	124,	131,	140,	144,	152,	155,	160,	172,	183,	198,	212,	228,	240,	245,	266,	282,	297],
					['Deaths', 0, 0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	2,	2,	2,	2,	2,	2,	2,	2,	3,	3,	3,	3,	4,	5,	6],
				],
				types: {
					Cases: 'spline',
					Discharged: 'bar',
					Deaths: 'area'
				} 
			});

			setProgressBar('88')
		},


		function () {


		},


		function () {


			chart.xgrids([{
				value: '2020-2-29',
				text: '100 cases',
				class:'hoge'
			}]);
			chart.focus('Cases');
			chart.select(['Cases'], [37]);
			setMessage('Singapore exceeds 100 cases');
			setProgressBar('4')
			
		},


		

		function () {


			chart.xgrids.remove([{
				value: '2020-2-29',
				text: '100 cases',
				class:'hoge'
			}]);

			
		},



		function () {
			chart.unselect();
		},




		function () {
			chart.select(['Cases'], [63]);
			chart.xgrids([{
				value: '2020-3-26',
				text: '683 cases',
				class:'hoge'
			}]);
			setMessage('Gov releases Supplementary Resilience Budget 2020');
			setProgressBar('24')
		},


		function () {
			chart.unselect();
		},



		function () {

			chart.xgrids.remove([{
				value: '2020-3-26',
				text: '683 cases',
				class:'hoge'
			}]);

		},

		
		function () {
			chart.regions.add([{
				axis: 'x',
				start: '2020-3-26',
			}]);
			setMessage('Stricter measures: All entertainment venues shut');
			setProgressBar('48')
		},




		function () {
			chart.select(['Cases'], [69]);
			chart.ygrids.add([{
				value: 1000,
				text: '1,000 cases'
			}]);
			setMessage('Singapore exceeds 1,000 cases');
			setProgressBar('60')
		},




		function () {
			chart.ygrids.remove([{
				value: 1000,
				text: '1,000 cases'
			}]);
			chart.revert();

		},


		function () {
			chart.flow({
				columns: [
					['Cases', 3090, 4000, 2000, 5000]
				],
				duration: 1000,
			});
			setMessage('Flow 4 data');
			setProgressBar('92')
		},




		function () {
			chart.load({
				columns: [
					['data3', 70, 90, 170, 220, 100, 110, 130, 40, 50]
				]
			})
			setMessage('Load data3');
			setProgressBar('8')
		},
		function () {
			chart.select(['data1'], [2]);
			setMessage('Select point for index 2 of data1');
			setProgressBar('12')
		},
		function () {
			chart.select(['data1'], [4, 6]);
			setMessage('Select point for index 4,6 of data1');
			setProgressBar('16')
		},
		function () {
			chart.unselect();
			setMessage('Unselect points');
			setProgressBar('20')
		},
		function () {
			chart.focus('data2');
			setMessage('Focus on data2');
			setProgressBar('24')
		},
		function () {
			chart.focus('data3');
			setMessage('Focus on data3');
			setProgressBar('28')
		},
		function () {
			chart.revert();
			setMessage('Defocus');
			setProgressBar('32')
		},
		function () {
			chart.load({
				columns: [
					['data1', 300, 230, 400, 520, 230, 250, 330, 280, 250]
				]
			})
			setMessage('Update data1');
			setProgressBar('36')
		},
		function () {
			chart.load({
				columns: [
					['data2', 30, 50, 90, 120, 40, 50, 80, 70, 50]
				]
			})
			setMessage('Update data2');
			setProgressBar('40')
		},
		function () {
			chart.regions([{
				start: 1,
				end: 3
			}]);
			setMessage('Add region from 1 to 3');
			setProgressBar('44')
		},
		function () {
			chart.regions.add([{
				start: 6
			}]);
			setMessage('Add region from 6 to end');
			setProgressBar('48')
		},
		function () {
			chart.regions([]);
			setMessage('Clear regions');
			setProgressBar('52')
		},
		function () {
			chart.xgrids([{
				value: 1,
				text: 'Label 1'
			}, {
				value: 4,
				text: 'Label 4'
			}]);
			setMessage('Add x grid lines for 1, 4');
			setProgressBar('56')
		},
		function () {
			chart.ygrids.add([{
				value: 450,
				text: 'Label 450'
			}]);
			setMessage('Add y grid lines for 450');
			setProgressBar('60')
		},
		function () {
			chart.xgrids.remove({
				value: 1
			});
			chart.xgrids.remove({
				value: 4
			});
			setMessage('Remove grid lines for 1, 4');
			setProgressBar('64')
		},
		function () {
			chart.ygrids.remove({
				value: 450
			});
			setMessage('Remove grid line for 450');
			setProgressBar('68')
		},
		function () {
			chart.transform('bar');
			setMessage('Show as bar chart');
			setProgressBar('72')
		},
		function () {
			chart.groups([
				['data2', 'data3']
			]);
			setMessage('Grouping data2 and data3');
			setProgressBar('76')
		},
		function () {
			chart.groups([
				['data1', 'data2', 'data3']
			]);
			setMessage('Grouping data1, data2 and data3');
		},
		function () {
			chart.groups([
				['data2', 'data3']
			]);
			chart.transform('spline', 'data1');
			setMessage('Show data1 as spline');
			setProgressBar('80')
		},
		function () {
			chart.unload({
				ids: 'data3'
			});
			setMessage('Unload data3');
			setProgressBar('84')
		},
		function () {
			chart.unload({
				ids: 'data2'
			});
			setMessage('Unload data2');
			setProgressBar('88')
		},
		function () {
			chart.flow({
				columns: [
					['data1', 390, 400, 200, 500]
				],
				duration: 1000,
			});
			setMessage('Flow 4 data');
			setProgressBar('92')
		},
		function () {
			// wait for end of transition for flow
		},
		function () {
			chart.flow({
				columns: [
					['data1', 190, 230]
				],
			});
			setMessage('Flow 2 data');
			setProgressBar('96')
		},
		function () {
			// wait for end of transition for flow
		},
		function () {
			chart.transform('spline', ['data1', 'data2', 'data3']);
			chart.groups([
				['data1'],
				['data2'],
				['data3']
			]);
			chart.load({
				columns: [
					['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]
				]
			})
			setMessage('Finishing demo..');
			setProgressBar('100')
			stopDemo()
		}
	];

function setMessage(message) {
	document.getElementById('message').innerHTML = '<div id="demoMessage" class="shadow-lg fs-xl p-3 rounded fadeinup">' + message + '</div>';
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