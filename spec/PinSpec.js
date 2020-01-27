describe('Pin', function() {

	beforeEach(function() {
		pin = new Pin;
	});

	it('has an assigned score', function() {
		pin = new Pin(2);
		expect(pin.score).toEqual(2);
	});

	it('has a default score', function() {
		expect(pin.score).toEqual(1);
	});

	it('it has been hit', function() {
		expect(pin.isHit).toBe(false);
	});

	it('can be hit', function() {
		pin.hit();
		expect(pin.isHit).toBe(true);
	});

});