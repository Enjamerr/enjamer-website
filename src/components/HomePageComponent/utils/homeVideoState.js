// Session memory survives route unmounts; a full page load starts the intro again.
// Only Home uses this state, so it does not belong in the shared navigation context.
export const homeVideoState = {
  entranceCompleted: { current: false },
  finalFrame: { current: null },
};
