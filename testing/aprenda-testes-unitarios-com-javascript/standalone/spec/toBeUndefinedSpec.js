describe('toBeUndefined examples', () => {

    it('Should validate toBeUndefined', () => {
        let n1;
        const n2 = undefined;
        const n3 = false;

        expect(n1).toBeUndefined();
        expect(n2).toBeUndefined();
        
        expect(n3).not.toBeUndefined();
        expect(null).not.toBeUndefined();
    });

});