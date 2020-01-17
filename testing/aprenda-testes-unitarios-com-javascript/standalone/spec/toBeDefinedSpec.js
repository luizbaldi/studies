describe('toBeDefined examples', () => {

    it('Should validate toBeDefined', () => {
        const n1 = 10;
        const n2 = undefined;
        let n3;

        expect(n1).toBeDefined();
        expect(null).toBeDefined(); 
        expect(NaN).toBeDefined();

        expect(n2).not.toBeDefined();
        expect(n3).not.toBeDefined();
    });

});
