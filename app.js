(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const github = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.31c0 .32.22.69.83.57A12 12 0 0 0 12 .3Z"/></svg>';
  const photoIcon = '<svg viewBox="0 0 48 40" fill="none" aria-hidden="true"><rect x="1" y="1" width="46" height="38" rx="1" stroke="currentColor" stroke-width="1.3"/><circle cx="33" cy="12" r="4" stroke="currentColor" stroke-width="1.3"/><path d="m2 32 13-15 13 14 8-8 10 10" stroke="currentColor" stroke-width="1.3"/></svg>';

  function text(tag, className, value) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = value;
    return element;
  }

  function media(key, label, className = '') {
    const element = document.createElement('div');
    element.className = `media-slot ${className}`;
    element.dataset.image = key;
    element.dataset.label = label;
    return element;
  }

  function renderCredentials(items, target) {
    const fragment = document.createDocumentFragment();
    items.forEach(item => {
      const row = document.createElement('article');
      row.className = 'credential-row';
      const brand = media(item.image, item.organization, 'organization-logo');
      brand.dataset.detail = 'Logo';
      const copy = document.createElement('div');
      copy.className = 'credential-copy';
      copy.append(text('h3', 'credential-role', item.title));
      copy.append(text('p', 'credential-focus', item.focus));
      copy.append(text('p', 'credential-dates', item.dates));
      if (item.detail) copy.append(text('p', 'credential-detail', item.detail));
      if (item.location) copy.append(text('p', 'credential-location', item.location));
      row.append(brand, copy);
      fragment.append(row);
    });
    document.getElementById(target).append(fragment);
  }

  function renderProject(project) {
    const article = document.createElement('article');
    article.className = `project ${project.featured ? 'featured-project' : 'compact-project'}`;
    article.id = `project-${project.id}`;
    const picture = media(project.image, project.name, 'project-image');
    picture.dataset.detail = 'Project image';
    const copy = document.createElement('div');
    copy.className = 'project-copy';
    const titleRow = document.createElement('div');
    titleRow.className = 'project-title-row';
    const heading = document.createElement('h3');
    heading.append(text('span', 'project-name', project.name), text('span', 'project-subtitle', project.subtitle));
    titleRow.append(heading);
    if (project.url) {
      const link = document.createElement('a');
      link.className = 'project-link';
      link.href = project.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `View ${project.name} on GitHub`);
      link.innerHTML = github;
      titleRow.append(link);
    }
    copy.append(titleRow, text('p', 'project-description', project.description));
    article.append(picture, copy);
    document.getElementById(project.featured ? 'top-projects-grid' : 'more-projects-grid').append(article);
  }

  function placeholder(slot, unavailable = false) {
    slot.replaceChildren();
    slot.classList.add('is-placeholder');
    slot.classList.remove('has-image');
    slot.setAttribute('role', 'img');
    slot.setAttribute('aria-label', `${slot.dataset.label} — ${unavailable ? 'image unavailable' : 'image placeholder'}`);
    const inner = document.createElement('div');
    inner.className = 'placeholder-content';
    if (!slot.classList.contains('organization-logo')) {
      const icon = document.createElement('span');
      icon.className = 'placeholder-icon';
      icon.innerHTML = photoIcon;
      inner.append(icon);
    }
    inner.append(text('span', 'placeholder-label', slot.dataset.label));
    if (slot.dataset.detail) inner.append(text('span', 'placeholder-detail', slot.dataset.detail));
    slot.append(inner);
  }

  function renderImages() {
    document.querySelectorAll('[data-image]').forEach(slot => {
      const item = data.images[slot.dataset.image];
      if (!item || !item.src) return placeholder(slot);
      const image = document.createElement('img');
      image.src = item.src;
      image.alt = item.alt || slot.dataset.label;
      if (item.width && item.height) {
        image.width = item.width;
        image.height = item.height;
      }
      image.style.objectPosition = item.position || '50% 50%';
      if (item.fit) image.style.objectFit = item.fit;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.addEventListener('error', () => placeholder(slot, true), { once: true });
      slot.classList.add('has-image');
      slot.removeAttribute('role');
      slot.removeAttribute('aria-label');
      if (item.fullSize) {
        const link = document.createElement('a');
        link.className = 'media-image-link';
        link.href = item.src;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `Open ${slot.dataset.label} image at full size`);
        link.title = 'Open full-size image';
        link.append(image);
        slot.replaceChildren(link);
      } else {
        slot.replaceChildren(image);
      }
    });
  }

  renderCredentials(data.education, 'education-list');
  renderCredentials(data.experience, 'experience-list');
  data.projects.forEach(renderProject);
  document.querySelectorAll('.github-icon').forEach(element => { element.innerHTML = github; });

  data.publications.forEach(publication => {
    const article = document.createElement('article');
    article.className = 'publication';
    const heading = text('h3', 'publication-title', publication.title);
    if (publication.url) {
      const link = document.createElement('a');
      link.href = publication.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.append(heading);
      article.append(link);
    } else article.append(heading);
    if (publication.authors) article.append(text('p', 'publication-detail', publication.authors));
    article.append(text('p', publication.details ? 'publication-detail' : 'publication-pending', publication.details || 'Formal publication details to be added.'));
    if (publication.status) article.append(text('p', 'publication-status', publication.status));
    if (publication.documentNumber || publication.doi) {
      const reference = document.createElement('p');
      reference.className = 'publication-reference';
      if (publication.documentNumber) reference.append(`IEEE Xplore document no. ${publication.documentNumber}`);
      if (publication.doi) {
        if (publication.documentNumber) reference.append(' · ');
        reference.append('DOI: ');
        const doiLink = document.createElement('a');
        doiLink.href = `https://doi.org/${publication.doi}`;
        doiLink.target = '_blank';
        doiLink.rel = 'noopener noreferrer';
        doiLink.textContent = publication.doi;
        reference.append(doiLink);
      }
      article.append(reference);
    }
    document.getElementById('publication-list').append(article);
  });
  renderImages();

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reducedMotion) {
    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
})();
