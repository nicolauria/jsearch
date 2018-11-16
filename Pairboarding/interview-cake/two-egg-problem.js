// A building has 100 floors. One of the floors is the highest
// floor an egg can be dropped from without breaking.
//
// If an egg is dropped from above that floor, it will break.
// If it is dropped from that floor or below, it will be
// completely undamaged and you can drop the egg again.
//
// Given two eggs, find the highest floor an egg can be
// dropped from without breaking, with as few drops as possible.

// Solution
// If we have just one egg we would iterate (100 worst case)

// W/ 2 eggs we could binary search with the first then iterate
// but we are (worst case 50)

// What if we increment by ten each time, then iterate to 10 after break
// (worst case 19)

// We can use a triangle to model our iterations
// going backwards, our triangle starts at n + (n - 1) + (n - 2) = 100
// with an equilateral triangle we can use the formula (n^2 + n) / 2
// we set this equal to 100 and solve for n using the quadratic formula
// we get a result of 14 then simply iterate and decrement
