export const convertEnumToDropdownItem = (
  enumObject: Record<string, string | number>
) => {
  const items = Object.entries(enumObject)
    .filter(([, value]) => typeof value === "number")
    .map(([key, value]) => ({
      name: camelCaseToSpaceSeparated(key),
      id: value.toString(),
    }));
  return items;
};

export const camelCaseToSpaceSeparated = (str: string) => {
  return (
    str
      // Insert a space before all capital letters
      .replace(/([A-Z])/g, " $1")
      // Remove the leading space if it exists
      .replace(/^ /, "")
  );
};
