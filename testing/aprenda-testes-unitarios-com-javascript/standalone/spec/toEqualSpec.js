describe('toEqual examples', () => {

    it('Should validate toEqual', () => {
        const objOne = { value: true };
        const objTwo = { value: true };

        expect(true).toEqual(true);
        expect('Test').toEqual('Test');
        expect(objOne).toEqual(objTwo);        
    });

});