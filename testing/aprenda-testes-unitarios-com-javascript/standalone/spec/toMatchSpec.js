describe('toMatch examples', () => {

    it('Shoud validate toMatch', () => {
        const text = 'Testing with Jasmine';

        expect(text).toMatch("Jasmine");
        expect(text).toMatch(/jasmine/i);

        /* Testing a CEP input */
        expect("12345-789").toMatch(/^\d{5}-\d{3}$/);
    });
});