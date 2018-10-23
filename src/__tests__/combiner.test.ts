import combiner from "../combiner";
import * as fs from "fs";
import * as path from "path";
import "jest";

describe("combiner", () => {
  let file1, file2, file3, result;

  beforeEach(() => {
    file1 = fs.readFileSync(
      path.resolve(__dirname, "./sampleFiles/2018-08-25-01.igc"),
      {
        encoding: "utf-8"
      }
    );
    file2 = fs.readFileSync(
      path.resolve(__dirname, "./sampleFiles/2018-08-25-02.igc"),
      {
        encoding: "utf-8"
      }
    );
    file3 = fs.readFileSync(
      path.resolve(__dirname, "./sampleFiles/2018-08-25-03.igc"),
      {
        encoding: "utf-8"
      }
    );

    result = combiner([file1, file2, file3]);
  });

  it("should combine the files", () => {
    const expectedResult = fs.readFileSync(
      path.resolve(__dirname, "./sampleFiles/2018-08-25-Combined.igc"),
      {
        encoding: "utf-8"
      }
    );

    expect(result).toEqual(expectedResult);
  });
});
