describe('toBeNull example', () => {

    it('Should validate toBeNull', () => {
        const n1 = null;
        const n2 = undefined;
        let n3;
        const n4 = NaN;
        const n5 = 'test';

        expect(n1).toBeNull();
        expect(n2).not.toBeNull();
        expect(n3).not.toBeNull();
        expect(n4).not.toBeNull();
        expect(n5).not.toBeNull();
    });

});