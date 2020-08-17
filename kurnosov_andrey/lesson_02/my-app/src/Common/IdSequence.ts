
export class IdSequence {
    private current = 1;
    public next() { return this.current++; }
}
