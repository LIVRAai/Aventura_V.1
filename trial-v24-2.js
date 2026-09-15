(() => {
  document.documentElement.dataset.novaSurface = 'trial';
  const track = (event, properties = {}) => window.NOVAAnalytics?.track?.(event, properties, 'trial');
  const form = document.querySelector('#trialStartForm');
  const next = document.querySelector('#trialNextBtn');

  form?.addEventListener('submit', () => {
    const grade = Number(new FormData(form).get('trialGrade')) || 0;
    track('trial_started', { grade });
  }, true);

  next?.addEventListener('click', () => {
    const current = String(document.querySelector('#trialQuestionCount')?.textContent || '');
    const question = Number(current.split('/')[0]) || 0;
    if (![2,4,6].includes(question)) return;
    const grade = Number(new FormData(form).get('trialGrade')) || 0;
    track('trial_mission_completed', { mission: question / 2, grade });
    if (question === 6) {
      window.setTimeout(() => {
        let result = null;
        try { result = JSON.parse(localStorage.getItem('novaTrialV24') || 'null'); } catch {}
        track('trial_completed', {
          grade: Number(result?.grade || grade) || 0,
          score: Number(result?.score || 0),
          focus: String(result?.focus || ''),
          strongest: String(result?.strongest || '')
        });
      }, 80);
    }
  }, true);
})();
