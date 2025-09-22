const ACCORDION_ATTR = '[data-flow-ux-accordion]';
const TRIGGER_ATTR = '[data-flow-ux-accordion-trigger]';
const PANEL_ATTR = '[data-flow-ux-accordion-panel]';

const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const raf = (fn) => (window.requestAnimationFrame || window.setTimeout)(fn);

function setPanelHeight(panel, targetHeight) {
  panel.style.maxHeight = typeof targetHeight === 'number' ? `${targetHeight}px` : targetHeight;
}

function openPanel(trigger, panel, animate) {
  trigger.setAttribute('aria-expanded', 'true');
  trigger.classList.add('is-open');
  panel.classList.add('is-open');
  panel.removeAttribute('hidden');

  if (!animate || reduceMotionQuery.matches) {
    panel.style.transition = 'none';
    setPanelHeight(panel, 'none');
    raf(() => {
      panel.style.transition = '';
    });
    return;
  }

  setPanelHeight(panel, 0);
  raf(() => {
    const fullHeight = panel.scrollHeight;
    setPanelHeight(panel, fullHeight);
  });

  const handleEnd = (event) => {
    if (event.propertyName === 'max-height') {
      setPanelHeight(panel, 'none');
      panel.removeEventListener('transitionend', handleEnd);
    }
  };

  panel.addEventListener('transitionend', handleEnd);
}

function closePanel(trigger, panel, animate) {
  trigger.setAttribute('aria-expanded', 'false');
  trigger.classList.remove('is-open');
  panel.classList.remove('is-open');

  if (!animate || reduceMotionQuery.matches) {
    panel.style.transition = 'none';
    panel.setAttribute('hidden', '');
    setPanelHeight(panel, '');
    raf(() => {
      panel.style.transition = '';
    });
    return;
  }

  const fullHeight = panel.scrollHeight;
  setPanelHeight(panel, fullHeight);
  raf(() => {
    setPanelHeight(panel, 0);
  });

  const handleEnd = (event) => {
    if (event.propertyName === 'max-height') {
      panel.setAttribute('hidden', '');
      setPanelHeight(panel, '');
      panel.removeEventListener('transitionend', handleEnd);
    }
  };

  panel.addEventListener('transitionend', handleEnd);
}

function focusButtonAt(triggers, index) {
  const target = triggers[(index + triggers.length) % triggers.length];
  if (target) {
    target.focus();
  }
}

function handleKeydown(event, triggers) {
  const { key } = event;
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' '].includes(key)) {
    return;
  }

  event.preventDefault();
  const currentIndex = triggers.indexOf(event.currentTarget);

  switch (key) {
    case 'ArrowDown':
      focusButtonAt(triggers, currentIndex + 1);
      break;
    case 'ArrowUp':
      focusButtonAt(triggers, currentIndex - 1);
      break;
    case 'Home':
      focusButtonAt(triggers, 0);
      break;
    case 'End':
      focusButtonAt(triggers, triggers.length - 1);
      break;
    case 'Enter':
    case ' ':
      event.currentTarget.click();
      break;
    default:
      break;
  }
}

function setupAccordion(accordion) {
  const triggers = Array.from(accordion.querySelectorAll(TRIGGER_ATTR));

  const panels = triggers.map((trigger) => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? accordion.querySelector(`#${panelId}`) : null;
    return panel;
  });

  triggers.forEach((trigger, index) => {
    const panel = panels[index];
    if (!panel) {
      return;
    }

    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      openPanel(trigger, panel, false);
    } else {
      closePanel(trigger, panel, false);
    }

    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closePanel(trigger, panel, true);
      } else {
        openPanel(trigger, panel, true);
      }
    });

    trigger.addEventListener('keydown', (event) => handleKeydown(event, triggers));
  });
}

function initFlowUx() {
  const roots = Array.from(document.querySelectorAll('.flow-ux'));
  if (!roots.length) {
    return;
  }

  roots.forEach((root) => {
    if (!root.classList.contains('flow-ux--ready')) {
      root.classList.add('flow-ux--ready');
    }
  });

  const accordions = Array.from(document.querySelectorAll(ACCORDION_ATTR));
  accordions.forEach(setupAccordion);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(initFlowUx);
  });
} else {
  requestAnimationFrame(initFlowUx);
}

export {};
