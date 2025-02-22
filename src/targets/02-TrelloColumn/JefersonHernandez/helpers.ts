let currentId = 0;

export function generateTaskId() {
  currentId += 1;
  return currentId;
}
