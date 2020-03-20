export const dateStringToDate = (dateString: string): Date => {
  const dateParser = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });
  return new Date(dateParser[2], dateParser[1] - 1, dateParser[0]);
};
