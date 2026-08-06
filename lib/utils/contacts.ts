export function getContactsCategory(value: string): boolean | undefined {
  switch (value) {
    case "with-job":
      return true;
    case "without-job":
      return false;
    default:
      return undefined;
  }
}
