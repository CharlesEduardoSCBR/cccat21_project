export default class Circle {
    constructor(readonly radius: number) {}
    get area(): number {
        return Math.PI * this.radius ** 2;
    }
}