const shouldAddButtonDisable = (todo: string): boolean => {
  if (todo) {
    return false;
  }
  return true;
};
export { shouldAddButtonDisable };
