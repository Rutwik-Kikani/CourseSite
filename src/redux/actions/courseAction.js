import * as actionTypes from "./actionTypes";
export function creatCourse(course) {
  return { type: actionTypes.CREATE_COURSE, course };
}
