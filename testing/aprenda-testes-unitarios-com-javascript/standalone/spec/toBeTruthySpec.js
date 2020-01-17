describe('toBeTruthy and toBeFalsy examples', () => {

    it('Shoud validate toBeTruthy', () => {
        const n1 = 10;
        expect(n1).toBeTruthy();
    });

    it('Shoud validate toBeFalsy', () => {
        const n1 = undefined;
        const n2 = 0;
        const n3 = '';
        const n4 = null;
        const n5 = NaN;
        let n6;

        expect(n1).toBeFalsy();
        expect(n2).toBeFalsy();
        expect(n3).toBeFalsy();
        expect(n4).toBeFalsy();
        expect(n5).toBeFalsy();
        expect(n6).toBeFalsy();
    });
});