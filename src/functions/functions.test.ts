import { describe, it, expect } from "vitest";
import { commonKeys, compareObjectArrays } from "./functions";

describe('István compares arrays of objects', () =>
{
    const array = [{a:1, b:2, c:4},{a:7, b:8, c:9},{a:5, b:2, c:9}];
    const array2 = [{a:1, b:2, c:4},{a:7, b:8, c:9},{a:5, b:2, c:9}];
    const array3 = [{a:5, b:6, c:9},{a:7, b:8, c:9},{a:5, b:2, c:9}];
    it('István returns true if the arrays are identical', () =>
        {
            expect(compareObjectArrays(array,array2)).toBe(true);
        }
    );
    it('István returns false if the arrays are NOT identical', () =>
        {
            expect(compareObjectArrays(array,array3)).toBe(false);
        }
    );
    it('István returns true if the arrays are identical', () =>
        {
            expect(compareObjectArrays(array,array3)).toBe(false);
        }
    );
    const valos1 = [{nev:"Jani", eletkor:98}];
    const valos2 = [{nev:"János", eletkor:12}];
    it('István returns false if the arrays are NOT identical', () =>
        {
            expect(compareObjectArrays(valos1,valos2)).toBe(false);
        }
    );
}
);

describe('Béla tests commonkeys', () =>
{
    const obj1 = {a:1, b:2, c:4};
    const obj2 = {a:1, b:2, c:4};
    const valos1 = {nev:"Jani", eletkor:98};
    const valos2 = {neve:"János", eletkora:12};
    const obj4 = {nein:9, mein:2, kampf:4};

    it('Béla returns every COMMON key name', () =>
    {
        expect(commonKeys(obj1, obj2)).toEqual(['a', 'b', 'c'])
    }
    )
    it('Béla returns every COMMON key name - no', () =>
    {
        expect(commonKeys(valos1, valos2)).toEqual([])
    }
    )
}
);