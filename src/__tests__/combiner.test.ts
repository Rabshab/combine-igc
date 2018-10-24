import combiner, { getMetaData, splitByLine } from "../combiner";
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

describe("getMetaData", () => {
  let file, result;

  beforeEach(() => {
    file = fs.readFileSync(
      path.resolve(__dirname, "./sampleFiles/2018-08-25-test.igc"),
      {
        encoding: "utf-8"
      }
    );

    result = getMetaData(file);
  });

  it("should extract the meta data", () => {
    expect(result).toEqual(`AXCSAAA
HFDTE250818
HFFXA050
HFPLTPILOTINCHARGE:ROBBIE SINGER
HFGTYGLIDERTYPE:
HFGIDGLIDERID:
HFCIDCOMPETITIONID:
HFFTYFRTYPE:XCSOAR,XCSOAR Android 6.8.11 Aug 18 2018
HFGPS:Internal GPS (Android)
HFDTM100DATUM:WGS-1984
I023638FXA3940SIU
`);
  });
});

describe("splitByLine", () => {
  let file, result;

  beforeEach(() => {
    file = fs.readFileSync(
      path.resolve(__dirname, "./sampleFiles/2018-08-25-test.igc"),
      {
        encoding: "utf-8"
      }
    );

    result = splitByLine(file);
  });

  it("should split the file by line", () => {
    expect(result[0]).toEqual("AXCSAAA");
    expect(result[result.length - 1]).toEqual("G26bd202d9e11821a");
  });
});
