export function smove(source, destination, member) {
  if (this.data.has(source) && !(this.data.get(source) instanceof Set)) {
    throw new Error(`Key ${source} does not contain a set`);
  }
  if (
    this.data.has(destination) &&
    !(this.data.get(destination) instanceof Set)
  ) {
    throw new Error(`Key ${destination} does not contain a set`);
  }

  if (!this.data.has(source)) {
    return 0;
  }

  const sourceSet = this.data.get(source);
  if (!sourceSet.has(member)) {
    return 0;
  }

  sourceSet.delete(member);
  this.data.set(source, sourceSet);

  if (!this.data.has(destination)) {
    this.data.set(destination, new Set());
  }

  const destSet = this.data.get(destination);
  destSet.add(member);
  this.data.set(destination, destSet);

  return 1;
}
