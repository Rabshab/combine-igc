export default (files: string[]): string => {
  let newFile = "";

  newFile += getMetaData(files[0]);

  files.sort((a, b) => getFirstFix(a) - getFirstFix(b));

  files.forEach(f => {
    newFile += getFlightData(f);
  });

  return newFile;
};

export const getMetaData = (file: string): string => {
  let metaData = "";

  splitByLine(file).forEach(l => {
    if (!(l.startsWith("F") || l.startsWith("B") || l.startsWith("G"))) {
      metaData += `${l}\n`;
    }
  });

  return metaData;
};

export const getFlightData = (file: string): string => {
  let flightData = "";

  splitByLine(file).forEach(l => {
    if (l.startsWith("F") || l.startsWith("B")) {
      flightData += `${l}\n`;
    }
  });

  return flightData;
};

export const getFirstFix = (file: string): number => {
  return parseInt(
    splitByLine(file)
      .find(l => l.startsWith("F"))
      .substring(1)
  );
};

export const splitByLine = (file: string): string[] => {
  return file.split(/\r?\n/).filter(x => x);
};
