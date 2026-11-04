export const clamp = (value) => Math.max(0, Math.min(1, value));
export const smooth = (value) => {
  const progress = clamp(value);
  return progress * progress * (3 - 2 * progress);
};

export function createRoadmapSteps(rows) {
  let cursor = 1;
  const steps = rows.map((row, index) => {
    const changesRow = index > 0 && row !== rows[index - 1];
    const transition = changesRow ? cursor : null;
    if (changesRow) {
      cursor += 0.7;
    }
    const start = cursor;
    cursor += 1;
    return { start, transition };
  });
  return { steps, duration: cursor + 0.35 };
}

export function sampleCamera(stops, time) {
  for (let index = 1; index < stops.length; index += 1) {
    const previous = stops[index - 1];
    const next = stops[index];
    if (time <= next.time) {
      const progress = smooth((time - previous.time) / (next.time - previous.time));
      return previous.y + (next.y - previous.y) * progress;
    }
  }
  return stops.at(-1)?.y || 0;
}

export function getRoadmapFrame(time, steps, cameraStops) {
  return {
    intro: smooth(time / 0.9),
    headingOpacity: steps.length ? 1 - smooth((time - steps.at(-1).start - 0.65) / 0.7) : 1,
    camera: sampleCamera(cameraStops, time),
    cards: steps.map(({ start }) => smooth((time - start) / 0.65)),
  };
}
