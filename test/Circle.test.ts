import Circle from "../src/Circle";

test("Should calculate the area of a circle", () => {
    const circle = new Circle(2);
    expect(circle.area).toBeCloseTo(12.566370614359172);
});