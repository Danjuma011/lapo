export function convertEnumToDropdownItem(
  enumObj: object
): { name: string; id: string }[] {
  return Object.entries(enumObj).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    id: String(value),
  }));
}
