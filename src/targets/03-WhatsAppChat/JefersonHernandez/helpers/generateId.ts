let currentId = 0;

export function generateId() {
  currentId += 1;
  return currentId;
}
