---
# An instance of the Pages widget.
# Documentation: https://wowchemy.com/docs/page-builder/
active: true
widget: pages

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 30

content:
  - block: collection
    id: projects
    content:
      title: Ongoing Projects  # Single title for the block
      filters:
        folders:
          - publication  # Update this if your projects are stored in a different folder
        featured_only: true
    design:
      view: article-grid
      columns: 2
---

