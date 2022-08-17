import { TPoint } from "../Point";
import { TRay } from "../Ray";
import { TVector, Vector } from "../Vector";
import {EPS} from "../constants";

export type TTriangle = {
    a: TPoint;
    b: TPoint;
    c: TPoint;

    sa: TVector;
    sb: TVector;
    sc: TVector;

    intersection(ray: TRay): number;
    getPointNormal(point: TPoint): TVector;
}

export class Triangle {
    a: TPoint;
    b: TPoint;
    c: TPoint;

    sa: TVector;
    sb: TVector;
    sc: TVector;

    constructor(a: TPoint, b: TPoint, c: TPoint, sa?: TVector, sb?: TVector, sc?: TVector) {
        this.a = a;
        this.b = b;
        this.c = c;

        this.sa = sa || new Vector(0, 0, 0);
        this.sb = sb || new Vector(0, 0, 0);
        this.sc = sc || new Vector(0, 0, 0);
    }

    intersection(ray: TRay): number {
        const e1 = this.b.subtract(this.a);
        const e2 = this.c.subtract(this.a);
        const p = ray.direction.cross(e2);
        const a = e1.dot(p);

        if (a > -EPS && a < EPS) return null;

        const f = 1 / a;
        const s = ray.origin.subtract(this.a);
        const u = f * s.dot(p);

        if (u < 0 || u > 1) return null;

        const q = s.cross(e1);
        const v = f * ray.direction.dot(q);

        if (v < 0 || u + v > 1) return null;

        const t = f * e2.dot(q);

        if (t > EPS) return t;

        return null;
    }

    getPointNormal(_point: TPoint): TPoint {
        const e1 = this.b.subtract(this.a);
        const e2 = this.c.subtract(this.a);

        return e1.cross(e2).normalize();
    }
}
