let audioCtx;

function playCinemaChime(type = 'pop') {
        const sounds = {
                pop: { wave: 'sine', f1: 520, f2: 880, fEnd: 0.12, vol: 0.08, vEnd: 0.14, stop: 0.15 },
                magic: { wave: 'triangle', f1: 440, f2: 1108.73, fEnd: 0.35, vol: 0.10, vEnd: 0.40, stop: 0.42 }
        };

        const s = sounds[type];
        if (!s) return;

        try {
                audioCtx ??= new (window.AudioContext || window.webkitAudioContext)();
                if (audioCtx.state === 'suspended') audioCtx.resume();

                const now = audioCtx.currentTime;
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                osc.type = s.wave;
                osc.frequency.setValueAtTime(s.f1, now);
                osc.frequency.exponentialRampToValueAtTime(s.f2, now + s.fEnd);

                gain.gain.setValueAtTime(s.vol, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + s.vEnd);

                osc.connect(gain).connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + s.stop);
        } catch { }
}
