import React from 'react';
import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react';
import * as p5 from 'p5';

function sketch(p5Instance: P5CanvasInstance) {
  interface Dot {
    position: p5.Vector;
    render: () => void;
    calcWidth: () => number;
  }

  // An array to store 'Dot' objects
  let dots: Dot[] = [];

  // letiable to track the beacon's position
  let beacon: p5.Vector;

  p5Instance.setup = () => {
    // @ts-ignore
    const parentDiv = document.getElementById('parentCanvas');

    // Calculate the number of columns and rows based on the window size
    // @ts-ignore
    let width = parentDiv.offsetWidth;
    // @ts-ignore
    let height = parentDiv.offsetHeight;

    // Diameter of the circles
    let CIRCLE_W = 20;

    // Actual width
    let ACTUAL_W = CIRCLE_W * 0.9;

    // Minimum width
    let MIN_W = 2;

    // Distance between circles
    let CIRCLE_DIST = CIRCLE_W;

    let COLS = width / CIRCLE_DIST;
    let ROWS = height / CIRCLE_DIST;

    // Find the greater value between window width and height
    let GREATER = Math.max(width, height);

    // Add a value of distance to the calculated result,
    // thus we can make the circle range of the beacon looks smaller,
    // because we give a modified distance, so the distance's larger,
    // the dot's size is smaller.
    let addedDistance = width / 10;

    // @ts-ignore
    // Create a canvas that matches the parent size
    p5Instance.createCanvas(parentDiv.offsetWidth, parentDiv.offsetHeight);

    p5Instance.noStroke();

    // Create 'Dot' objects and add them to the 'dots' array
    for (let ci = 1; ci < COLS - 1; ++ci) {
      for (let ri = 0.5; ri < ROWS; ++ri) {
        let dot: Dot = {
          position: new p5.Vector(ci * CIRCLE_DIST, ri * CIRCLE_DIST),
          render: function () {
            // Calculate the width of the circle for this 'Dot'
            let w = this.calcWidth();

            // Draw an ellipse (circle) at the 'Dot' position with the calculated width
            p5Instance.ellipse(this.position.x, this.position.y, w, w);
          },
          calcWidth: function () {
            // Calculate the distance between the beacon and this 'Dot'
            let delta =
              Math.max(p5.Vector.dist(beacon, this.position), 0) +
              addedDistance;

            delta *= p5Instance.map(
              p5Instance.noise(
                this.position.x,
                this.position.y,
                p5Instance.frameCount
              ),
              0.2,
              1,
              0.85,
              1.1
            );

            // Ensure that delta doesn't exceed half of the greater dimension (width or height)
            if (delta > GREATER / 2) {
              delta = GREATER / 2;
            }

            // Map the modified delta to the range of actual circle width to the minimum width
            return p5Instance.map(delta, 0, GREATER / 2, ACTUAL_W, MIN_W);
          },
        };
        dots.push(dot);
      }
    }
  };

  p5Instance.draw = () => {
    // Set the background color
    // p5Instance.background(0, 50);
    p5Instance.clear(255, 255, 255, 5);

    // Define the beacon's position using the mouse or touch input
    beacon = new p5.Vector(p5Instance.mouseX, p5Instance.mouseY);

    // Set the fill color for the circles
    p5Instance.fill('#9945fa');

    // Loop through each 'Dot' and render it
    dots.forEach(function (dot) {
      dot.render();
    });
  };

  p5Instance.windowResized = () => {
    // @ts-ignore
    const parentDiv = document.getElementById('parentCanvas');
    // @ts-ignore
    p5Instance.resizeCanvas(parentDiv.offsetWidth, parentDiv.offsetHeight);
  };
}

const PolkaP5 = () => {
  return (
    <div className='w-full h-[350px] touch-none' id='parentCanvas'>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default PolkaP5;
