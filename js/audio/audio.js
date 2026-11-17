let audioCtx = null;
function playCinemaChime(type = 'pop') {
        if (!state.soundEnabled) return;
        try {
                if (!audioCtx) {
                        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                }
                if (audioCtx.state === 'suspended') audioCtx.resume();

                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);

                const now = audioCtx.currentTime;
                if (type === 'pop') {
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(520, now);
                        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
                        gain.gain.setValueAtTime(0.08, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
                        osc.start(now);
                        osc.stop(now + 0.15);
                } else if (type === 'magic') {
                        osc.type = 'triangle';
                        osc.frequency.setValueAtTime(440, now);
                        osc.frequency.exponentialRampToValueAtTime(1108.73, now + 0.35);
                        gain.gain.setValueAtTime(0.1, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
                        osc.start(now);
                        osc.stop(now + 0.42);
                } else if (type === 'error') {
                        osc.type = 'sawtooth';
                        osc.frequency.setValueAtTime(180, now);
                        osc.frequency.linearRampToValueAtTime(120, now + 0.22);
                        gain.gain.setValueAtTime(0.07, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
                        osc.start(now);
                        osc.stop(now + 0.25);
                }
        } catch (e) {
                // Ignore audio restrictions silently
        }
}
playCinemaChime('pop');