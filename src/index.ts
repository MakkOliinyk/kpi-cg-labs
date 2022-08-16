import { Point } from "./geometry/Point";
import { Vector } from "./geometry/Vector";
import { Plane } from "./geometry/Plane";
import { Sphere } from "./geometry/Sphere";
import { Triangle } from "./geometry/Triangle";

import { Light } from "./entities/Light";
import { View } from "./entities/View";
import { Camera } from "./entities/Camera";
import { ViewMatrix } from "./entities/ViewMatrix";

import { pathHandler } from "./fileUtils/pathHandler";

const camera = new Camera(new Point(0, 0, 50));
const light = new Light(new Vector(1, 1, 1).normalize());
const matrix = new ViewMatrix(20, 20, 30);
const view: View = new View(camera, light, matrix);

const plane = new Plane(new Vector(1, 1, -0.3).normalize(), new Point(0, 0, 0));
const sphere = new Sphere(new Point(0, 0, 0), 16);
const triangle = new Triangle(new Point(0, 10, 10), new Point(-10, -5, 10), new Point(20, -5, 10))

pathHandler();
