describe('toBe examples', () => {

    it('Should validate toBe', () => {
        const objOne = { value: true };
        const objTwo = { value: true };

        expect(true).toBe(true);
        expect('Test').toBe('Test');
        expect(objOne).not.toBe(objTwo);
    });

});