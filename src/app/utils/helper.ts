type DropdownItem = {
  label: string;
  value: string | number;
};

export function convertEnumToDropdownItem(enumObj: object): DropdownItem[] {
  return Object.entries(enumObj)
    .filter(([key, value]) => isNaN(Number(key))) // filter out reverse mappings (for numeric enums)
    .map(([key, value]) => ({
      label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize label
      value: value,
    }));
}
