// ─────────────────────────────────────────────────────────────
// Web Audio API synthesizer — hover bleep + click "activation" sound.
// No external audio files; everything is generated at runtime.
// ─────────────────────────────────────────────────────────────

let ctx: AudioContext | null = null;
let enabled = true;
let unlocked = false;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  return ctx;
}

export function unlockSound() {
  if (unlocked) return;
  const c = getCtx();
  if (c && c.state === "suspended") c.resume();
  unlocked = true;
}

export function setSfxEnabled(v: boolean) {
  enabled = v;
}

export function isSfxEnabled() {
  return enabled;
}

/** Short high-pitched "bleep" for hover. */
export function playHover() {
  if (!enabled) return;
  const c = getCtx();
  if (!c) return;
  const now = c.currentTime;

  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(2100, now);
  osc.frequency.exponentialRampToValueAtTime(2600, now + 0.045);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.05, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

  osc.connect(gain).connect(c.destination);
  osc.start(now);
  osc.stop(now + 0.08);
}

/** Stuttering digital-corruption glitch burst — for the modal's "system access" moment. */
export function playGlitchOpen() {
  if (!enabled) return;
  const c = getCtx();
  if (!c) return;
  const now = c.currentTime;

  // rapid stuttering noise bursts through a shifting bandpass — reads as signal corruption
  const stutterCount = 5;
  for (let i = 0; i < stutterCount; i++) {
    const t = now + i * 0.035;
    const bufferSize = Math.floor(c.sampleRate * 0.02);
    const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let j = 0; j < bufferSize; j++) data[j] = Math.random() * 2 - 1;

    const noise = c.createBufferSource();
    noise.buffer = buffer;
    const filter = c.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 700 + Math.random() * 3200;
    filter.Q.value = 5;
    const gain = c.createGain();
    gain.gain.setValueAtTime(0.065, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.02);
    noise.connect(filter).connect(gain).connect(c.destination);
    noise.start(t);
    noise.stop(t + 0.02);
  }

  // low descending "power surge" tone underneath, for weight
  const osc = c.createOscillator();
  const oGain = c.createGain();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(320, now);
  osc.frequency.exponentialRampToValueAtTime(55, now + 0.22);
  oGain.gain.setValueAtTime(0.0001, now);
  oGain.gain.exponentialRampToValueAtTime(0.04, now + 0.02);
  oGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
  osc.connect(oGain).connect(c.destination);
  osc.start(now);
  osc.stop(now + 0.25);
}
/** Sci-fi "system activation" glitch-synth burst for clicks. */
export function playClick() {
  if (!enabled) return;
  const c = getCtx();
  if (!c) return;
  const now = c.currentTime;

  // layer 1: descending square sweep (the "activation" body)
  const osc1 = c.createOscillator();
  const gain1 = c.createGain();
  osc1.type = "square";
  osc1.frequency.setValueAtTime(1200, now);
  osc1.frequency.exponentialRampToValueAtTime(220, now + 0.14);
  gain1.gain.setValueAtTime(0.0001, now);
  gain1.gain.exponentialRampToValueAtTime(0.045, now + 0.01);
  gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
  osc1.connect(gain1).connect(c.destination);

  // layer 2: quick rising blip (the "confirm" tick)
  const osc2 = c.createOscillator();
  const gain2 = c.createGain();
  osc2.type = "triangle";
  osc2.frequency.setValueAtTime(600, now + 0.05);
  osc2.frequency.exponentialRampToValueAtTime(1800, now + 0.12);
  gain2.gain.setValueAtTime(0.0001, now + 0.05);
  gain2.gain.exponentialRampToValueAtTime(0.04, now + 0.06);
  gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
  osc2.connect(gain2).connect(c.destination);

  // layer 3: short filtered noise burst (the "glitch" texture)
  const bufferSize = Math.floor(c.sampleRate * 0.06);
  const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const noise = c.createBufferSource();
  noise.buffer = buffer;
  const filter = c.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = 1800;
  const gain3 = c.createGain();
  gain3.gain.setValueAtTime(0.05, now);
  gain3.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
  noise.connect(filter).connect(gain3).connect(c.destination);

  osc1.start(now);
  osc1.stop(now + 0.17);
  osc2.start(now + 0.05);
  osc2.stop(now + 0.16);
  noise.start(now);
  noise.stop(now + 0.06);
}
