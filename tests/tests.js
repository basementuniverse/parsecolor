QUnit.test("Various formats of red", function(assert) {
	var red = { r: 255, g: 0, b: 0, a: 1 };
	assert.deepEqual(parseColor("red"), red);
	assert.deepEqual(parseColor("#f00"), red);
	assert.deepEqual(parseColor("#ff0000"), red);
	assert.deepEqual(parseColor("#ff0000ff"), red);
	assert.deepEqual(parseColor("rgb(255,0,0)"), red);
	assert.deepEqual(parseColor("rgb(255, 0, 0)"), red);
	assert.deepEqual(parseColor("rgb(  255 , 0 , 0  )"), red);
	assert.deepEqual(parseColor("rgb(100%,0%,0%)"), red);
	assert.deepEqual(parseColor("rgb(100%, 0%, 0%)"), red);
	assert.deepEqual(parseColor("rgb( 100% , 0% ,   0% )"), red);
	assert.deepEqual(parseColor("rgba(255,0,0,1)"), red);
	assert.deepEqual(parseColor("rgba(255, 0, 0, 1)"), red);
	assert.deepEqual(parseColor("rgba(   255  ,   0  ,  0   , 1  )"), red);
	assert.deepEqual(parseColor("rgba(100%,0%,0%,1)"), red);
	assert.deepEqual(parseColor("rgba(100%, 0%, 0%, 1)"), red);
	assert.deepEqual(parseColor("rgba(  100% ,  0% ,  0% , 1  )"), red);
	assert.deepEqual(parseColor("hsl(0,100%,50%)"), red);
	assert.deepEqual(parseColor("hsl(0, 100%, 50%)"), red);
	assert.deepEqual(parseColor("hsl( 0 ,   100% ,  50% )"), red);
	assert.deepEqual(parseColor("hsla(0,100%,50%,1)"), red);
	assert.deepEqual(parseColor("hsla(0, 100%, 50%, 1)"), red);
	assert.deepEqual(parseColor("hsla(  0,  100% , 50%  , 1 )"), red);
});

QUnit.test("Invalid formats", function(assert) {
	var red = { r: 255, g: 0, b: 0, a: 1 };
	assert.notDeepEqual(parseColor("notred"), red);
	assert.notDeepEqual(parseColor("#g00"), red);
	assert.notDeepEqual(parseColor("#fg0000"), red);
	assert.notDeepEqual(parseColor("#ff0000gg"), red);
	assert.notDeepEqual(parseColor("rgb(255, , 0)"), red);
	assert.notDeepEqual(parseColor("rgb(100, 0%, 0%)"), red);
	assert.notDeepEqual(parseColor("rgba(255, 0, 0)"), red);
	assert.notDeepEqual(parseColor("rgba(100, 0%, 0%, 1)"), red);
	assert.notDeepEqual(parseColor("hsl(0, 100, 50%)"), red);
	assert.notDeepEqual(parseColor("hsla(0, 100, 50%, 1)"), red);
});

QUnit.test("Named colors", function(assert) {
	for (var i in colors) {
		if (colors.hasOwnProperty(i)) {
			assert.deepEqual(
				parseColor(i),
				{ r: colors[i].rgb[0], g: colors[i].rgb[1], b: colors[i].rgb[2], a: 1 }
			);
		}
	}
	assert.deepEqual(parseColor("transparent"), { r: 0, g: 0, b: 0, a: 0 });
});

QUnit.test("Hex > RGB conversion", function(assert) {
	for (var i in colors) {
		if (colors.hasOwnProperty(i)) {
			assert.deepEqual(
				parseColor(colors[i].hex),
				{ r: colors[i].rgb[0], g: colors[i].rgb[1], b: colors[i].rgb[2], a: 1 }
			);
		}
	}
	assert.deepEqual(parseColor("#00000000"), { r: 0, g: 0, b: 0, a: 0 });
});

QUnit.test("HSL > RGB conversion", function(assert) {
	for (var i in colors) {
		if (colors.hasOwnProperty(i)) {
			assert.deepEqual(
				parseColor("hsl(" + colors[i].hsl[0] + ", " + colors[i].hsl[1] + "%, " + colors[i].hsl[2] + "%)"),
				{ r: colors[i].rgb[0], g: colors[i].rgb[1], b: colors[i].rgb[2], a: 1 }
			);
		}
	}
	assert.deepEqual(parseColor("hsla(0, 0%, 0%, 0)"), { r: 0, g: 0, b: 0, a: 0 });
});